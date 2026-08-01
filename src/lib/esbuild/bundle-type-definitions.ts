import * as fs from 'fs';
import * as path from 'path';
import { generateDtsBundle as runDtsGenerator } from 'dts-bundle-generator';
import * as log from '../utils/log';

export interface BundleTypeDefOptions {
  tmpTypesDir: string;
  flatModuleFile: string;
  declarationsDir: string;
  declarationsBundled: string;
}

export async function bundleTypeDefinitions(options: BundleTypeDefOptions): Promise<void> {
  const { tmpTypesDir, flatModuleFile, declarationsDir, declarationsBundled } = options;
  const generatedIndexDts = path.join(tmpTypesDir, `${flatModuleFile}.d.ts`);

  log.msg(`📦 Bundling Type Definitions into APF format...`);

  try {
    // 1. Zünde den dts-bundle-generator im RAM
    const [bundledDtsContent] = runDtsGenerator([
      {
        filePath: generatedIndexDts,
        output: {
          noBanner: true,
          inlineDeclareGlobals: true,
        },
      },
    ]);

    if (!bundledDtsContent) {
      throw new Error(`Empty bundle generated for: ${generatedIndexDts}`);
    }

    // 2. Zielordner absichern & flaches Bundle schreiben
    await fs.promises.mkdir(declarationsDir, { recursive: true });
    await fs.promises.writeFile(declarationsBundled, bundledDtsContent, 'utf8');

    log.msg(`✅ Flat-Types successfully generated: ${path.basename(declarationsBundled)}`);

  } catch (error: any) {
    throw new Error(`[dts-bundle-error] Failed to bundle d.ts files: ${error.message}`);
  } finally {
    // 3. Autonome Bereinigung des temporären Ordners
    await fs.promises.rm(tmpTypesDir, { recursive: true, force: true });
  }
}
