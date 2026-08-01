import * as esbuild from 'esbuild';
import { generateTypeDefinitions } from './tsc-compiler.js';
import { angularTemplateInlinePlugin } from './angular-template-inline-plugin.js';

export interface LibraryBuilderOptions {
  entryPoint: string;
  dest: string;
  sourcemap?: boolean;
}

export async function buildLibrary(options: LibraryBuilderOptions): Promise<void> {
  console.log('🚀 Building library...');

  // Generate type definitions (.d.ts) by the Angular Compiler API
  await generateTypeDefinitions({
    entryPoints: [options.entryPoint],
    outDir: options.dest
  });

  // Flatten and bundle JavaScript files (`.mjs`) by esbuild
  await esbuild.build({
    entryPoints: [options.entryPoint],
    bundle: true,
    format: 'esm',
    outfile: `${options.dest}/fesm2022/library.mjs`, // TODO: adjust output path...
    conditions: ['es2022'],
    legalComments: 'none',
    packages: 'external',
    plugins: [
      angularTemplateInlinePlugin()
    ],
    sourcemap: options.sourcemap ?? true,
  });

  console.log('🎉 Library built success!');
}
