import type { ParsedConfiguration } from '@angular/compiler-cli';
import { InjectionToken, Provider } from 'injection-js';
import { Observable, firstValueFrom, map, of as observableOf } from 'rxjs';
import { BuildGraph } from './graph/build-graph';
import { Transform } from './graph/transform';
import { analyseSourcesTransform } from './ng-package/entry-point/analyse-sources.transform';
import { entryPointTransformFactory } from './ng-package/entry-point/entry-point.transform';
import { initTsConfigTransformFactory } from './ng-package/entry-point/init-tsconfig.transform';
import { writePackageTransform } from './ng-package/entry-point/write-package.transform';
import { NgPackagrOptions, normalizeOptions } from './ng-package/options';
import { packageTransformFactory } from './ng-package/package.transform';

/**
 * The original ng-packagr implemented on top of a rxjs-ified and di-jectable transformation pipeline.
 *
 * See the `docs/transformations.md` for more prose description.
 *
 * @link https://github.com/ng-packagr/ng-packagr/pull/572
 */
export class NgPackagr {

  /*
  export const PACKAGE_TRANSFORM_TOKEN = new InjectionToken<Transform>(`ng.v5.packageTransform`);
  
  export const PACKAGE_TRANSFORM: TransformProvider = provideTransform({
    provide: PACKAGE_TRANSFORM_TOKEN,
    useFactory: packageTransformFactory,
    deps: [PROJECT_TOKEN, OPTIONS_TOKEN, INIT_TS_CONFIG_TOKEN, ANALYSE_SOURCES_TOKEN, ENTRY_POINT_TRANSFORM_TOKEN],
  });
  */

  private context = {
    options: {} as NgPackagrOptions,
    project: undefined as string,
    tsConfig: undefined as ParsedConfiguration | string
  }

  private buildTransformOperator: Transform | undefined;

  // TODO: to be removed
  // private buildTransform: InjectionToken<Transform> = PACKAGE_TRANSFORM.provide;

  constructor(
    /** @deprecated to be removed */
    private providers: Provider[]
  ) {
    console.log('TO BE REMOVED - providers: Provider[] constructor arg', this.providers);
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
    // this.providers.push(provideOptions(options));

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
    // this.providers.push(provideProject(project));

    return this;
  }

  /**
   * Adds dependency injection providers.
   *
   * @param providers
   * @return Self instance for fluent API
   * @link https://github.com/mgechev/injection-js
   */
  public withProviders(providers: Provider[]): NgPackagr {
    console.log('TO BE REMOVED --- withProviders(providers: Provider[])', providers)
    // TODO: throw new Error('BREAKING CHANGE');
    // this.providers = [...this.providers, ...providers];

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
    // this.providers.push(provideTsConfig(defaultValues));

    return this;
  }

  /**
   * Overwrites the 'build' transform.
   *
   * @param transform
   * @return Self instance for fluent API
   */
  public withBuildTransform(transform: InjectionToken<Transform> /* transform: Transform */): NgPackagr {
    console.log('TO BE REMOVED --- withBuildTransform(transform: InjectionToken<Transform>)', transform)
    // this.buildTransformOperator = transform;

    // TODO: throw new Error('BREAKING CHANGE');
    // this.buildTransform = transform;

    return this;
  }

  /**
   * Builds the project by kick-starting the 'build' transform over an (initially) empty `BuildGraph``
   *
   * @return A promisified result of the transformation pipeline.
   */
  public build(options: NgPackagrOptions = {}): Promise<void> {
    this.context.options = normalizeOptions(options);
    // this.providers.push(provideOptions(options));

    return firstValueFrom(this.buildAsObservable());
    // return this.buildAsObservable().toPromise();
  }

  /**
   * Builds and watch for changes by kick-starting the 'watch' transform over an (initially) empty `BuildGraph``
   *
   * @return An observable result of the transformation pipeline.
   */
  public watch(options: NgPackagrOptions = {}): Observable<void> {
    this.context.options = normalizeOptions(options);
    // this.providers.push(provideOptions({ ...options, watch: true }));

    return this.buildAsObservable();
  }

  /**
   * Builds the project by kick-starting the 'build' transform over an (initially) empty `BuildGraph``
   *
   * @return An observable result of the transformation pipeline.
   */
  public buildAsObservable(): Observable<void> {
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
          writePackageTransform(this.context.options)
        )
      );
    }

    return observableOf(new BuildGraph()).pipe(
      this.buildTransformOperator,
      map(() => undefined),
    );

    /*
    if (!this.providers.some(p => 'provide' in p && p.provide === DEFAULT_TS_CONFIG_TOKEN)) {
      this.withTsConfig(undefined);
    }

    const injector = ReflectiveInjector.resolveAndCreate(this.providers);
    const buildTransformOperator = injector.get(this.buildTransform);

    return observableOf(new BuildGraph()).pipe(
      buildTransformOperator,
      map(() => undefined),
    );*/
  }
}

export const ngPackagr = (): NgPackagr =>
  new NgPackagr([]);
