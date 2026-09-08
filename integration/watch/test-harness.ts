import * as fs from 'fs-extra';
import * as path from 'path';
import { expect } from 'chai';
import { Subscription, tap } from 'rxjs';
import { ngPackagrNative } from '../../dist';

/**
 * A testing harness class to setup the enviroment and test the incremental builds.
 */
export class TestHarness {
  private harnessTempDir = path.join(__dirname, '.tmp');
  private testTempPath: string;
  private testDistPath: string;
  private testSrc: string;
  private ngPackagr$$: Subscription | undefined;
  private activeCompleteCallback: (() => void) | null = null;
  private activeFailureCallback: ((error: Error) => void) | null = null;

  constructor(testName: string) {
    this.testTempPath = path.join(this.harnessTempDir, testName);
    this.testSrc = path.join(__dirname, testName);
    this.testDistPath = path.join(this.testTempPath, 'dist');

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
  }

  async initialize(): Promise<void> {
    // the below is done in order to avoid poluting the test reporter with build logs
    spyOn(console, 'log').and.callFake((...args: any[]) => {
      const msg = args.join(' ');
      if (msg.includes('Built Angular Package') || msg.includes('Compilation sequence updated')) {
        if (this.activeCompleteCallback) {
          const cb = this.activeCompleteCallback;
          this.activeCompleteCallback = null;
          cb();
        }
      }
    });
    spyOn(console, 'error').and.callFake((...args: any[]) => {
      const msg = args.join(' ');
      if (this.activeFailureCallback) {
        const cb = this.activeFailureCallback;
        this.activeFailureCallback = null;
        cb(new Error(msg));
      }
    });
    spyOn(console, 'info').and.callFake(() => {});
    spyOn(console, 'warn').and.callFake(() => {});

    this.emptyTestDirectory();
    await fs.copy(this.testSrc, this.testTempPath);
    return this.setUpNgPackagr();
  }

  dispose(): void {
    this.activeCompleteCallback = null;
    this.activeFailureCallback = null;
    this.ngPackagr$$?.unsubscribe();
    this.emptyTestDirectory();
  }

  readFileSync(filePath: string, isJson = false): string | object {
    const file = path.join(this.testDistPath, filePath);
    return isJson ? fs.readJsonSync(file) : fs.readFileSync(file, { encoding: 'utf-8' });
  }

  reSaveSrcFile(filePath: string): void {
    const file = path.join(this.testTempPath, filePath);
    fs.writeFileSync(file, fs.readFileSync(file));
  }

  /**
   * Copy a test case to it's temporary destination immediately.
   */
  copyTestCase(caseName: string) {
    fs.copySync(path.join(this.testSrc, 'test_files', caseName), this.testTempPath);
  }

  expectFesm2022ToMatch(fileName: string, regexp: RegExp): Chai.Assertion {
    return expect(this.readFileSync(`fesm2022/${fileName}.mjs`)).to.match(regexp);
  }

  expectFileToMatch(fileName: string, regexp: RegExp): Chai.Assertion {
    return expect(this.readFileSync(fileName)).to.match(regexp);
  }

  expectDtsToMatch(fileName: string, regexp: RegExp): Chai.Assertion {
    return expect(this.readFileSync(`types/${fileName}.d.ts`)).to.match(regexp);
  }

  expectPackageManifestToMatch(regexp: RegExp): Chai.Assertion {
    return expect(this.readFileSync('package.json')).to.match(regexp);
  }

  /**
   * Gets invoked when a compilation completes successfully.
   */
  onComplete(done: () => void): void {
    this.activeCompleteCallback = done;
  }

  /**
   * Gets invoked when a compilation error occurs.
   */
  onFailure(done: (error: Error) => void): void {
    this.activeFailureCallback = done;
  }

  /**
   * Remove the entire directory for the current test case.
   */
  emptyTestDirectory(): void {
    fs.emptyDirSync(this.testTempPath);
  }

  getFilePath(filePath: string): string {
    return path.join(this.testDistPath, filePath);
  }

  private setUpNgPackagr(): Promise<void> {
    return new Promise(resolve => {
      this.ngPackagr$$ = ngPackagrNative()
        .forProject(path.join(this.testTempPath, 'ng-package.json'))
        .withTsConfig(path.join(this.testTempPath, 'tsconfig.ngc.json'))
        .watch()
        .pipe(
          tap(() => resolve()), // we are only interested when in the first builds, that's why we are resolving it
        )
        .subscribe();
    });
  }
}
