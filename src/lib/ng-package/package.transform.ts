import { DepGraph } from 'dependency-graph';
import {
  EMPTY,
  NEVER,
  Observable,
  catchError,
  concatMap,
  debounceTime,
  defaultIfEmpty,
  filter,
  finalize,
  from,
  last,
  map,
  of as observableOf,
  of,
  pipe,
  repeat,
  startWith,
  switchMap,
  takeLast,
  tap,
} from 'rxjs';
import { createFileWatch, invalidateEntryPointsAndCacheOnFileChange } from '../file-system/file-watcher';
import { BuildGraph } from '../graph/build-graph';
import { Node, STATE_DONE, STATE_ERROR, STATE_IN_PROGRESS, STATE_PENDING } from '../graph/node';
import { Transform } from '../graph/transform';
import { colors } from '../utils/color';
import { rmdir } from '../utils/fs';
import * as log from '../utils/log';
import { discoverPackages } from './discover-packages';
import {
  EntryPointNode,
  PackageNode,
  byEntryPoint,
  findPackageNode,
  isEntryPoint,
  isEntryPointPending,
  ngUrl,
} from './nodes';
import { NgPackagrOptions } from './options';

/**
 * A transformation for building an npm package:
 *
 *  - discoverPackages
 *  - options
 *  - initTsConfig
 *  - analyzeTsSources (thereby extracting template and stylesheet files)
 *  - for each entry point
 *    - run the entryPontTransform
 *
 * @param project Project token, reference to `ng-package.json`
 * @param options ng-packagr options
 * @param initTsConfigTransform Transformation initializing the tsconfig of each entry point.
 * @param analyseSourcesTransform Transformation analyzing the typescript source files of each entry point.
 * @param entryPointTransform Transformation for asset rendering and compilation of a single entry point.
 */
export const packageTransformFactory =
  (
    project: string,
    options: NgPackagrOptions,
    initTsConfigTransform: Transform,
    analyseSourcesTransform: Transform,
    entryPointTransform: Transform,
  ) =>
  (source$: Observable<BuildGraph>): Observable<BuildGraph> => {
    log.info(`Building Angular Package`);

    const buildTransform = options.watch
      ? watchTransformFactory(project, options, analyseSourcesTransform, entryPointTransform)
      : buildTransformFactory(project, options, analyseSourcesTransform, entryPointTransform);

    const pkgUri = ngUrl(project);
    const ngPkg = new PackageNode(pkgUri);

    return source$.pipe(
      // Discover packages and entry points
      // Clean the primary dest folder (should clean all secondary sub-directory, as well)
      switchMap(async graph => {
        ngPkg.data = await discoverPackages({ project });

        graph.put(ngPkg);
        const { dest, deleteDestPath } = ngPkg.data;

        if (deleteDestPath) {
          try {
            await rmdir(dest, { recursive: true });
          } catch {}
        }

        const entryPoints = [ngPkg.data.primary, ...ngPkg.data.secondaries].map(entryPoint => {
          const { destinationFiles, moduleId } = entryPoint;
          const node = new EntryPointNode(
            ngUrl(moduleId),
            ngPkg.cache.sourcesFileCache,
            ngPkg.cache.moduleResolutionCache,
          );
          node.data = { entryPoint, destinationFiles };
          node.state = STATE_PENDING;
          ngPkg.dependsOn(node);

          return node;
        });

        // Add entry points to graph
        return graph.put(entryPoints);
      }),
      // Initialize the tsconfig for each entry point
      initTsConfigTransform,
      // perform build
      buildTransform,
      finalize(() => {
        for (const node of ngPkg.dependents) {
          if (node instanceof EntryPointNode && node.cache && node.cache.stylesheetProcessor) {
            node.cache.stylesheetProcessor.destroy();
          }
        }
      }),
    );
  };

