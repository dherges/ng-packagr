import { Plugin } from 'esbuild';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as sass from 'sass';

export const angularTemplateInlinePlugin = (): Plugin => ({
  name: 'angular-template-inline',
  setup(build) {
    build.onLoad({ filter: /\.ts$/ }, async (args) => {
      let source = await fs.readFile(args.path, 'utf8');

      // TODO: Inline style sheets (SCSS -> CSS) --- TODO: solve this by ts AST
      if (source.includes('styleUrls')) {
        // TODO: a regex or AST-Parser should extract the references scss source file
        const scssPath = path.resolve(path.dirname(args.path), './component.scss');
        // Compile sass in-memory
        const compiledCss = sass.compile(scssPath, { style: 'compressed' });
        // Replace styleUrls in the lirbary sources with the final CSS string
        source = source.replace(/styleUrls:\s*\[['"].*['"]\]/, `styles: [\`${compiledCss.css}\`]`);
      }

      // Return the transformed code to esbuild
      return {
        contents: source,
        loader: 'ts',
      };
    });
  },
});
