import findCacheDirectory from 'find-cache-directory';
import { tmpdir } from 'os';
import { resolve } from 'path';

export interface NgPackagrOptions {
  /** Whether or not ng-packagr will watch for file changes and perform an incremental build. */
  watch?: boolean;
  cacheEnabled?: boolean;
  cacheDirectory?: string;
  poll?: number;
}

export function normalizeOptions(options: NgPackagrOptions = {}) {
  const ciEnv = process.env['CI'];
  const isCI = ciEnv?.toLowerCase() === 'true' || ciEnv === '1';
  const { cacheEnabled = !isCI, cacheDirectory = findCachePath() } = options;

  return {
    ...options,
    cacheEnabled,
    cacheDirectory,
  };
}

function findCachePath(): string {
  const name = 'ng-packagr';

  return findCacheDirectory({ name }) || resolve(tmpdir(), name);
}
