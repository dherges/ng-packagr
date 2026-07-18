import { Plugin } from 'esbuild';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as sass from 'sass'; // SASS direkt im Speicher kompilieren

export const angularTemplateInlinePlugin = (): Plugin => ({
  name: 'angular-template-inline',
  setup(build) {
    // Wir klinken uns in alle TypeScript-Dateien ein
    build.onLoad({ filter: /\.ts$/ }, async (args) => {
      let source = await fs.readFile(args.path, 'utf8');

      // 1. Einfaches Beispiel für Stylesheet-Inlining (SCSS -> CSS)
      if (source.includes('styleUrls')) {
        // Hier würde ein Regex oder AST-Parser die SCSS-Datei extrahieren
        const scssPath = path.resolve(path.dirname(args.path), './component.scss');
        
        // SASS-Kompilierung nativ im Speicher ohne temporäre Dateien
        const compiledCss = sass.compile(scssPath, { style: 'compressed' });

        // Ersetze styleUrls im Quellcode mit dem fertigen CSS-String
        source = source.replace(/styleUrls:\s*\[['"].*['"]\]/, `styles: [\`${compiledCss.css}\`]`);
      }

      // 2. Rückgabe des transformierten Codes an esbuild
      return {
        contents: source,
        loader: 'ts', // Sagt esbuild, dass es sich um TypeScript handelt
      };
    });
  },
});
