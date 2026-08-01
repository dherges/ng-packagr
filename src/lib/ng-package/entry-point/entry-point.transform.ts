import { pipe, switchMap, tap } from 'rxjs';
import { STATE_DONE } from '../../graph/node';
import { Transform } from '../../graph/transform';
import * as log from '../../utils/log';
import { findEntryPointInProgress } from '../nodes';
import { buildEntryPoint } from '../../esbuild/build-entry-point';

/**
 * A re-write of the `transformSources()` script that transforms an entry point from sources to distributable format.
 *
 * Sources are TypeScript source files accompanied by HTML templates and xCSS stylesheets.
 * See the Angular Package Format for a detailed description of what the distributables include.
 *
 * The current transformation pipeline can be thought of as:
 *
 *  - buildEntryPoint (native esbuild)
 *  - writePackage
 *   - copyStagedFiles (bundles, esm, dts, sourcemaps)
 *   - writePackageJson
 *
 * The transformation pipeline is pluggable through the dependency injection system.
 * Sub-transformations are passed to this factory function as arguments.
 *
 * @param writePackage Transformation writing a distribution-ready `package.json` (for publishing to npm registry).
 */
export const entryPointTransformFactory = (
  writePackage: Transform,
): Transform =>
  pipe(
    tap(graph => {
      // Peek the first entry point from the graph
      const entryPoint = findEntryPointInProgress(graph);
      log.msg('\n------------------------------------------------------------------------------');
      log.msg(`Building entry point '${entryPoint.data.entryPoint.moduleId}'`);
      log.msg('------------------------------------------------------------------------------');
    }),

    switchMap(async graph => {
      const entryPoint = findEntryPointInProgress(graph);
      const entryPointFilePath = entryPoint.data.entryPoint.entryFilePath;
      const outputFile = entryPoint.data.destinationFiles.fesm2022;
      const declarationsDir = entryPoint.data.destinationFiles.declarationsDir;
      const declarationsBundled = entryPoint.data.destinationFiles.declarationsBundled;
      const parsedConfiguration = entryPoint.data.tsConfig;
      await buildEntryPoint(
        entryPointFilePath,
        outputFile,
        declarationsDir,
        declarationsBundled,
        parsedConfiguration
      );

      return graph;
    }),

    // TypeScript sources compilation
    // compileTs,
    // After TypeScript: bundling and write package
    // writeBundles,

    writePackage,
    tap(graph => {
      const entryPoint = findEntryPointInProgress(graph);
      entryPoint.state = STATE_DONE;
    }),
  );
