import * as path from 'path';
import * as ts from 'typescript';
import * as ora from 'ora';
import { Transform, transformFromPromise } from '../../graph/transform';
import { compileSourceFiles } from '../../ngc/compile-source-files';
import { NgccProcessor } from '../../ngc/ngcc-processor';
import { setDependenciesTsConfigPaths } from '../../ts/tsconfig';
import { isEntryPointInProgress, EntryPointNode, isEntryPoint } from '../nodes';
import { StylesheetProcessor as StylesheetProcessorClass } from '../../styles/stylesheet-processor';

export const compileNgcTransformFactory = (StylesheetProcessor: typeof StylesheetProcessorClass): Transform => {
  return transformFromPromise(async graph => {
    const spinner = ora({
      hideCursor: false,
      discardStdin: false,
    }).start(`Compiling TypeScript sources through NGC`);

    try {
      const entryPoint: EntryPointNode = graph.find(isEntryPointInProgress());
      const entryPoints: EntryPointNode[] = graph.filter(isEntryPoint);
      // Add paths mappings for dependencies
      const tsConfig = setDependenciesTsConfigPaths(entryPoint.data.tsConfig, entryPoints);

      // Compile TypeScript sources
      const { esm2015, declarations } = entryPoint.data.destinationFiles;
      const { basePath, cssUrl, styleIncludePaths } = entryPoint.data.entryPoint;
      const { moduleResolutionCache, ngccProcessingCache, stylesheetProcessor = new StylesheetProcessor(basePath, cssUrl, styleIncludePaths) } = entryPoint.cache;
      entryPoint.cache.stylesheetProcessor = stylesheetProcessor;

      const ngccProcessor = tsConfig.options.enableIvy
        ? new NgccProcessor(ngccProcessingCache, tsConfig.project, tsConfig.options, entryPoints)
        : undefined;

      if (ngccProcessor && !entryPoint.data.entryPoint.isSecondaryEntryPoint) {
        // Only run the async version of NGCC during the primary entrypoint processing.
        await ngccProcessor.process();
      }

      await compileSourceFiles(
        graph,
        tsConfig,
        moduleResolutionCache,
        stylesheetProcessor,
        {
          outDir: path.dirname(esm2015),
          declarationDir: path.dirname(declarations),
          declaration: true,
          target: ts.ScriptTarget.ES2015,
        },
        ngccProcessor,
      );
    } catch (error) {
      spinner.fail();
      throw error;
    }

    spinner.succeed();
    return graph;
  });
};