const watchTransformFactory =
  (project: string, options: NgPackagrOptions, analyseSourcesTransform: Transform, entryPointTransform: Transform) =>
  (source$: Observable<BuildGraph>): Observable<BuildGraph> => {
    const CompleteWaitingForFileChange = '\nCompilation complete. Watching for file changes...';
    const FileChangeDetected = '\nFile change detected. Starting incremental compilation...';
    const FailedWaitingForFileChange = '\nCompilation failed. Watching for file changes...';

    return source$.pipe(
      switchMap(graph => {
        const {
          data,
          cache: { sourcesFileCache },
        } = findPackageNode(graph);
        const { onFileChange, watcher } = createFileWatch([], [data.dest + '/'], options.poll);
        graph.watcher = watcher;

        return onFileChange.pipe(
          map(fileChange => invalidateEntryPointsAndCacheOnFileChange(graph, [fileChange.filePath], sourcesFileCache)),
          filter(isChanged => isChanged),
          debounceTime(100),
          tap(() => log.msg(FileChangeDetected)),
          startWith(undefined),
          map(() => graph),
        );
      }),
      switchMap(graph => {
        const startTime = Date.now();
        const pkgUri = ngUrl(project);
        const ngPkg = graph.get(pkgUri);

        return observableOf(graph).pipe(
          analyseSourcesTransform,
          // Next, run through the entry point transformation (assets rendering, code compilation)
          scheduleEntryPoints(entryPointTransform, options),
          repeat({ delay: () => (graph.some(isEntryPointPending()) ? of(1) : EMPTY) }),
          last(),
          tap(() => printBuiltAngularPackage(ngPkg, startTime)),
          catchError(error => {
            log.error(error);
            log.msg(FailedWaitingForFileChange);

            return NEVER;
          }),
          tap(() => log.msg(CompleteWaitingForFileChange)),
        );
      }),
    );
  };

const buildTransformFactory =
  (project: string, options: NgPackagrOptions, analyseSourcesTransform: Transform, entryPointTransform: Transform) =>
  (source$: Observable<BuildGraph>): Observable<BuildGraph> => {
    return source$.pipe(
      switchMap(graph => {
        const startTime = Date.now();
        const pkgUri = ngUrl(project);
        const ngPkg = graph.get(pkgUri);

        return observableOf(graph).pipe(
          // Analyse dependencies and external resources for each entry point
          analyseSourcesTransform,
          // Next, run through the entry point transformation (assets rendering, code compilation)
          scheduleEntryPoints(entryPointTransform, options),
          tap(() => printBuiltAngularPackage(ngPkg, startTime)),
        );
      }),
    );
  };

const scheduleEntryPoints = (epTransform: Transform, options: NgPackagrOptions): Transform =>
  pipe(
    concatMap(graph => {
      // Calculate node/dependency depth and determine build order
      const depGraph = new DepGraph({ circular: false });
      for (const node of graph.values()) {
        if (!isEntryPoint(node)) {
          continue;
        }

        // Remove `ng://` prefix for better error messages
        const from = node.url.substring(5);
        depGraph.addNode(from);

        for (const dep of node.dependents) {
          if (!isEntryPoint(dep)) {
            continue;
          }

          const to = dep.url.substring(5);
          depGraph.addNode(to);
          depGraph.addDependency(from, to);
        }
      }

      // The array index is the depth.
      const groups = depGraph.overallOrder().map(ngUrl);

      // Build entry points with lower depth values first.
      return from(groups).pipe(
        map((epUrl: string): EntryPointNode => graph.find(byEntryPoint().and(ep => ep.url === epUrl))),
        filter((entryPoint: EntryPointNode): boolean => entryPoint.state !== STATE_DONE),
        concatMap(ep =>
          observableOf(ep).pipe(
            // Mark the entry point as 'in-progress'
            tap(entryPoint => (entryPoint.state = STATE_IN_PROGRESS)),
            map(() => graph),
            epTransform,
            catchError(err => {
              ep.state = STATE_ERROR;

              throw err;
            }),
            finalize(() => {
              if (!options.watch) {
                ep.dispose();
              }
            }),
          ),
        ),
        takeLast(1), // don't use last as sometimes it this will cause 'no elements in sequence',
        defaultIfEmpty(graph),
      );
    }),
  );

function printBuiltAngularPackage(ngPackage: Node, startTime: number): void {
  log.success('\n------------------------------------------------------------------------------');
  log.success(`Built Angular Package
- from: ${ngPackage.data.src}
- to:   ${ngPackage.data.dest}`);
  log.success('------------------------------------------------------------------------------');
  const b = colors.bold;
  const w = colors.white;
  log.msg(w(`\nBuild at: ${b(new Date().toISOString())} - Time: ${b('' + (Date.now() - startTime))}ms\n`));
}
