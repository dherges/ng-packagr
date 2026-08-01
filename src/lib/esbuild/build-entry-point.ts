import { ParsedConfiguration } from '@angular/compiler-cli';
import * as esbuild from 'esbuild';
import * as path from 'path';
import { angularLibraryEsbuildPlugin } from './angular-library-plugin';
import { createRawTypeDefinitions } from './create-type-definitions';
import { bundleTypeDefinitions } from './bundle-type-definitions';

export async function buildEntryPoint(
  entryPointFilePath: string,
  outputFile: string,
  declarationsDir: string,
  declarationsBundled: string,
  parsedConfiguration: ParsedConfiguration
) {
  console.log('🚀 Stage 1: Generating APF Type Definitions (.d.ts)...');
  const flatModuleFile = path.basename(declarationsBundled, '.d.ts');
  const distRoot = path.dirname(path.dirname(outputFile));
  const tmpTypesDir = path.join(distRoot, 'tmp-typings', path.basename(declarationsDir));
  await createRawTypeDefinitions({
    parsedConfiguration,
    tmpTypesDir,
    flatModuleFile
  });
  await bundleTypeDefinitions({
    tmpTypesDir,
    flatModuleFile,
    declarationsDir,
    declarationsBundled
  });

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
