import { pipe, switchMap, tap } from 'rxjs';
import { buildEntryPoint } from '../../esbuild/build-entry-point';
import { STATE_DONE } from '../../graph/node';
import { Transform } from '../../graph/transform';
import * as log from '../../utils/log';
import { findEntryPointInProgress } from '../nodes';


/**
 * Creates a `Transform` to compile an entry point from sources to APF-distributable format,
 * through `esbuild` natively.
 *
 * A re-write of the `entryPointTransformFactory()` function,
 * which was a re-write of the `transformSources()` script.
 *
 * Sources are TypeScript source files accompanied by HTML templates and xCSS stylesheets.
 * See the Angular Package Format for a detailed description of what the distributables include.
 *
 * @param writePackage A `Transform` to write a distribution-ready `package.json` (for publishing to npm registry).
 */
export const entryPointEsbuildTransformFactory = (
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
    // ng-packagr native: build with native esbuild
    switchMap(async graph => {
      log.info('Building with esbuild natively...')
      const entryPoint = findEntryPointInProgress(graph);
      const entryPointFilePath = entryPoint.data.entryPoint.entryFilePath;
      const flatModuleFile = entryPoint.data.entryPoint.flatModuleFile;
      const outputFile = entryPoint.data.destinationFiles.fesm2022;
      const declarations = entryPoint.data.destinationFiles.declarations;
      const declarationsDir = entryPoint.data.destinationFiles.declarationsDir;
      const declarationsBundled = entryPoint.data.destinationFiles.declarationsBundled;
      const parsedConfiguration = entryPoint.data.tsConfig;

      await buildEntryPoint(
        entryPointFilePath,
        flatModuleFile,
        declarations,
        declarationsDir,
        declarationsBundled,
        outputFile,
        parsedConfiguration
      );

      return graph;
    }),
    writePackage,
    tap(graph => {
      const entryPoint = findEntryPointInProgress(graph);
      entryPoint.state = STATE_DONE;
    }),
  );
