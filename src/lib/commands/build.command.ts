import { ngPackagr } from '../packagr-v2';
import { Command } from './command';

/**
 * CLI arguments passed to `ng-packagr` executable and `build()` command.
 *
 * @stable
 */
export interface CliArguments {
  /** Path to the project file 'package.json', 'ng-package.json', or 'ng-package.js'. */
  project: string;
  /** Whether or not ng-packagr will watch for file changes and perform an incremental build. */
  watch?: boolean;
  /** Path to a tsconfig file. */
  config?: string;
  /** Enable and define the file watching poll time period in milliseconds */
  poll?: number;
}

/**
 * Command running an "one-off" build.
 *
 * @stable
 */
export const build: Command<CliArguments, void> = opts => {
  if (!opts) {
    throw new Error('No options provided to the build command.');
  }

  return ngPackagr().forProject(opts.project).withTsConfig(opts.config).build({ watch: opts.watch, poll: opts.poll });
};
