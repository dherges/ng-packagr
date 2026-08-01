import { ParsedConfiguration } from '@angular/compiler-cli';
import * as esbuild from 'esbuild';
import * as path from 'path';
import * as ts from 'typescript';
import { angularLibraryEsbuildPlugin } from './angular-library-plugin';

export async function buildEntryPoint(
  entryPointFilePath: string,
  outputFile: string,
  parsedConfiguration: ParsedConfiguration
) {
  console.log('🚀 Stage 1: Generating APF Type Definitions (.d.ts)...');
  const { NgtscProgram } = await import('@angular/compiler-cli');
  const distRoot = path.dirname(path.dirname(outputFile));
  const angularDtsOptions = {
    ...parsedConfiguration.options,
    declaration: true,
    emitDeclarationOnly: true, // NUR Typen schreiben!
    declarationDir: distRoot,
    outDir: distRoot,
  };
  const dtsCompilerHost = ts.createCompilerHost({ options: angularDtsOptions as any });
  const angularDtsProgram = new NgtscProgram(
    parsedConfiguration.rootNames,
    angularDtsOptions as any,
    dtsCompilerHost
  );
  await angularDtsProgram.compiler.analyzeAsync();
  angularDtsProgram.compiler.prepareEmit();
  angularDtsProgram.getTsProgram().emit(undefined, undefined, undefined, true);

  console.log('🚀 Stage 2: Building JavaScript Bundle (esbuild)...');
  await esbuild.build({
    entryPoints: [entryPointFilePath],
    bundle: true,
    format: 'esm',
    outfile: outputFile,
    outExtension: { '.js': '.mjs' },
    sourcemap: true,
    // conditions: ['es2022'],
    // legalComments: 'none',
    packages: 'external', 
    treeShaking: true,
    minifyIdentifiers: false,
    minifySyntax: true,
    minifyWhitespace: false,
    plugins: [
      angularLibraryEsbuildPlugin({
        parsedConfiguration
      })
    ],
  });

  console.log('🎉 Library built success!');
}
