import { ParsedConfiguration } from '@angular/compiler-cli';
import * as esbuild from 'esbuild';
import { angularLibraryEsbuildPlugin } from './angular-library-plugin';
import { bundleTypeDefinitions } from './bundle-type-definitions';
import { createRawTypeDefinitions } from './create-type-definitions';

export async function buildEntryPoint(
  entryPointFilePath: string,
  flatModuleFile: string,
  declarations: string,
  declarationsDir: string,
  declarationsBundled: string,
  outputFile: string,
  parsedConfiguration: ParsedConfiguration
) {
  console.log('🚀 Stage 1: Generating APF Type Definitions (.d.ts)...');
  await createRawTypeDefinitions({
    parsedConfiguration,
    tmpTypesDir: declarations,
    flatModuleFile
  });
  await bundleTypeDefinitions({
    tmpTypesDir: declarations,
    flatModuleFile,
    declarationsDir,
    declarationsBundled
  });

  // TODO: esbuild seems to emit individual .js and .d.ts files...why???

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
