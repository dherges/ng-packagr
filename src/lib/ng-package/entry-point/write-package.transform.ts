import ora, { type Ora } from 'ora';
import * as path from 'path';
import { glob } from 'tinyglobby';
import { AssetPattern } from '../../../ng-package.schema';
import { BuildGraph } from '../../graph/build-graph';
import { Node } from '../../graph/node';
import { isInProgress } from '../../graph/select';
import { transformFromPromise } from '../../graph/transform';
import { colors } from '../../utils/color';
import { copyFile, mkdir, rmdir, stat, writeFile } from '../../utils/fs';
import * as log from '../../utils/log';
import { ConditionalExport, generatePackageExports, generateWatchVersion } from '../../utils/package-json';
import { ensureUnixPath } from '../../utils/path';
import { EntryPointNode, PackageNode, fileUrl, findPackageNode, isEntryPoint } from '../nodes';
import { NgPackagrOptions } from '../options';
import { NgPackage } from '../package';
import { NgEntryPoint } from './entry-point';

type CompilationMode = 'partial' | 'full' | undefined;

export const writePackageTransform = (options: NgPackagrOptions) =>
  transformFromPromise(async graph => {
    const spinner = ora({ hideCursor: false, discardStdin: false });
    const entryPoints = graph.filter(isEntryPoint);
    const entryPoint = entryPoints.find(isInProgress);
    const ngEntryPoint: NgEntryPoint = entryPoint.data.entryPoint;
    const ngPackageNode = findPackageNode(graph);
    const ngPackage = ngPackageNode.data;
    const { destinationFiles } = entryPoint.data;

    if (!ngEntryPoint.isSecondaryEntryPoint) {
      spinner.start('Copying assets');
      try {
        await copyAssets(graph, entryPoint, ngPackageNode, entryPoints);
      } catch (error) {
        spinner.fail();
        throw error;
      }
      spinner.succeed();
    }

    // 6. WRITE PACKAGE.JSON
    const relativeUnixFromDestPath = (filePath: string) =>
      ensureUnixPath(path.relative(ngEntryPoint.destinationPath, filePath));

    if (!ngEntryPoint.isSecondaryEntryPoint) {
      try {
        spinner.start('Writing package manifest');
        if (!options.watch) {
          const primary = ngPackageNode.data.primary;

          const nestedPackageJsons: string[] = [];
          // Secondary entry-points package.json
          for (const { data } of entryPoints) {
            if (!data.entryPoint.isSecondaryEntryPoint) {
              continue;
            }

            const packageJsonPath = ensureUnixPath(
              path.join(path.relative(primary.destinationPath, data.entryPoint.destinationPath), 'package.json'),
            );
            nestedPackageJsons.push(packageJsonPath);
          }

          if (nestedPackageJsons.length) {
            await writeFile(
              path.join(primary.destinationPath, '.npmignore'),
              `# Nested package.json's are only needed for development.\n${nestedPackageJsons.join('\n')}`,
            );
          }
        }

        const { compilationMode } = entryPoint.data.tsConfig.options;

        await writePackageJson(
          ngEntryPoint,
          ngPackage,
          {
            module: relativeUnixFromDestPath(destinationFiles.fesm2022),
            typings: relativeUnixFromDestPath(destinationFiles.declarationsBundled),
            exports: generatePackageExports(ngEntryPoint, entryPoints),
            // webpack v4+ specific flag to enable advanced optimizations and code splitting
            sideEffects: ngEntryPoint.packageJson.sideEffects ?? false,
          },
          !!options.watch,
          compilationMode as CompilationMode,
          spinner,
        );
      } catch (error) {
        spinner.fail();
        throw error;
      }
      spinner.succeed();
    } else if (ngEntryPoint.isSecondaryEntryPoint) {
      // Write a package.json in each secondary entry-point
      // This is need for esbuild to secondary entry-points in dist correctly.
      await mkdir(ngEntryPoint.destinationPath, { recursive: true });
      await writeFile(
        path.join(ngEntryPoint.destinationPath, 'package.json'),
        JSON.stringify(
          {
            module: relativeUnixFromDestPath(destinationFiles.fesm2022),
            typings: relativeUnixFromDestPath(destinationFiles.declarationsBundled),
          },
          undefined,
          2,
        ),
      );
    }

    spinner.succeed(`Built ${ngEntryPoint.moduleId}`);
  });

