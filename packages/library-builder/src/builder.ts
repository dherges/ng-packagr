import * as esbuild from 'esbuild';
import { generateTypeDefinitions } from './tsc-compiler.js';
import { angularTemplateInlinePlugin } from './angular-template-inline-plugin.js';

export interface LibraryBuilderOptions {
  entryPoint: string;
  dest: string;
  sourcemap?: boolean;
}

export async function buildLibrary(options: LibraryBuilderOptions): Promise<void> {
  // 1. Generiere Typdefinitionen (.d.ts) über die Angular-API
  await generateTypeDefinitions({
    entryPoints: [options.entryPoint],
    outDir: options.dest
  });

  // 2. Nutze Esbuild für das blitzschnelle JS-Flattening & Bundling
  console.log('🚀 Starte Esbuild für das JavaScript-Bundling (FESM)...');
  await esbuild.build({
    entryPoints: [options.entryPoint],
    bundle: true,
    format: 'esm',
    outfile: `${options.dest}/fesm2022/library.mjs`,
    conditions: ['es2022'],
    legalComments: 'none', // Löst dein ursprüngliches GitHub-Issue vollautomatisch!
    plugins: [
      angularTemplateInlinePlugin() // Verarbeitet Styles & Templates im Speicher
    ],
    sourcemap: options.sourcemap ?? true,
  });

  console.log('🎉 Bibliothek erfolgreich gebaut!');
}
