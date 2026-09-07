import type { ParsedConfiguration } from '@angular/compiler-cli';
import { Observable, firstValueFrom, map, of as observableOf } from 'rxjs';
import { BuildGraph } from './graph/build-graph';
import { Transform } from './graph/transform';
import { analyseSourcesTransform } from './ng-package/entry-point/analyse-sources.transform';
import { compileNgcTransformFactory } from './ng-package/entry-point/compile-ngc.transform';
import { entryPointTransformFactory } from './ng-package/entry-point/entry-point.transform';
import { initTsConfigTransformFactory } from './ng-package/entry-point/init-tsconfig.transform';
import { writeBundlesTransform } from './ng-package/entry-point/write-bundles.transform';
import { writePackageTransform } from './ng-package/entry-point/write-package.transform';
import { NgPackagrOptions, normalizeOptions } from './ng-package/options';
import { packageTransformFactory } from './ng-package/package.transform';
import { StylesheetProcessor } from './styles/stylesheet-processor';
import * as log from './utils/log';

/**
 * The native esbuild implementation of ng-packagr
 */
export class NgPackagrNative {

  private buildTransformOperator: Transform | undefined;

  private context = {
    options: {} as NgPackagrOptions,
    project: undefined as string,
    tsConfig: undefined as ParsedConfiguration | string
  }

  private nativeEsBuild = false;

  /**
   * Sets the path to the user's "ng-package" file (either `package.json`, `ng-package.json`, or `ng-package.js`)
   *
   * @param project File path
   * @return Self instance for fluent API
   */
  public forProject(project: string): NgPackagrNative {
    this.context.project = project;

    return this;
  }

  /**
   * Toggles the native esbuild
   *
   * @param toggle True, when building with esbuild natively
   * @returns 
   */
  public withNativeEsBuild(toggle: boolean): NgPackagrNative {
    this.nativeEsBuild = toggle;

    return this;
  }

  /**
   * Overwrites the default TypeScript configuration.
   *
   * @param defaultValues A tsconfig providing default values to the compilation.
   * @return Self instance for fluent API
   */
  public withTsConfig(defaultValues: ParsedConfiguration | string): NgPackagrNative {
    this.context.tsConfig = defaultValues;

    return this;
  }

  /**
   * Overwrites the 'build' transform.
   *
   * @param transform
   * @return Self instance for fluent API
   */
  public withBuildTransform(transform: Transform): NgPackagrNative {
    this.buildTransformOperator = transform;

    return this;
  }

  /**
   * Builds the project by kick-starting the 'build' transform over an (initially) empty `BuildGraph``
   *
   * @return A promisified result of the transformation pipeline.
   */
  public build(options: NgPackagrOptions = {}): Promise<void> {
    this.context.options = normalizeOptions(options);

    return firstValueFrom(this.buildAsObservable());
  }

  /**
   * Builds and watch for changes by kick-starting the 'watch' transform over an (initially) empty `BuildGraph``
   *
   * @return An observable result of the transformation pipeline.
   */
  public watch(options: NgPackagrOptions = {}): Observable<void> {
    this.context.options = normalizeOptions(options);

    return this.buildAsObservable();
  }

  /**
   * Builds the project by kick-starting the 'build' transform over an (initially) empty `BuildGraph``
   *
   * @return An observable result of the transformation pipeline.
   */
  public buildAsObservable(): Observable<void> {
    log.info("=== Running ng-packagr-native ===")

    if (!this.buildTransformOperator) {
      // Use the out-of-the-box transformation
      this.buildTransformOperator = packageTransformFactory(
        this.context.project,
        this.context.options,
        initTsConfigTransformFactory(
          this.context.tsConfig
        ),
        analyseSourcesTransform,
        entryPointTransformFactory(
          this.nativeEsBuild ? null : compileNgcTransformFactory(StylesheetProcessor, this.context.options),
          this.nativeEsBuild ? null : writeBundlesTransform(this.context.options),
          // Option 1: pass null, null 1st and 2nd param for the native esbuild
          // null, // XX: instantiate the legacy transforms with no DI
          // null, // XX: instantiate the legacy transforms with no DI
          // Option 2: instantiate the legacy transforms with no DI
          // compileNgcTransformFactory(StylesheetProcessor, this.context.options)
          // writeBundlesTransform(this.context.options)
          writePackageTransform(this.context.options)
        )
      );
    }

    return observableOf(new BuildGraph()).pipe(
      this.buildTransformOperator,
      map(() => undefined),
    );
  }
}

export const ngPackagrNative = (): NgPackagrNative =>
  new NgPackagrNative();