type AssetEntry = Exclude<AssetPattern, string>;

async function copyAssets(
  graph: BuildGraph,
  entryPointNode: EntryPointNode,
  ngPackageNode: PackageNode,
  entryPoints: EntryPointNode[],
): Promise<void> {
  const ngPackage = ngPackageNode.data;
  const globsForceIgnored: string[] = ['.gitkeep', '**/.DS_Store', '**/Thumbs.db', `${ngPackage.dest}/**`];
  const defaultAssets: AssetEntry[] = [
    { glob: 'LICENSE', input: '/', output: '/' },
    ...entryPoints.map(({ data }) => {
      const subpath = data.entryPoint.destinationFiles.directory || '/';

      return { glob: 'README.md', input: subpath, output: subpath };
    }),
  ];

  const assets: AssetEntry[] = [];
  for (const assetPath of [...ngPackage.assets, ...defaultAssets]) {
    let asset: AssetEntry;
    if (typeof assetPath === 'object') {
      asset = { ...assetPath };
    } else {
      const [isDir, isFile] = await stat(path.join(ngPackage.src, assetPath))
        .then(stats => [stats.isDirectory(), stats.isFile()])
        .catch(() => [false, false]);
      if (isDir) {
        asset = { glob: '**/*', input: assetPath, output: assetPath };
      } else if (isFile) {
        // filenames are their own glob
        asset = { glob: path.basename(assetPath), input: path.dirname(assetPath), output: path.dirname(assetPath) };
      } else {
        asset = { glob: assetPath, input: '/', output: '/' };
      }
    }

    asset.input = path.join(ngPackage.src, asset.input);
    asset.output = path.join(ngPackage.dest, asset.output);

    const isAncestorPath = (target: string, datum: string) => path.relative(datum, target).startsWith('..');
    if (isAncestorPath(asset.input, ngPackage.src)) {
      throw new Error('Cannot read assets from a location outside of the project root.');
    }
    if (isAncestorPath(asset.output, ngPackage.dest)) {
      throw new Error('Cannot write assets to a location outside of the output path.');
    }

    assets.push(asset);
  }

  for (const asset of assets) {
    const filePaths = await glob(asset.glob, {
      cwd: asset.input,
      ignore: [...(asset.ignore ?? []), ...globsForceIgnored],
      dot: true,
      onlyFiles: true,
      followSymbolicLinks: asset.followSymlinks,
    });
    for (const filePath of filePaths) {
      const fileSrcFullPath = path.join(asset.input, filePath);
      const fileDestFullPath = path.join(asset.output, filePath);
      const nodeUri = fileUrl(ensureUnixPath(fileSrcFullPath));
      let node = graph.get(nodeUri);
      if (!node) {
        node = new Node(nodeUri);
        graph.put(node);
      }
      entryPointNode.dependsOn(node);
      await copyFile(fileSrcFullPath, fileDestFullPath);
    }
  }
}

/**
 * Creates and writes a `package.json` file of the entry point used by the `node_module`
 * resolution strategies.
 *
 * #### Example
 *
 * A consumer of the entry point depends on it by `import {..} from '@my/module/id';`.
 * The module id `@my/module/id` will be resolved to the `package.json` file that is written by
 * this build step.
 * The properties `main`, `module`, `typings` (and so on) in the `package.json` point to the
 * flattened JavaScript bundles, type definitions, (...).
 *
 * @param entryPoint An entry point of an Angular package / library
 * @param additionalProperties Additional properties, e.g. binary artefacts (bundle files), to merge into `package.json`
 */
