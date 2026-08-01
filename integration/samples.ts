import { spawnSync } from 'child_process';
import { existsSync, readdirSync } from 'fs';
import { join, resolve } from 'path';
const PACKAGE_FILE_CANDIDATES = ['ng-packagr-api.js', 'ng-package.js', 'ng-package.json', 'package.json'];
const testDirectories = readdirSync('integration/samples');
console.log(`Processing integration samples: ${testDirectories.join('\n')}`);

for (const testDirectory of ['apf']) {
  const testPath = resolve('integration/samples', testDirectory);
  console.log(`\nProcessing integration sample: ${testDirectory}.`);
  const configFile = PACKAGE_FILE_CANDIDATES.find(f => existsSync(join(testPath, f)));

  if (!configFile) {
    throw new Error(`No config found in ${testPath}.`);
  }

  console.log(`Found ng-packagr file: ${configFile}.`);

  const args: string[] = [];
  if (configFile === 'ng-packagr-api.js') {
    args.push(`${testPath}/${configFile}`);
  } else {
    args.push('dist/src/cli/main.js', '-p', `${testPath}/${configFile}`);
  }

  const { status, error } = spawnSync(process.execPath, args, {
    stdio: 'inherit',
  });
  const exptectedToFail = testDirectory.startsWith('fail-');

  if (status === 0 && exptectedToFail) {
    throw new Error('ERROR: Package build was expected to fail.');
  } else if (status !== 0 && !exptectedToFail) {
    console.error(error);
    throw new Error('ERROR: Package build failed');
  }

  console.log(`Finished processing integration sample: ${testDirectory}.`);
}
