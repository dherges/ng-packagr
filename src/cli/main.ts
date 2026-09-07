#!/usr/bin/env node

import { program } from 'commander';
import * as path from 'path';
import { error } from '../lib/utils/log';
import { build, execute, version as versionCommand } from '../public_api';

const DEFAULT_PROJECT_PATH = path.resolve(process.cwd(), 'ng-package.json');

function parseProjectPath(parsed: string): string {
  return parsed || DEFAULT_PROJECT_PATH;
}

program
  .name('ng-packagr')
  .storeOptionsAsProperties(false)
  .option('-n, --native', 'Toggles native build', false)
  .option('-v, --version', 'Prints version info')
  .option('-w, --watch', 'Watch for file changes')
  .option('--poll <interval>', 'Enable and define the file watching poll time period in milliseconds', x => +x)
  .option(
    '-p, --project <path>',
    "Path to the 'ng-package.json' or 'package.json' file.",
    parseProjectPath,
    DEFAULT_PROJECT_PATH,
  )
  .option('-c, --config <config>', 'Path to a tsconfig file.', (value: string | undefined) =>
    value ? path.resolve(value) : undefined,
  );

program.on('option:version', () => {
  void versionCommand().then(() => process.exit(0));
});

program.parse(process.argv);

const { config, native, project, watch, version, poll } = program.opts();

if (!version) {
  execute(build, { config, native, project, watch: !!watch, poll }).catch(err => {
    error(err.message);
    process.exit(1);
  });
}