async function writePackageJson(
  entryPoint: NgEntryPoint,
  pkg: NgPackage,
  additionalProperties: { [key: string]: string | boolean | string[] | ConditionalExport },
  isWatchMode: boolean,
  compilationMode: CompilationMode,
  spinner: Ora,
): Promise<void> {
  log.debug('Writing package.json');

  // set additional properties
  const packageJson = { ...entryPoint.packageJson, ...additionalProperties };
  packageJson.type ??= 'module';

  // read tslib version from `@angular/compiler` so that our tslib
  // version at least matches that of angular if we use require('tslib').version
  // it will get what installed and not the minimum version nor if it is a `~` or `^`
  // this is only required for primary
  if (isWatchMode) {
    // Needed because of Webpack's 5 `cachemanagedpaths`
    // https://github.com/angular/angular-cli/issues/20962
    packageJson.version = generateWatchVersion();
  }

  if (!packageJson.peerDependencies?.tslib && !packageJson.dependencies?.tslib) {
    const {
      peerDependencies: angularPeerDependencies = {},
      dependencies: angularDependencies = {},
    } = require('@angular/compiler/package.json');
    const tsLibVersion = angularPeerDependencies.tslib || angularDependencies.tslib;

    if (tsLibVersion) {
      packageJson.dependencies = { ...packageJson.dependencies, tslib: tsLibVersion };
    }
  } else if (packageJson.peerDependencies?.tslib) {
    spinner.warn(
      colors.yellow(
        `'tslib' is no longer recommended to be used as a 'peerDependencies'. Moving it to 'dependencies'.`,
      ),
    );
    packageJson.dependencies = { ...(packageJson.dependencies || {}), tslib: packageJson.peerDependencies.tslib };

    delete packageJson.peerDependencies.tslib;
  }

  // Verify non-peerDependencies as they can easily lead to duplicate installs or version conflicts
  // in the node_modules folder of an application
  const allowedList = pkg.allowedNonPeerDependencies.map(value => new RegExp(value));
  try {
    checkNonPeerDependencies(packageJson, 'dependencies', allowedList, spinner);
  } catch (e) {
    await rmdir(entryPoint.destinationPath, { recursive: true });
    throw e;
  }

  // Removes scripts from package.json after build
  if (packageJson.scripts) {
    if (pkg.keepLifecycleScripts !== true) {
      spinner.info(`Removing scripts section in package.json as it's considered a potential security vulnerability.`);
      delete packageJson.scripts;
    } else {
      spinner.warn(
        colors.yellow(
          `You enabled keepLifecycleScripts explicitly. The scripts section in package.json will be published to npm.`,
        ),
      );
    }
  }

  if (compilationMode !== 'partial') {
    const scripts = packageJson.scripts || (packageJson.scripts = {});
    scripts.prepublishOnly =
      'node --eval "console.error(\'' +
      'ERROR: Trying to publish a package that has been compiled in full compilation mode. This is not allowed.\\n' +
      'Please delete and rebuild the package with partial compilation mode, before attempting to publish.\\n' +
      '\')" ' +
      '&& exit 1';
  }

  // keep the dist package.json clean
  // this will not throw if ngPackage field does not exist
  delete packageJson.ngPackage;

  const packageJsonPropertiesToDelete = [
    'stylelint',
    'prettier',
    'browserslist',
    'devDependencies',
    'jest',
    'workspaces',
    'husky',
  ];

  for (const prop of packageJsonPropertiesToDelete) {
    if (prop in packageJson) {
      delete packageJson[prop];
      spinner.info(`Removing ${prop} section in package.json.`);
    }
  }

  packageJson.name = entryPoint.moduleId;
  await writeFile(path.join(entryPoint.destinationPath, 'package.json'), JSON.stringify(packageJson, undefined, 2));
}

function checkNonPeerDependencies(
  packageJson: Record<string, unknown>,
  property: string,
  allowed: RegExp[],
  spinner: Ora,
) {
  if (!packageJson[property]) {
    return;
  }

  for (const dep of Object.keys(packageJson[property])) {
    if (allowed.some(regex => regex.test(dep))) {
      log.debug(`Dependency ${dep} is allowed in '${property}'`);
    } else {
      spinner.warn(
        colors.yellow(
          `Distributing npm packages with '${property}' is not recommended. Please consider adding ${dep} ` +
            `to 'peerDependencies' or remove it from '${property}'.`,
        ),
      );
      throw new Error(`Dependency ${dep} must be explicitly allowed using the "allowedNonPeerDependencies" option.`);
    }
  }
}
