import * as fs from 'fs';
import * as path from 'path';
import { buildLibrary } from './packages/library-builder/src/index.js';

const sample = 'integration/samples/apf';

async function run() {
  const sampleRoot = path.resolve(process.cwd(), sample);
  const distRoot = path.join(sampleRoot, 'dist-experimental');
  const options = {
    entryPoint: path.join(sampleRoot, 'public_api.ts'),
    dest: distRoot,
    sourcemap: true,
  };

  console.log(`\n🚀 Testing Next-Gen LibraryBuilder on: ${sampleRoot}`);
  try {
    await buildLibrary(options);
    console.log(`\n✅ ALL DONE! Check ${distRoot}`);
  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

run();
