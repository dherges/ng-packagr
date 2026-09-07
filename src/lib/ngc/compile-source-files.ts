import { CompilerOptions, ParsedConfiguration } from '@angular/compiler-cli';
import { join } from 'node:path';
import ts from 'typescript';
import { BuildGraph } from '../graph/build-graph';
import { findEntryPointInProgress, findPackageNode } from '../ng-package/nodes';
import { NgPackagrOptions } from '../ng-package/options';
import { StylesheetProcessor } from '../styles/stylesheet-processor';
import { augmentProgramWithVersioning, cacheCompilerHost } from '../ts/cache-compiler-host';
import * as log from '../utils/log';

export async function compileSourceFiles(
  graph: BuildGraph,
  tsConfig: ParsedConfiguration,
  moduleResolutionCache: ts.ModuleResolutionCache,
  options: NgPackagrOptions,
  extraOptions?: Partial<CompilerOptions>,
  stylesheetProcessor?: StylesheetProcessor,
) {
  const { NgtscProgram, formatDiagnostics } = await import('@angular/compiler-cli');
  const { cacheDirectory, watch, cacheEnabled } = options;
  const tsConfigOptions: CompilerOptions = { ...tsConfig.options, ...extraOptions };
  const entryPoint = findEntryPointInProgress(graph);
  const ngPackageNode = findPackageNode(graph);
  const inlineStyleLanguage = ngPackageNode.data.inlineStyleLanguage;

  const cacheDir = cacheEnabled && cacheDirectory;
  if (cacheDir) {
    tsConfigOptions.incremental ??= true;
    tsConfigOptions.tsBuildInfoFile ??= join(
      cacheDir,
      `tsbuildinfo/${entryPoint.data.entryPoint.flatModuleFile}.tsbuildinfo`,
    );
  }

  const tsCompilerHost = cacheCompilerHost(
    graph,
    entryPoint,
    tsConfigOptions,
    moduleResolutionCache,
    stylesheetProcessor,
    inlineStyleLanguage,
  );

  const cache = entryPoint.cache;
  let usingBuildInfo = false;

  let oldBuilder = cache.oldBuilder;
  if (!oldBuilder && cacheDir) {
    oldBuilder = ts.readBuilderProgram(tsConfigOptions, tsCompilerHost);
    usingBuildInfo = true;
  }

  // Create the Angular specific program that contains the Angular compiler
  const angularProgram = new NgtscProgram(tsConfig.rootNames, tsConfigOptions, tsCompilerHost, cache.oldNgtscProgram);

  const angularCompiler = angularProgram.compiler;
  const { ignoreForDiagnostics, ignoreForEmit } = angularCompiler;

  // SourceFile versions are required for builder programs.
  // The wrapped host inside NgtscProgram adds additional files that will not have versions.
  const typeScriptProgram = angularProgram.getTsProgram();
  augmentProgramWithVersioning(typeScriptProgram);

  let builder: ts.BuilderProgram | ts.EmitAndSemanticDiagnosticsBuilderProgram;
  if (watch || cacheDir) {
    builder = cache.oldBuilder = ts.createEmitAndSemanticDiagnosticsBuilderProgram(
      typeScriptProgram,
      tsCompilerHost,
      oldBuilder,
    );
    cache.oldNgtscProgram = angularProgram;
  } else {
    builder = ts.createEmitAndSemanticDiagnosticsBuilderProgram(typeScriptProgram, tsCompilerHost);
  }

  // Update semantic diagnostics cache
  const affectedFiles = new Set<ts.SourceFile>();

  // Analyze affected files when in watch mode for incremental type checking
  if ('getSemanticDiagnosticsOfNextAffectedFile' in builder) {
    while (true) {
      const result = builder.getSemanticDiagnosticsOfNextAffectedFile(undefined, sourceFile => {
        // If the affected file is a TTC shim, add the shim's original source file.
        // This ensures that changes that affect TTC are typechecked even when the changes
        // are otherwise unrelated from a TS perspective and do not result in Ivy codegen changes.
        // For example, changing @Input property types of a directive used in another component's
        // template.
        if (ignoreForDiagnostics.has(sourceFile) && sourceFile.fileName.endsWith('.ngtypecheck.ts')) {
          // This file name conversion relies on internal compiler logic and should be converted
          // to an official method when available. 15 is length of `.ngtypecheck.ts`
          const originalFilename = sourceFile.fileName.slice(0, -15) + '.ts';
          const originalSourceFile = builder.getSourceFile(originalFilename);
          if (originalSourceFile) {
            affectedFiles.add(originalSourceFile);
          }

          return true;
        }

        return false;
      });

      if (!result) {
        break;
      }

      affectedFiles.add(result.affected as ts.SourceFile);
    }

    // Add all files with associated template type checking files.
    // Stored TS build info does not have knowledge of the AOT compiler or the typechecking state of the templates.
    // To ensure that errors are reported correctly, all AOT component diagnostics need to be analyzed even if build
    // info is present.
    if (usingBuildInfo) {
      for (const sourceFile of builder.getSourceFiles()) {
        if (ignoreForDiagnostics.has(sourceFile) && sourceFile.fileName.endsWith('.ngtypecheck.ts')) {
          // This file name conversion relies on internal compiler logic and should be converted
          // to an official method when available. 15 is length of `.ngtypecheck.ts`
          const originalFilename = sourceFile.fileName.slice(0, -15) + '.ts';
          const originalSourceFile = builder.getSourceFile(originalFilename);
          if (originalSourceFile) {
            affectedFiles.add(originalSourceFile);
          }
        }
      }
    }
  }

  // Collect program level diagnostics
  const allDiagnostics: ts.Diagnostic[] = [
    ...angularCompiler.getOptionDiagnostics(),
    ...builder.getOptionsDiagnostics(),
    ...builder.getGlobalDiagnostics(),
  ];

  // Required to support asynchronous resource loading
  // Must be done before creating transformers or getting template diagnostics
  await angularCompiler.analyzeAsync();

  // Collect source file specific diagnostics
  const { angularDiagnosticCache, declarationDiagnosticCache } = cache;

  for (const sourceFile of builder.getSourceFiles()) {
    if (ignoreForDiagnostics.has(sourceFile)) {
      continue;
    }

    allDiagnostics.push(...builder.getSyntacticDiagnostics(sourceFile), ...builder.getSemanticDiagnostics(sourceFile));

    // Declaration files cannot have declaration or template diagnostics
    if (sourceFile.isDeclarationFile) {
      continue;
    }

    // Only request declaration diagnostics for affected or uncached files
    if (affectedFiles.has(sourceFile) || !declarationDiagnosticCache.has(sourceFile)) {
      // We use the `typeScriptProgram` instead of `builder` here as a
      // performance workaround for: https://github.com/microsoft/TypeScript/issues/60970
      const declarationDiagnostics = typeScriptProgram.getDeclarationDiagnostics(sourceFile);
      declarationDiagnosticCache.update(sourceFile, declarationDiagnostics);
    }

    allDiagnostics.push(...declarationDiagnosticCache.get(sourceFile));

    // Only request Angular template diagnostics for affected files to avoid
    // overhead of template diagnostics for unchanged files.
    if (affectedFiles.has(sourceFile) || !angularDiagnosticCache.has(sourceFile)) {
      const angularDiagnostics = angularCompiler.getDiagnosticsForFile(
        sourceFile,
        affectedFiles.size === 1 ? /** OptimizeFor.SingleFile **/ 0 : /** OptimizeFor.WholeProgram */ 1,
      );

      angularDiagnosticCache.update(sourceFile, angularDiagnostics);
    }

    allDiagnostics.push(...angularDiagnosticCache.get(sourceFile));
  }

  const otherDiagnostics = [];
  const errorDiagnostics = [];
  for (const diagnostic of allDiagnostics) {
    if (diagnostic.category === ts.DiagnosticCategory.Error) {
      errorDiagnostics.push(diagnostic);
    } else {
      otherDiagnostics.push(diagnostic);
    }
  }

  if (otherDiagnostics.length) {
    log.msg(formatDiagnostics(otherDiagnostics));
  }

  if (errorDiagnostics.length) {
    throw new Error(formatDiagnostics(errorDiagnostics));
  }

  const transformers = angularCompiler.prepareEmit().transformers;

  const writeFile: ts.WriteFileCallback = (fileName, data, writeByteOrderMark, onError, sourceFiles) => {
    if (sourceFiles) {
      for (const sourceFile of sourceFiles) {
        if (!sourceFile.isDeclarationFile) {
          angularCompiler.incrementalCompilation.recordSuccessfulEmit(sourceFile);
        }
      }
    }

    tsCompilerHost.writeFile(fileName, data, writeByteOrderMark, onError, sourceFiles);
  };

  if ('getSemanticDiagnosticsOfNextAffectedFile' in builder) {
    while (
      builder.emitNextAffectedFile((fileName, data, writeByteOrderMark, onError, sourceFiles) => {
        if (fileName.endsWith('.tsbuildinfo')) {
          tsCompilerHost.writeFile(fileName, data, writeByteOrderMark, onError, sourceFiles);
        }
      })
    ) {
      // empty
    }
  }

  for (const sourceFile of builder.getSourceFiles()) {
    if (sourceFile.isDeclarationFile || ignoreForEmit.has(sourceFile)) {
      continue;
    }

    if (angularCompiler.incrementalCompilation.safeToSkipEmit(sourceFile)) {
      continue;
    }

    builder.emit(sourceFile, writeFile, undefined, undefined, transformers);
  }
}
