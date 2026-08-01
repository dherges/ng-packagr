import * as esbuild from 'esbuild';
import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';
import { createCompilerHost, ParsedConfiguration, NgtscProgram } from '@angular/compiler-cli';
import { createHash } from 'crypto';

export interface AngularCompilerOptions {
  parsedConfiguration: ParsedConfiguration;
}

const compilerCache = {
  oldNgtscProgram: undefined as any,
  oldBuilder: undefined as ts.BuilderProgram | undefined,
  angularDiagnosticCache: new Map<string, ts.Diagnostic[]>(),
  jsCache: new Map<string, string>(), // <-- Das ist unsere Single Source of Truth
};

export function augmentProgramWithVersioning(program: ts.Program): void {
  const baseGetSourceFiles = program.getSourceFiles;
  program.getSourceFiles = function (...parameters) {
    const files: readonly (ts.SourceFile & { version?: string })[] = baseGetSourceFiles(...parameters);

    for (const file of files) {
      if (file.version === undefined) {
        file.version = createHash('sha256').update(file.text).digest('hex');
      }
    }

    return files;
  };
}

export const angularLibraryEsbuildPlugin = (options: AngularCompilerOptions): esbuild.Plugin => {
  return {
    name: 'angular-library-esbuild',
    setup(build) {
      const { parsedConfiguration } = options;
      const { jsCache } = compilerCache; // Referenz auf den globalen Cache holen

      // 1. Host im Speicher aufbauen (Ohne Dateisystem-Schreibzugriffe für JS)
      const baseTsHost = createCompilerHost({ options: parsedConfiguration.options });

      // Wir kapern den WriteFile-Callback des Hosts
      const tsCompilerHost: ts.CompilerHost = {
        ...baseTsHost,
        writeFile: (fileName, data, writeByteOrderMark, onError, sourceFiles) => {
          if (fileName.endsWith('.d.ts') || fileName.endsWith('.d.ts.map')) {
            // .d.ts Dateien schreiben wir weiterhin für das APF auf Platte
            baseTsHost.writeFile(fileName, data, writeByteOrderMark, onError, sourceFiles);
          } else if (fileName.endsWith('.js')) {
            // Ivy-transformiertes JS wandert DIREKT in den globalen jsCache
            if (sourceFiles && sourceFiles.length > 0) {
              // FIX: Absoluter Pfad-Key garantiert die Übereinstimmung mit onLoad
              const absoluteSrcPath = path.resolve(sourceFiles[0].fileName);
              jsCache.set(absoluteSrcPath, data);
            }
          }
        }
      };

      // 2. Das Angular NgtscProgram instanziieren & im Cache halten
      const angularProgram = new NgtscProgram(
        parsedConfiguration.rootNames,
        parsedConfiguration.options,
        tsCompilerHost,
        compilerCache.oldNgtscProgram
      );

      const angularCompiler = angularProgram.compiler;
      const typeScriptProgram = angularProgram.getTsProgram();
      augmentProgramWithVersioning(typeScriptProgram); 

      // Builder-Programm für das inkrementelle Typechecking im RAM hochziehen
      let builder = ts.createEmitAndSemanticDiagnosticsBuilderProgram(typeScriptProgram, tsCompilerHost);

      // Instanzen für den nächsten inkrementellen Durchlauf sichern
      compilerCache.oldNgtscProgram = angularProgram;
      compilerCache.oldBuilder = builder;

      // Vorbereitungen für asynchrone Templates/Styles treffen
      // let analysisPromise: Promise<void> | null = null;

      build.onStart(async () => {
        // Analysiert asynchrone Templates/Stylesheets im Vorfeld
        await angularCompiler.analyzeAsync();
        
        const transformers = angularCompiler.prepareEmit().transformers;

        for (const sourceFile of builder.getSourceFiles()) {
          if (angularCompiler.ignoreForEmit.has(sourceFile)) {
            continue;
          }

          if (angularCompiler.incrementalCompilation.safeToSkipEmit(sourceFile)) {
            continue;
          }

          // WICHTIG: Das Setzen des 4. Parameters auf 'false' (emitOnlyDtsFiles) 
          // veranlasst den TS-Builder, die .d.ts-Pfade anzusteuern UND den JS-Zweig zu befeuern!
          builder.emit(sourceFile, undefined, undefined, false, transformers);
          angularCompiler.incrementalCompilation.recordSuccessfulEmit(sourceFile);
        }
      });

      // Register onResolve hook
      build.onResolve({ filter: /\.ts$/ }, args => {
        return { path: path.resolve(args.resolveDir, args.path), namespace: 'file' };
      });

      // Register onLoad hook for in-memory Ivy compiler
      build.onLoad({ filter: /\.ts$/, namespace: 'file' }, async args => {
        const sourcePath = path.resolve(args.path);

        // Der Cache ist dank onStart bereits randvoll mit Ivy-JavaScript
        const compiledCode = jsCache.get(sourcePath);
        if (compiledCode) {
          return {
            contents: compiledCode,
            loader: 'js',
          };
        }

        const targetSourceFile = builder.getSourceFile(sourcePath);
        if (targetSourceFile && angularCompiler.ignoreForEmit.has(targetSourceFile)) {
          return { contents: '', loader: 'empty' };
        }

        const rawContent = await fs.promises.readFile(sourcePath, 'utf8');
        return { contents: rawContent, loader: 'ts' };
      });
    },
  };
};
