import type { ParsedConfiguration } from '@angular/compiler-cli';
import { InjectionToken, Provider, ReflectiveInjector } from 'injection-js';
import { Observable, map, of as observableOf } from 'rxjs';
import { BuildGraph } from './graph/build-graph';
import { Transform } from './graph/transform';
import { analyseSourcesTransform } from './ng-package/entry-point/analyse-sources.transform';
import { compileNgcTransformFactory } from './ng-package/entry-point/compile-ngc.transform';
import { ENTRY_POINT_PROVIDERS } from './ng-package/entry-point/entry-point.di';
import { entryPointTransformFactory } from './ng-package/entry-point/entry-point.transform';
import { DEFAULT_TS_CONFIG_TOKEN, provideTsConfig } from './ng-package/entry-point/init-tsconfig.di';
import { initTsConfigTransformFactory } from './ng-package/entry-point/init-tsconfig.transform';
import { writeBundlesTransform } from './ng-package/entry-point/write-bundles.transform';
import { writePackageTransform } from './ng-package/entry-point/write-package.transform';
import { NgPackagrOptions, normalizeOptions } from './ng-package/options';
import { provideOptions } from './ng-package/options.di';
import { PACKAGE_PROVIDERS, PACKAGE_TRANSFORM } from './ng-package/package.di';
import { packageTransformFactory } from './ng-package/package.transform';
import { StylesheetProcessor } from './styles/stylesheet-processor';
import { provideProject } from './project.di';
import * as log from './utils/log';

/**
 * The original ng-packagr implemented on top of a rxjs-ified and di-jectable transformation pipeline.
 *
 * See the `docs/transformations.md` for more prose description.
 *
 * @link https://github.com/ng-packagr/ng-packagr/pull/572
 */
export class NgPackagr {
  /** @deprecated Kept for backwards compatibility */
  private buildTransform: InjectionToken<Transform> = PACKAGE_TRANSFORM.provide;

  private context = {
    options: {} as NgPackagrOptions,
    project: undefined as string,
    tsConfig: undefined as ParsedConfiguration | string
  }

  /** @deprecated Kept for backwards compatibility */
  private providers: Provider[] = []

  constructor(providers?: Provider[]) {
    if (providers && providers.length > 0) {
      log.warn(`DEPRECATED API: new NgPackagr(providers: Provider[]) should not be used anymore!`);
      this.providers.push(providers);
    }
  }

  /**
   * Adds options to ng-packagr
   *
   * @param options Ng Packagr Options
   * @return Self instance for fluent API
   * @deprecated use the options parameter in 'build' and 'watch' methods
   */
  public withOptions(options: NgPackagrOptions): NgPackagr {
    this.context.options = options;

    return this;
  }

  /**
   * Sets the path to the user's "ng-package" file (either `package.json`, `ng-package.json`, or `ng-package.js`)
   *
   * @param project File path
   * @return Self instance for fluent API
   */
  public forProject(project: string): NgPackagr {
    this.context.project = project;

    return this;
  }

  /**
   * Adds dependency injection providers.
   *
   * @deprecated Kept for backwards-compatibility
   * @param providers
   * @return Self instance for fluent API
   * @link https://github.com/mgechev/injection-js
   */
  public withProviders(providers: Provider[]): NgPackagr {
    log.warn(`DEPRECATED: withProviders() should not be used anymore!`);
    this.providers = [...this.providers, ...providers];

    return this;
  }

  /**
   * Overwrites the default TypeScript configuration.
   *
   * @param defaultValues A tsconfig providing default values to the compilation.
   * @return Self instance for fluent API
   */
  public withTsConfig(defaultValues: ParsedConfiguration | string): NgPackagr {
    this.context.tsConfig = defaultValues;

    return this;
  }

  /**
   * Overwrites the 'build' transform.
   *
   * @deprecated Kept for backwards-compatibility
   * @param transform
   * @return Self instance for fluent API
   */
  public withBuildTransform(transform: InjectionToken<Transform>): NgPackagr {
    log.warn(`DEPRECATED: withBuildTransform() should not be used anymore!`);
    this.buildTransform = transform;

    return this;
  }

  /**
   * Builds the project by kick-starting the 'build' transform over an (initially) empty `BuildGraph``
   *
   * @return A promisified result of the transformation pipeline.
   */
  public build(options: NgPackagrOptions = {}): Promise<void> {
    this.context.options = options;

    return this.buildAsObservable().toPromise();
  }

  /**
   * Builds and watch for changes by kick-starting the 'watch' transform over an (initially) empty `BuildGraph``
   *
   * @return An observable result of the transformation pipeline.
   */
  public watch(options: NgPackagrOptions = {}): Observable<void> {
    this.context.options = options;

    return this.buildAsObservable();
  }

  /**
   * Builds the project by kick-starting the 'build' transform over an (initially) empty `BuildGraph``
   *
   * @return An observable result of the transformation pipeline.
   */
  public buildAsObservable(): Observable<void> {
    if (this.providers.length > 0) {
      log.warn(`DEPRECATION: running ng-packagr with the legacy DI-based transform pipeline!`);
      // Legacy DI-based transforms
      this.providers.push(provideOptions(this.context.options));
      this.providers.push(provideProject(this.context.project));
      this.providers.push(provideTsConfig(this.context.tsConfig));

      if (!this.providers.some(p => 'provide' in p && p.provide === DEFAULT_TS_CONFIG_TOKEN)) {
        this.withTsConfig(undefined);
      }

      const injector = ReflectiveInjector.resolveAndCreate(this.providers);
      const buildTransformOperator = injector.get(this.buildTransform);

      return observableOf(new BuildGraph()).pipe(
        buildTransformOperator,
        map(() => undefined),
      );
    } else {
      // TODO: ng-packagr native...no DI... debug ts-extensions test failure
      log.debug(`Running ng-packagr with the new transform pipeline!`);
      const normalizedOptions = normalizeOptions(this.context.options);

      // Use the out-of-the-box transformation
      return observableOf(new BuildGraph()).pipe(
        packageTransformFactory(
          this.context.project,
          normalizedOptions,
          initTsConfigTransformFactory(this.context.tsConfig),
          analyseSourcesTransform,
          entryPointTransformFactory(
            compileNgcTransformFactory(StylesheetProcessor, normalizedOptions),
            writeBundlesTransform(normalizedOptions),
            writePackageTransform(normalizedOptions)
          )
        ),
        map(() => undefined)
      );
    }
  }
}

export const ngPackagr = (): NgPackagr =>
  new NgPackagr([
    // Add default providers to this list.
    ...PACKAGE_PROVIDERS,
    ...ENTRY_POINT_PROVIDERS,
  ]);

export const ngPackagrNative = (): NgPackagr =>
  new NgPackagr([]);
