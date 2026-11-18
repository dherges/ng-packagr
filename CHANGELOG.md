# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [22.3.0](https://github.com/ng-packagr/ng-packagr/compare/22.3.0-rc.0...22.3.0) (2026-11-18)

## [22.3.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/22.3.0-next.3...22.3.0-rc.0) (2026-11-12)


### Performance

* **ng-packagr:** look up changed file nodes by URL ([b28dff6](https://github.com/ng-packagr/ng-packagr/commit/b28dff61dcb4df992c9f91fd37278a27cdba629d))

## [22.3.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/22.3.0-next.2...22.3.0-next.3) (2026-11-04)


### Bug Fixes

* **ng-packagr:** defer watch invalidation until the running build completes ([2922948](https://github.com/ng-packagr/ng-packagr/commit/292294813a39daa206a541a817a465dc66b325b7)), closes [#3477](https://github.com/ng-packagr/ng-packagr/issues/3477)
* **ng-packagr:** enable dts tree-shaking and optimize dts bundling ([3f72cd0](https://github.com/ng-packagr/ng-packagr/commit/3f72cd000bae475cc39b6c2fa039023292f37045)), closes [#3471](https://github.com/ng-packagr/ng-packagr/issues/3471)
* **ng-packagr:** rebase every url() in a Sass stylesheet ([0150b47](https://github.com/ng-packagr/ng-packagr/commit/0150b47e805df1e0e34560e27535c6c654c856ab))
* **ng-packagr:** rebase url() with hyphen-namespaced Sass variables ([5c2d4a1](https://github.com/ng-packagr/ng-packagr/commit/5c2d4a1a4947a765cb6a98eb870f977ae14c7c86))

## [22.3.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/22.3.0-next.1...22.3.0-next.2) (2026-10-01)


### Bug Fixes

* **ng-packagr:** disable spinners during parallel entry-point builds ([eff8bb0](https://github.com/ng-packagr/ng-packagr/commit/eff8bb0049b78cd7bf9e6ea69bdda69f8519a037)), closes [#3447](https://github.com/ng-packagr/ng-packagr/issues/3447)
* **ng-packagr:** ignore TS6059 on Angular compiler generated shims ([d1a9a3d](https://github.com/ng-packagr/ng-packagr/commit/d1a9a3dae8d58154c7428613273dbcca9c2f3d9f)), closes [#3449](https://github.com/ng-packagr/ng-packagr/issues/3449)
* **ng-packagr:** revert parallel entry point scheduling ([4081e23](https://github.com/ng-packagr/ng-packagr/commit/4081e2366e54a391fab06bf69025d605ab4441d0)), closes [#3451](https://github.com/ng-packagr/ng-packagr/issues/3451)

## [22.3.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/22.3.0-next.0...22.3.0-next.1) (2026-09-23)

## [22.3.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/22.2.0...22.3.0-next.0) (2026-09-23)

## [22.2.0](https://github.com/ng-packagr/ng-packagr/compare/22.2.0-rc.0...22.2.0) (2026-09-23)


### Bug Fixes

* **ng-packagr:** name the unknown option in a schema validation error ([1ab153a](https://github.com/ng-packagr/ng-packagr/commit/1ab153a2e7ba36b1931a696d1c9c483b86bbe2db)), closes [#2226](https://github.com/ng-packagr/ng-packagr/issues/2226)
* **ng-packagr:** only reject a parallel index.ts when it is imported ([b633e1f](https://github.com/ng-packagr/ng-packagr/commit/b633e1f108c4c62a6e525a17fa3677d89d58f76b))
* **ng-packagr:** scope Sass package resolution caching for stylesheets in node_modules ([80c0ce8](https://github.com/ng-packagr/ng-packagr/commit/80c0ce8345764f6119c4dfbcc74cd49494f2f4fa))

## [22.2.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/22.2.0-next.6...22.2.0-rc.0) (2026-09-16)


### Performance

* **ng-packagr:** configure rolldown dtsInput and skip dts annotation scanning ([d086582](https://github.com/ng-packagr/ng-packagr/commit/d086582ac4ab57f76f9d64fb90d33d32cbeb6e0e))
* **ng-packagr:** decouple sass daemon lifecycle from entry points ([cf658e0](https://github.com/ng-packagr/ng-packagr/commit/cf658e009536564506c819e5bf50f7899ccd73fa))
* **ng-packagr:** disable rolldown circular dependency checks ([1a40ec6](https://github.com/ng-packagr/ng-packagr/commit/1a40ec6b57c9e3e26e02aadc3536d75c62a19fcb))
* **ng-packagr:** eliminate redundant compiler emit loop and optimize diagnostics ([2438748](https://github.com/ng-packagr/ng-packagr/commit/2438748bb5f81a73596e3ea4981841800496b996))
* **ng-packagr:** implement parallel dag scheduling for entry points ([cd0b052](https://github.com/ng-packagr/ng-packagr/commit/cd0b0522f272fad90e0bb736e893391cffb926b4))
* **ng-packagr:** key sass package resolutions without containing url ([dbea592](https://github.com/ng-packagr/ng-packagr/commit/dbea592a754b59adaac573f02f674d6bb354630c))
* **ng-packagr:** memoize module resolutions in file loader plugin ([cf9997e](https://github.com/ng-packagr/ng-packagr/commit/cf9997e2e89860b5167369fe68d97e69c6a51735))
* **ng-packagr:** memoize style configurations by project base path ([6af5309](https://github.com/ng-packagr/ng-packagr/commit/6af53094f4f5fd1bf8d7c789535ff48409fceee3))
* **ng-packagr:** optimize cache entry serialization using native json parse and stringify ([46d3c79](https://github.com/ng-packagr/ng-packagr/commit/46d3c79fd7bb0db6575e3ab789306c4fc0855b41))
* **ng-packagr:** parallelize package discovery and optimize config reads ([faeea5f](https://github.com/ng-packagr/ng-packagr/commit/faeea5f3c69c1a1e5b991261edc6c035a317d897))

## [22.2.0-next.6](https://github.com/ng-packagr/ng-packagr/compare/22.2.0-next.5...22.2.0-next.6) (2026-09-10)


### Performance

* **ng-packagr:** share sass directory and resolution caches across stylesheets ([3beb4af](https://github.com/ng-packagr/ng-packagr/commit/3beb4afdd4af85c520215740d50d33717b65fc2c))

## [22.2.0-next.5](https://github.com/ng-packagr/ng-packagr/compare/22.2.0-next.4...22.2.0-next.5) (2026-09-02)


### Performance

* **ng-packagr:** use native sass-embedded compiler daemon ([10cbbac](https://github.com/ng-packagr/ng-packagr/commit/10cbbacc80aff6e7e444dff96b7d57210a83fd7b))

## [22.2.0-next.4](https://github.com/ng-packagr/ng-packagr/compare/22.2.0-next.3...22.2.0-next.4) (2026-08-26)


### Performance

* **ng-packagr:** consolidate component stylesheet bundling with shared load result cache ([17f1764](https://github.com/ng-packagr/ng-packagr/commit/17f176418bd7b817b3d6a617a709b6b8f66bb63e))

## [22.2.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/22.2.0-next.2...22.2.0-next.3) (2026-08-14)


### Features

* **ng-packagr:** transform supported browsers to targets using lowest version ([148f640](https://github.com/ng-packagr/ng-packagr/commit/148f6408716e363ab9e7cc84db582dae256a8033))


### Performance

* **ng-packagr:** cache declaration diagnostics and optimize incremental emit ([37151c6](https://github.com/ng-packagr/ng-packagr/commit/37151c6bdd730cc7cd5b4a2c3ec51f2c0178eebb))
* **ng-packagr:** prune rolldown cache payload and optimize file loader ([f7b8c0d](https://github.com/ng-packagr/ng-packagr/commit/f7b8c0d052a03cc1d2e939bed59eba58322a45f8))
* **ng-packagr:** use lightweight scanner for source analysis ([5bf290b](https://github.com/ng-packagr/ng-packagr/commit/5bf290bc249cf43af151d7ee7105a8c27435b695))

### [22.1.1](https://github.com/ng-packagr/ng-packagr/compare/22.1.0...22.1.1) (2026-08-04)


### Bug Fixes

* **ng-packagr:** pin rollup-plugin-dts to ~6.4.1 ([cb2d4b2](https://github.com/ng-packagr/ng-packagr/commit/cb2d4b214876d43424116712839335b250abbc10))

## [22.2.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/22.2.0-next.1...22.2.0-next.2) (2026-07-29)


### Performance

* **ng-packagr:** use oxc generator for dts bundling ([e57d693](https://github.com/ng-packagr/ng-packagr/commit/e57d693d430ed945a559b82957cc617eab501280))

## [22.2.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/22.2.0-next.0...22.2.0-next.1) (2026-07-29)


### Features

* **ng-packagr:** replace rollup with rolldown ([0951b28](https://github.com/ng-packagr/ng-packagr/commit/0951b284caf9807ea8bb892a1b953ef5c6160131))


### Bug Fixes

* **ng-packagr:** preserve legal and annotation comments while removing other comments in JS bundles ([defb171](https://github.com/ng-packagr/ng-packagr/commit/defb171128f96df7ab6a8382f84f638455cb2d3e)), closes [#3347](https://github.com/ng-packagr/ng-packagr/issues/3347)

## [22.2.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/22.1.0-rc.0...22.2.0-next.0) (2026-07-29)

## [22.1.0](https://github.com/ng-packagr/ng-packagr/compare/22.1.0-rc.0...22.1.0) (2026-07-29)

### Bug Fixes

* **ng-packagr:** log correct diagnostics array for warnings ([401d5e7](https://github.com/ng-packagr/ng-packagr/commit/401d5e71f2f9a8c7131415956f22306423363e49)), closes [#3346](https://github.com/ng-packagr/ng-packagr/issues/3346)
* **ng-packagr:** prevent concurrent compilation and stale cache results ([e5d77a7](https://github.com/ng-packagr/ng-packagr/commit/e5d77a7837fab18f7a200126df7f8fd703f55462))

## [22.1.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/22.1.0-next.4...22.1.0-rc.0) (2026-07-24)

## [22.1.0-next.4](https://github.com/ng-packagr/ng-packagr/compare/22.1.0-next.3...22.1.0-next.4) (2026-07-24)


### Bug Fixes

* **ng-packagr:** log correct diagnostics array for warnings ([401d5e7](https://github.com/ng-packagr/ng-packagr/commit/401d5e71f2f9a8c7131415956f22306423363e49)), closes [#3346](https://github.com/ng-packagr/ng-packagr/issues/3346)

## [22.1.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/22.1.0-next.2...22.1.0-next.3) (2026-07-01)


### Bug Fixes

* **ng-packagr:** generate specific .npmignore entries for secondary entry-point package.json files ([a63fbc0](https://github.com/ng-packagr/ng-packagr/commit/a63fbc0dc053d1c69059067054038e312fe1d029)), closes [#3343](https://github.com/ng-packagr/ng-packagr/issues/3343)


### Performance

* **ng-packagr:** implement semaphore backpressure throttling in SassWorkerImplementation ([0851ec8](https://github.com/ng-packagr/ng-packagr/commit/0851ec839018623b1cdd21d77fc772fefc80dc7f))

### [22.0.1](https://github.com/ng-packagr/ng-packagr/compare/22.0.0...22.0.1) (2026-07-01)


### Bug Fixes

* **ng-packagr:** generate specific .npmignore entries for secondary entry-point package.json files ([44bc3a7](https://github.com/ng-packagr/ng-packagr/commit/44bc3a7a5cf07072b2c5556a6e2af6aa22d6e600)), closes [#3343](https://github.com/ng-packagr/ng-packagr/issues/3343)
* **ng-packagr:** prevent concurrent compilation and stale cache results ([c4fd75f](https://github.com/ng-packagr/ng-packagr/commit/c4fd75f93ef18fb31c88c0bcb21e971add052eb1))


### Performance

* **ng-packagr:** implement semaphore backpressure throttling in SassWorkerImplementation ([1b6ac8e](https://github.com/ng-packagr/ng-packagr/commit/1b6ac8e9f516dc71a1d822cff563180435335d9d))


## [22.1.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/22.1.0-next.1...22.1.0-next.2) (2026-06-11)


### Bug Fixes

* **ng-packagr:** prevent concurrent compilation and stale cache results ([e5d77a7](https://github.com/ng-packagr/ng-packagr/commit/e5d77a7837fab18f7a200126df7f8fd703f55462))

## [22.1.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/22.1.0-next.0...22.1.0-next.1) (2026-06-03)

## [22.1.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/22.0.0...22.1.0-next.0) (2026-06-03)

## [22.0.0](https://github.com/ng-packagr/ng-packagr/compare/22.0.0-rc.0...22.0.0) (2026-06-03)

### ⚠ BREAKING CHANGES

* **ng-packagr:** TypeScript versions older than 6.0 are no longer supported.
* Node.js v20 is no longer supported. The minimum supported Node.js versions are now v22.22.0 and v24.13.1.

### Features

* update @angular/compiler-cli peer dependency to support Angular v22 ([1fd8eb1](https://github.com/ng-packagr/ng-packagr/commit/1fd8eb15c4dbdbe52955666417caf056f116eca3))
* support Node.js 26 ([4360fea](https://github.com/ng-packagr/ng-packagr/commit/4360fea0d8fff19d9e2cdf2b4f1fb487ec01dff5))
* **ng-packagr:** drop support for TypeScript 5.9 ([b59e280](https://github.com/ng-packagr/ng-packagr/commit/b59e2806c6eaef78e71e412e5851b4b437cca45a))

### Bug Fixes

* **ng-packagr:** invalidate angularDiagnosticCache for html changes ([e7d8e38](https://github.com/ng-packagr/ng-packagr/commit/e7d8e38a30c6197a6f2f450d41b1752cce9360e2))
* **ng-packagr:** handle package.json files with export subpaths ([89e195d](https://github.com/ng-packagr/ng-packagr/commit/89e195da6d474dbe0401494f0d78ded9cd7f573a))
* ensure dts sourcemaps point to original ts files ([28424e2](https://github.com/ng-packagr/ng-packagr/commit/28424e2b7ce8d78e95614481dd797b75fe7db2be))
* allow TypeScript 6 peer dependency ([fdb49da](https://github.com/ng-packagr/ng-packagr/commit/fdb49da99ab8fc7a9ef62da9229f971bc561b26d))
* update minimum supported Node.js versions ([f7e5ef5](https://github.com/ng-packagr/ng-packagr/commit/f7e5ef55ef4f14f77cd1e786e8ec35676d373e9c))


## [22.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/22.0.0-next.5...22.0.0-rc.0) (2026-05-18)

## [22.0.0-next.5](https://github.com/ng-packagr/ng-packagr/compare/22.0.0-next.4...22.0.0-next.5) (2026-05-18)


### Bug Fixes

* **ng-packagr:** handle package.json files with export subpaths ([89e195d](https://github.com/ng-packagr/ng-packagr/commit/89e195da6d474dbe0401494f0d78ded9cd7f573a))

## [22.0.0-next.4](https://github.com/ng-packagr/ng-packagr/compare/22.0.0-next.3...22.0.0-next.4) (2026-05-07)


### Features

* support Node.js 26 ([4360fea](https://github.com/ng-packagr/ng-packagr/commit/4360fea0d8fff19d9e2cdf2b4f1fb487ec01dff5))

## [21.2.3](https://github.com/ng-packagr/ng-packagr/compare/21.2.2...21.2.3) (2026-04-16)

### Bug Fixes

* **ng-packagr:** resolve imports with TS extensions in rollup ([5629808](https://github.com/ng-packagr/ng-packagr/commit/562980812114e05a30fa66bd36c51d9bbb7c73e8)), closes [#3281](https://github.com/ng-packagr/ng-packagr/issues/3281)

## [22.0.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/22.0.0-next.2...22.0.0-next.3) (2026-04-16)


### ⚠ BREAKING CHANGES

* **ng-packagr:** * TypeScript versions older than 6.0 are no longer supported.

### Features

* **ng-packagr:** drop support for TypeScript 5.9 ([b59e280](https://github.com/ng-packagr/ng-packagr/commit/b59e2806c6eaef78e71e412e5851b4b437cca45a))


### Bug Fixes

* **ng-packagr:** resolve imports with TS extensions in rollup ([804c04b](https://github.com/ng-packagr/ng-packagr/commit/804c04bdfa408fca64610d55449a75d82ed43c49)), closes [#3281](https://github.com/ng-packagr/ng-packagr/issues/3281)

## [22.0.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/22.0.0-next.1...22.0.0-next.2) (2026-03-27)


### Features

* update to TypeScript 6 ([f841ddf](https://github.com/ng-packagr/ng-packagr/commit/f841ddf5350f53c6c6a859d4d7130ce71beb5de6))


### Bug Fixes

* default generated package.json type to module ([0a12da7](https://github.com/ng-packagr/ng-packagr/commit/0a12da70fd0f9bd1f4be82ee986f3a40c4157d1b))

## [22.0.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/22.0.0-next.0...22.0.0-next.1) (2026-03-19)


### Bug Fixes

* ensure dts sourcemaps point to original ts files ([28424e2](https://github.com/ng-packagr/ng-packagr/commit/28424e2b7ce8d78e95614481dd797b75fe7db2be))

## [22.0.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/21.2.0-next.0...22.0.0-next.0) (2026-02-25)


### ⚠ BREAKING CHANGES

* Node.js v20 is no longer supported. The minimum supported Node.js versions are now v22.22.0 and v24.13.1.

### Features

* update @angular/compiler-cli peer dependency to support Angular v22 ([1fd8eb1](https://github.com/ng-packagr/ng-packagr/commit/1fd8eb15c4dbdbe52955666417caf056f116eca3))


### Bug Fixes

* allow TypeScript 6 peer dependency ([fdb49da](https://github.com/ng-packagr/ng-packagr/commit/fdb49da99ab8fc7a9ef62da9229f971bc561b26d))


* update minimum supported Node.js versions ([f7e5ef5](https://github.com/ng-packagr/ng-packagr/commit/f7e5ef55ef4f14f77cd1e786e8ec35676d373e9c))

## [21.2.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/21.1.0...21.2.0-next.0) (2026-01-14)

## [21.1.0](https://github.com/ng-packagr/ng-packagr/compare/21.0.1...21.1.0) (2026-01-14)

### Features

* add `importAttributesKey: 'with'` to Rollup output options ([ba4f690](https://github.com/ng-packagr/ng-packagr/commit/ba4f6900a5ddcc4dd5a41d7df0c0fa902de4241a)), closes [#3212](https://github.com/ng-packagr/ng-packagr/issues/3212)


### Bug Fixes

* correctly identify external modules ([7c24c84](https://github.com/ng-packagr/ng-packagr/commit/7c24c84056831327b917cc7ad3772f7146ec24b7))

### [21.0.1](https://github.com/ng-packagr/ng-packagr/compare/21.0.0...21.0.1) (2025-12-15)


### Bug Fixes

* correctly identify external modules ([e0f7b22](https://github.com/ng-packagr/ng-packagr/commit/e0f7b22dfd59470a7458191b6784d66cbf8d083a))

## [21.1.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/21.0.0...21.1.0-next.0) (2025-11-19)

## [21.1.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/21.0.0...21.1.0-next.0) (2025-11-19)

## [21.0.0](https://github.com/ng-packagr/ng-packagr/compare/20.3.2...21.0.0) (2025-11-19)

### ⚠ BREAKING CHANGES

* TypeScript versions older than 5.9 are no longer supported.
* The `javascriptEnabled` option for Less is no longer supported. Projects relying on inline JavaScript within Less files will need to refactor their stylesheets to remove this dependency.

### Bug Fixes

* drop support for TypeScript 5.8 ([7b48224](https://github.com/ng-packagr/ng-packagr/commit/7b4822488868a752c76144a82e4b1c1ca927ab7d))
* remove deprecated `javascriptEnabled` option for Less ([d57278d](https://github.com/ng-packagr/ng-packagr/commit/d57278d23f446996ba8ac72d260fd5650fba8cc8))

### Features

* write the types in `types` directory ([7a5e8fb](https://github.com/ng-packagr/ng-packagr/commit/7a5e8fbd51010db91d0a74bf6efb6c0eb6732a00))
* add support for Angular version 21 ([ed70e23](https://github.com/ng-packagr/ng-packagr/commit/ed70e2326deb257fbcb789cdf07b71b31f236f4b))

## [20.3.2](https://github.com/ng-packagr/ng-packagr/compare/20.3.1...20.3.2) (2025-11-13)


### Bug Fixes

* ensure deterministic ordering of 'exports' field ([952ca64](https://github.com/ng-packagr/ng-packagr/commit/952ca64fb8e80c55e8d1a95c5bb23776eaeb5d9d)), closes [#3175](https://github.com/ng-packagr/ng-packagr/issues/3175)

## [20.3.1](https://github.com/ng-packagr/ng-packagr/compare/20.3.0...20.3.1) (2025-11-12)


### Performance

* reduce memory usage for multiple entry-points (non-watch) ([e063368](https://github.com/ng-packagr/ng-packagr/commit/e0633680a119d42e74f8247438f9bc47049327fd)), closes [#3168](https://github.com/ng-packagr/ng-packagr/issues/3168)


## [20.2.0](https://github.com/ng-packagr/ng-packagr/compare/20.2.0-rc.0...20.2.0) (2025-08-20)

### Features
 * Add support for TypeScript 5.9

## [20.2.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/19.2.0...20.0.0) (2025-07-16)

### ⚠ BREAKING CHANGES

* Node.js versions from 22.0 to 22.10 are no longer supported
* Node.js v18 is no longer supported
* TypeScript versions less than 5.8 are no longer supported.

### Features

* add DTS bundles for entry-points ([ca9d568](https://github.com/ng-packagr/ng-packagr/commit/ca9d568838704d70bc64c2832d1ecfbe8536b627)), closes [#139](https://github.com/ng-packagr/ng-packagr/issues/139)
* drop support for TypeScript older than 5.8 ([a8255ce](https://github.com/ng-packagr/ng-packagr/commit/a8255ce73d69375e0f8eed14a9e5bc38a673494a))
* expand browser support to widely available Baseline ([94f7fbe](https://github.com/ng-packagr/ng-packagr/commit/94f7fbeb3300e9e930a51740226d91b8bd990394))
* support Angular version 20 ([cebe060](https://github.com/ng-packagr/ng-packagr/commit/cebe0608bc17968bf7c946b972dec5e09b12b3fe))
* support Sass package importers ([f767d3c](https://github.com/ng-packagr/ng-packagr/commit/f767d3cff7bf521e188a662472edc4524555e834))


### Bug Fixes

* correctly resolve SCSS resources from nested paths ([f34a73d](https://github.com/ng-packagr/ng-packagr/commit/f34a73df3071499ce137505ffd0ea4a80fb35aa5)), closes [#3006](https://github.com/ng-packagr/ng-packagr/issues/3006)
* correctly update reference to bin ([e73db8e](https://github.com/ng-packagr/ng-packagr/commit/e73db8e0d27a8c57ba65a904cdb15e624a26a00b)), closes [#3062](https://github.com/ng-packagr/ng-packagr/issues/3062)
* disable emitting empty chunk warning ([638c107](https://github.com/ng-packagr/ng-packagr/commit/638c107b2a2265223f18aef6d9c8f10ea70a9377))
* disable TypeScript `composite` option with Angular compiler ([5dfbdba](https://github.com/ng-packagr/ng-packagr/commit/5dfbdba5c67ea759cfc3546a09a80b212a7db465))
* ensure in package `.browserslistrc` is correctly resolved ([14ed50d](https://github.com/ng-packagr/ng-packagr/commit/14ed50dc9b1db91dece66e294103bf3f1b1a1523))
* prevent 'Unexpected non-whitespace character' error ([dfb51b2](https://github.com/ng-packagr/ng-packagr/commit/dfb51b2da3d9c02cdb9e9bfa0bfe2547707e41c0)), closes [#3080](https://github.com/ng-packagr/ng-packagr/issues/3080)
* prevent nested CSS in components ([e2d9ef0](https://github.com/ng-packagr/ng-packagr/commit/e2d9ef006837392867889aa78587c907c24569f6))
* remove Node.js v18 support ([69d9d9e](https://github.com/ng-packagr/ng-packagr/commit/69d9d9ee74c4e6b25eda3768b25501b1494002cc))
* update min Node.js support to 20.19, 22.12, and 24.0 ([5a7eac4](https://github.com/ng-packagr/ng-packagr/commit/5a7eac4a74306f415c857e16ec6501a4d542868d))
* update minimum supported Node.js 22 version to 22.11.0 ([a836a71](https://github.com/ng-packagr/ng-packagr/commit/a836a71ccd753f425227c684fdfb017bfc017f8f))


### Performance

* optimize node deletion using `Set` ([a99785c](https://github.com/ng-packagr/ng-packagr/commit/a99785cbc7f6fc3fbec30cc5d7c3b9352836bfe5))
* prevent redundant entry-point builds in watch mode ([2f2668b](https://github.com/ng-packagr/ng-packagr/commit/2f2668b51ca56cecbb3dbf163180338cbc14d9b6)), closes [#2936](https://github.com/ng-packagr/ng-packagr/issues/2936)

## [20.1.0](https://github.com/ng-packagr/ng-packagr/compare/20.1.0-rc.0...20.1.0) (2025-07-09)

### Bug Fixes

* prevent 'Unexpected non-whitespace character' error ([dfb51b2](https://github.com/ng-packagr/ng-packagr/commit/dfb51b2da3d9c02cdb9e9bfa0bfe2547707e41c0)), closes [#3080](https://github.com/ng-packagr/ng-packagr/issues/3080)


## [20.1.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/20.1.0-next.0...20.1.0-rc.0) (2025-07-01)


### Bug Fixes

* prevent 'Unexpected non-whitespace character' error ([dfb51b2](https://github.com/ng-packagr/ng-packagr/commit/dfb51b2da3d9c02cdb9e9bfa0bfe2547707e41c0)), closes [#3080](https://github.com/ng-packagr/ng-packagr/issues/3080)

## [20.1.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/20.0.0...20.1.0-next.0) (2025-05-28)

## [20.0.0](https://github.com/ng-packagr/ng-packagr/compare/19.2.2...20.0.0) (2025-05-28)

### ⚠ BREAKING CHANGES

* Node.js versions from 22.0 to 22.11 are no longer supported
* Node.js v18 is no longer supported
* TypeScript versions less than 5.8 are no longer supported.

### Features

* expand browser support to widely available Baseline ([94f7fbe](https://github.com/ng-packagr/ng-packagr/commit/94f7fbeb3300e9e930a51740226d91b8bd990394))
* add DTS bundles for entry-points ([ca9d568](https://github.com/ng-packagr/ng-packagr/commit/ca9d568838704d70bc64c2832d1ecfbe8536b627)), closes [#139](https://github.com/ng-packagr/ng-packagr/issues/139)
* support Angular version 20 ([cebe060](https://github.com/ng-packagr/ng-packagr/commit/cebe0608bc17968bf7c946b972dec5e09b12b3fe))
* drop support for TypeScript older than 5.8 ([a8255ce](https://github.com/ng-packagr/ng-packagr/commit/a8255ce73d69375e0f8eed14a9e5bc38a673494a))
* support Sass package importers ([f767d3c](https://github.com/ng-packagr/ng-packagr/commit/f767d3cff7bf521e188a662472edc4524555e834))

### Bug Fixes

* correctly resolve SCSS resources from nested paths ([f34a73d](https://github.com/ng-packagr/ng-packagr/commit/f34a73df3071499ce137505ffd0ea4a80fb35aa5)), closes [#3006](https://github.com/ng-packagr/ng-packagr/issues/3006)
* correctly update reference to bin ([e73db8e](https://github.com/ng-packagr/ng-packagr/commit/e73db8e0d27a8c57ba65a904cdb15e624a26a00b)), closes [#3062](https://github.com/ng-packagr/ng-packagr/issues/3062)
* update min Node.js support to 20.19, 22.12, and 24.0 ([5a7eac4](https://github.com/ng-packagr/ng-packagr/commit/5a7eac4a74306f415c857e16ec6501a4d542868d))
* ensure in package `.browserslistrc` is correctly resolved ([14ed50d](https://github.com/ng-packagr/ng-packagr/commit/14ed50dc9b1db91dece66e294103bf3f1b1a1523))
* prevent nested CSS in components ([e2d9ef0](https://github.com/ng-packagr/ng-packagr/commit/e2d9ef006837392867889aa78587c907c24569f6))
* disable TypeScript `composite` option with Angular compiler ([5dfbdba](https://github.com/ng-packagr/ng-packagr/commit/5dfbdba5c67ea759cfc3546a09a80b212a7db465))
* disable emitting empty chunk warning ([638c107](https://github.com/ng-packagr/ng-packagr/commit/638c107b2a2265223f18aef6d9c8f10ea70a9377))
* remove Node.js v18 support ([69d9d9e](https://github.com/ng-packagr/ng-packagr/commit/69d9d9ee74c4e6b25eda3768b25501b1494002cc))
* update minimum supported Node.js 22 version to 22.11.0 ([a836a71](https://github.com/ng-packagr/ng-packagr/commit/a836a71ccd753f425227c684fdfb017bfc017f8f))

### Performance

* optimize node deletion using `Set` ([a99785c](https://github.com/ng-packagr/ng-packagr/commit/a99785cbc7f6fc3fbec30cc5d7c3b9352836bfe5))
* prevent redundant entry-point builds in watch mode ([2f2668b](https://github.com/ng-packagr/ng-packagr/commit/2f2668b51ca56cecbb3dbf163180338cbc14d9b6)), closes [#2936](https://github.com/ng-packagr/ng-packagr/issues/2936)

## [20.0.0-rc.2](https://github.com/ng-packagr/ng-packagr/compare/20.0.0-rc.1...20.0.0-rc.2) (2025-05-27)


### Bug Fixes

* correctly update reference to bin ([e73db8e](https://github.com/ng-packagr/ng-packagr/commit/e73db8e0d27a8c57ba65a904cdb15e624a26a00b)), closes [#3062](https://github.com/ng-packagr/ng-packagr/issues/3062)

## [20.0.0-rc.1](https://github.com/ng-packagr/ng-packagr/compare/20.0.0-rc.0...20.0.0-rc.1) (2025-05-21)


### Bug Fixes

* update min Node.js support to 20.19, 22.12, and 24.0 ([5a7eac4](https://github.com/ng-packagr/ng-packagr/commit/5a7eac4a74306f415c857e16ec6501a4d542868d))

## [20.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/20.0.0-next.8...20.0.0-rc.0) (2025-04-30)

## [20.0.0-next.8](https://github.com/ng-packagr/ng-packagr/compare/20.0.0-next.7...20.0.0-next.8) (2025-04-23)


### Bug Fixes

* ensure in package `.browserslistrc` is correctly resolved ([14ed50d](https://github.com/ng-packagr/ng-packagr/commit/14ed50dc9b1db91dece66e294103bf3f1b1a1523))

## [20.0.0-next.7](https://github.com/ng-packagr/ng-packagr/compare/20.0.0-next.6...20.0.0-next.7) (2025-04-23)


### Features

* expand browser support to widely available Baseline ([94f7fbe](https://github.com/ng-packagr/ng-packagr/commit/94f7fbeb3300e9e930a51740226d91b8bd990394))


### Bug Fixes

* prevent nested CSS in components ([e2d9ef0](https://github.com/ng-packagr/ng-packagr/commit/e2d9ef006837392867889aa78587c907c24569f6))

## [20.0.0-next.6](https://github.com/ng-packagr/ng-packagr/compare/20.0.0-next.5...20.0.0-next.6) (2025-04-09)


### Bug Fixes

* disable TypeScript `composite` option with Angular compiler ([5dfbdba](https://github.com/ng-packagr/ng-packagr/commit/5dfbdba5c67ea759cfc3546a09a80b212a7db465))

## [20.0.0-next.5](https://github.com/ng-packagr/ng-packagr/compare/20.0.0-next.4...20.0.0-next.5) (2025-04-04)


### Bug Fixes

* disable emitting empty chunk warning ([638c107](https://github.com/ng-packagr/ng-packagr/commit/638c107b2a2265223f18aef6d9c8f10ea70a9377))

## [20.0.0-next.4](https://github.com/ng-packagr/ng-packagr/compare/20.0.0-next.3...20.0.0-next.4) (2025-04-03)


### Performance

* optimize node deletion using `Set` ([a99785c](https://github.com/ng-packagr/ng-packagr/commit/a99785cbc7f6fc3fbec30cc5d7c3b9352836bfe5))
* prevent redundant entry-point builds in watch mode ([2f2668b](https://github.com/ng-packagr/ng-packagr/commit/2f2668b51ca56cecbb3dbf163180338cbc14d9b6)), closes [#2936](https://github.com/ng-packagr/ng-packagr/issues/2936)

## [20.0.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/20.0.0-next.2...20.0.0-next.3) (2025-04-02)


### Features

* add DTS bundles for entry-points ([ca9d568](https://github.com/ng-packagr/ng-packagr/commit/ca9d568838704d70bc64c2832d1ecfbe8536b627)), closes [#139](https://github.com/ng-packagr/ng-packagr/issues/139)


### Bug Fixes

* correctly resolve SCSS resources from nested paths ([f34a73d](https://github.com/ng-packagr/ng-packagr/commit/f34a73df3071499ce137505ffd0ea4a80fb35aa5)), closes [#3006](https://github.com/ng-packagr/ng-packagr/issues/3006)

## [20.0.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/20.0.0-next.1...20.0.0-next.2) (2025-03-26)


### ⚠ BREAKING CHANGES

* Node.js versions from 22.0 to 22.10 are no longer supported
* Node.js v18 is no longer supported
* TypeScript versions less than 5.8 are no longer supported.

### Features

* drop support for TypeScript older than 5.8 ([a8255ce](https://github.com/ng-packagr/ng-packagr/commit/a8255ce73d69375e0f8eed14a9e5bc38a673494a))
* support Sass package importers ([f767d3c](https://github.com/ng-packagr/ng-packagr/commit/f767d3cff7bf521e188a662472edc4524555e834))


### Bug Fixes

* remove Node.js v18 support ([69d9d9e](https://github.com/ng-packagr/ng-packagr/commit/69d9d9ee74c4e6b25eda3768b25501b1494002cc))
* update minimum supported Node.js 22 version to 22.11.0 ([a836a71](https://github.com/ng-packagr/ng-packagr/commit/a836a71ccd753f425227c684fdfb017bfc017f8f))

## [20.0.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/20.0.0-next.0...20.0.0-next.1) (2025-03-04)


### Features

* support Angular version 20 ([cebe060](https://github.com/ng-packagr/ng-packagr/commit/cebe0608bc17968bf7c946b972dec5e09b12b3fe))

## [20.0.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/19.2.0-next.2...20.0.0-next.0) (2025-03-03)

## [19.2.0](https://github.com/ng-packagr/ng-packagr/compare/19.2.0-next.2...19.2.0) (2025-02-25)

## [19.2.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/19.2.0-next.1...19.2.0-next.2) (2025-02-10)


### Features

* support TypeScript 5.8 ([4dc79fa](https://github.com/ng-packagr/ng-packagr/commit/4dc79fa9c8891356322c5d58d31fa6af5582028b))

## [19.2.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/19.2.0-next.0...19.2.0-next.1) (2025-01-29)


### Bug Fixes

* add `tailwindcss` version 4 as a valid peer dependency ([16561cd](https://github.com/ng-packagr/ng-packagr/commit/16561cdca05509a8a59c1b892f1f2690e26e1b14))

## [19.2.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/19.1.1...19.2.0-next.0) (2025-01-24)

### [19.1.1](https://github.com/ng-packagr/ng-packagr/compare/19.1.0...19.1.1) (2025-01-24)


### Bug Fixes

* disable TypeScript `removeComments` option ([f0415dd](https://github.com/ng-packagr/ng-packagr/commit/f0415ddb2ffe9d87fd6c71811f296079d12749b7))

## [19.1.0](https://github.com/ng-packagr/ng-packagr/compare/19.1.0-next.4...19.1.0) (2025-01-15)

### Features

* support TypeScript 5.7 ([af70d03](https://github.com/ng-packagr/ng-packagr/commit/af70d03be430c26f62fbb53aa173581c314b62d7))

### Bug Fixes

* Re-use module resolution cache.
* adjust peerDependencies to allow Angular `19.1.0-next`  ([d27ef5b](https://github.com/ng-packagr/ng-packagr/commit/d27ef5bf07babdb505d1d2175a6cab482bde92c2))

### Performance

* mitigate TypeScript 5.6+ performance regression ([ac9766e](https://github.com/ng-packagr/ng-packagr/commit/ac9766eb1edbdc98d8173a3b0576d246109283c5)), closes [#2969](https://github.com/ng-packagr/ng-packagr/issues/2969)


## [19.1.0-next.4](https://github.com/ng-packagr/ng-packagr/compare/19.1.0-next.3...19.1.0-next.4) (2025-01-15)


## [19.1.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/19.1.0-next.2...19.1.0-next.3) (2025-01-07)

### Bug Fixes

* Re-use module resolution cache.

## [19.1.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/19.1.0-next.1...19.1.0-next.2) (2024-11-29)

## [19.1.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/19.1.0-next.0...19.1.0-next.1) (2024-11-29)


### Bug Fixes

* adjust peerDependencies to allow Angular `19.1.0-next`  ([d27ef5b](https://github.com/ng-packagr/ng-packagr/commit/d27ef5bf07babdb505d1d2175a6cab482bde92c2))

## [19.1.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/19.0.1...19.1.0-next.0) (2024-11-28)


### Features

* support TypeScript 5.7 ([af70d03](https://github.com/ng-packagr/ng-packagr/commit/af70d03be430c26f62fbb53aa173581c314b62d7))

### [19.0.1](https://github.com/ng-packagr/ng-packagr/compare/19.0.0...19.0.1) (2024-11-22)


### Bug Fixes

* correctly show stylesheet processing errors ([4d66246](https://github.com/ng-packagr/ng-packagr/commit/4d66246ef67623e8adc3fa422d7ff68b95140207))

## [19.0.0](https://github.com/ng-packagr/ng-packagr/compare/18.2.1...19.0.0) (2024-11-19)


### Features

* add `sass` option ([c85df4f](https://github.com/ng-packagr/ng-packagr/commit/c85df4ff489258a1723a4b8c4ffd78c9ef63c1d5))


### Bug Fixes

* overhaul the stylesheet pipeline ([e2dc6e1](https://github.com/ng-packagr/ng-packagr/commit/e2dc6e14665460c4feb0a7feac1ef2f96f280d48)), closes [#1873](https://github.com/ng-packagr/ng-packagr/issues/1873) [#2918](https://github.com/ng-packagr/ng-packagr/issues/2918) [#2660](https://github.com/ng-packagr/ng-packagr/issues/2660) [#2654](https://github.com/ng-packagr/ng-packagr/issues/2654)
* improve cache logic to handle BigInt ([72f57b8](https://github.com/ng-packagr/ng-packagr/commit/72f57b8b64cdbdedf4429face0587429459427f8)), closes [#2375](https://github.com/ng-packagr/ng-packagr/issues/2375)
* resolve ESM files correctly on windows ([e476c7b](https://github.com/ng-packagr/ng-packagr/commit/e476c7bef530f87010d8da6320b5a507b73be996))
* remove unused ESM2022 from APF ([0be95f7](https://github.com/ng-packagr/ng-packagr/commit/0be95f7a3b993ddc5b565a0beedbd7f38b6c37be))
* disable rollups hoistTransitiveImports ([2b077c8](https://github.com/ng-packagr/ng-packagr/commit/2b077c8872b1e053f11fc035ed346bb5a3b61f01))

## [19.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/19.0.0-next.7...19.0.0-rc.0) (2024-10-31)

## [19.0.0-next.7](https://github.com/ng-packagr/ng-packagr/compare/19.0.0-next.5...19.0.0-next.7) (2024-10-24)


### Features

* add `sass` option ([c85df4f](https://github.com/ng-packagr/ng-packagr/commit/c85df4ff489258a1723a4b8c4ffd78c9ef63c1d5))


### Bug Fixes

* overhaul the stylesheet pipeline ([e2dc6e1](https://github.com/ng-packagr/ng-packagr/commit/e2dc6e14665460c4feb0a7feac1ef2f96f280d48)), closes [#1873](https://github.com/ng-packagr/ng-packagr/issues/1873) [#2918](https://github.com/ng-packagr/ng-packagr/issues/2918) [#2660](https://github.com/ng-packagr/ng-packagr/issues/2660) [#2654](https://github.com/ng-packagr/ng-packagr/issues/2654)

## [19.0.0-next.6](https://github.com/ng-packagr/ng-packagr/compare/19.0.0-next.5...19.0.0-next.6) (2024-10-15)
* Internal refactors
## [19.0.0-next.5](https://github.com/ng-packagr/ng-packagr/compare/19.0.0-next.4...19.0.0-next.5) (2024-10-15)

## [19.0.0-next.4](https://github.com/ng-packagr/ng-packagr/compare/19.0.0-next.3...19.0.0-next.4) (2024-10-15)


### Bug Fixes

* improve cache logic to handle BigInt ([72f57b8](https://github.com/ng-packagr/ng-packagr/commit/72f57b8b64cdbdedf4429face0587429459427f8)), closes [#2375](https://github.com/ng-packagr/ng-packagr/issues/2375)

## [19.0.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/19.0.0-next.2...19.0.0-next.3) (2024-08-28)


### Bug Fixes

* resolve ESM files correctly on windows ([e476c7b](https://github.com/ng-packagr/ng-packagr/commit/e476c7bef530f87010d8da6320b5a507b73be996))

## [19.0.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/19.0.0-next.1...19.0.0-next.2) (2024-08-28)


### Features

* remove unused ESM2022 from APF ([0be95f7](https://github.com/ng-packagr/ng-packagr/commit/0be95f7a3b993ddc5b565a0beedbd7f38b6c37be))

## [19.0.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/18.2.0...19.0.0-next.1) (2024-08-21)


### Bug Fixes

* disable rollups hoistTransitiveImports ([2b077c8](https://github.com/ng-packagr/ng-packagr/commit/2b077c8872b1e053f11fc035ed346bb5a3b61f01))

### [18.2.1](https://github.com/ng-packagr/ng-packagr/compare/18.2.0...18.2.1) (2024-08-21)
### Bug Fixes

* disable rollups hoistTransitiveImports ([87fd814](https://github.com/ng-packagr/ng-packagr/commit/87fd814a203cb4e09ebb0a62de37628f37821abf))

## [19.0.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/18.2.0...19.0.0-next.0) (2024-08-14)

## [18.2.0](https://github.com/ng-packagr/ng-packagr/compare/18.2.0-next.0...18.2.0) (2024-08-14)

## [18.2.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/18.1.0...18.2.0-next.0) (2024-07-10)

## [18.1.0](https://github.com/ng-packagr/ng-packagr/compare/18.0.0...18.1.0) (2024-07-10)

### Features

* add support for TypeScript 5.5 ([ae2a698](https://github.com/ng-packagr/ng-packagr/commit/ae2a698fa51f9c69824ec8a4e125f67bfe358ff0))

## [18.0.0](https://github.com/ng-packagr/ng-packagr/compare/18.0.0-rc.0...18.0.0) (2024-05-22)

### ⚠ BREAKING CHANGES

* Node.js support for versions <18.19.1 and <20.11.1 has been removed.

### Bug Fixes

* incorrect path resolution for entry-points when generating FESM ([f2cd914](https://github.com/ng-packagr/ng-packagr/commit/f2cd914dfbb597357c8dce0d1f5f41fd76b210b9)), closes [#2838](https://github.com/ng-packagr/ng-packagr/issues/2838)

### Features

* add support for Angular 18 ([9bef232](https://github.com/ng-packagr/ng-packagr/commit/9bef232ff24d0de5a47977b30a3c66af6f8eb6f9))
* add `NgPackagrOptions` to public api ([ffc512e](https://github.com/ng-packagr/ng-packagr/commit/ffc512ee9a2c30e1528189d20b4a18d7e19cf473))
* add support for polling ([2c7f75b](https://github.com/ng-packagr/ng-packagr/commit/2c7f75bec709c870398d332cf3af9285f079f9d1))
* support TypeScript 5.4 ([07d5cea](https://github.com/ng-packagr/ng-packagr/commit/07d5cea0d79e1e9453c33dadd4b29122f764d949))

## [18.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/18.0.0-next.4...18.0.0-rc.0) (2024-05-02)

## [18.0.0-next.4](https://github.com/ng-packagr/ng-packagr/compare/18.0.0-next.3...18.0.0-next.4) (2024-04-25)


### Bug Fixes

* incorrect path resolution for entry-points when generating FESM ([f2cd914](https://github.com/ng-packagr/ng-packagr/commit/f2cd914dfbb597357c8dce0d1f5f41fd76b210b9)), closes [#2838](https://github.com/ng-packagr/ng-packagr/issues/2838)

## [18.0.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/18.0.0-next.2...18.0.0-next.3) (2024-04-18)


### Bug Fixes

* add `NgPackagrOptions` to public api ([ffc512e](https://github.com/ng-packagr/ng-packagr/commit/ffc512ee9a2c30e1528189d20b4a18d7e19cf473))

## [18.0.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/18.0.0-next.1...18.0.0-next.2) (2024-04-18)


### Features

* add support for polling ([2c7f75b](https://github.com/ng-packagr/ng-packagr/commit/2c7f75bec709c870398d332cf3af9285f079f9d1))

## [18.0.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/18.0.0-next.0...18.0.0-next.1) (2024-03-19)


### ⚠ BREAKING CHANGES

* Node.js support for versions <18.19.1 and <20.11.1 has been removed.

### Performance

* use esbuild instead of rollup to generate FESM ([9c23827](https://github.com/ng-packagr/ng-packagr/commit/9c238273c9057108744c9f9ef8c7d9e62225c0f1)), closes [#2759](https://github.com/ng-packagr/ng-packagr/issues/2759)

## [18.0.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/17.3.0...18.0.0-next.0) (2024-03-15)


### Features

* add support for Angular 18 ([9bef232](https://github.com/ng-packagr/ng-packagr/commit/9bef232ff24d0de5a47977b30a3c66af6f8eb6f9))

## [17.3.0](https://github.com/ng-packagr/ng-packagr/compare/17.3.0-rc.0...17.3.0) (2024-03-13)

## [17.3.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/17.2.1...17.3.0-rc.0) (2024-03-06)


### Features

* support TypeScript 5.4 ([07d5cea](https://github.com/ng-packagr/ng-packagr/commit/07d5cea0d79e1e9453c33dadd4b29122f764d949))

### [17.2.1](https://github.com/ng-packagr/ng-packagr/compare/17.2.0...17.2.1) (2024-03-04)


### Performance

* remove FS async calls during stylesheet worker creation ([3c27869](https://github.com/ng-packagr/ng-packagr/commit/3c27869ea499064b5362e736ff9fed9f2ed84ba9)), closes [#2797](https://github.com/ng-packagr/ng-packagr/issues/2797) [#2796](https://github.com/ng-packagr/ng-packagr/issues/2796)

## [17.2.0](https://github.com/ng-packagr/ng-packagr/compare/17.2.0-rc.0...17.2.0) (2024-02-14)

### Features

* support using custom postcss configuration ([bcb80fa](https://github.com/ng-packagr/ng-packagr/commit/bcb80fa0dc14e78697e1c76cd9c336ac3e70c57c)), closes [#2765](https://github.com/ng-packagr/ng-packagr/issues/2765) [#643](https://github.com/ng-packagr/ng-packagr/issues/643)

### Bug Fixes

* support string as plugin option in custom postcss plugin config ([bb67204](https://github.com/ng-packagr/ng-packagr/commit/bb67204aca396a214cf5b7c2a679bc1aefdb7f87))
* handle absolute `url` reference in CSS files ([3d96591](https://github.com/ng-packagr/ng-packagr/commit/3d96591c932886cd5f62668909989879f3d63aac))

## [17.2.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/17.2.0-next.0...17.2.0-rc.0) (2024-02-07)


### Bug Fixes

* handle absolute `url` reference in CSS files ([3d96591](https://github.com/ng-packagr/ng-packagr/commit/3d96591c932886cd5f62668909989879f3d63aac))

## [17.2.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/17.1.2...17.2.0-next.0) (2024-02-01)


### Features

* support using custom postcss configuration ([bcb80fa](https://github.com/ng-packagr/ng-packagr/commit/bcb80fa0dc14e78697e1c76cd9c336ac3e70c57c)), closes [#2765](https://github.com/ng-packagr/ng-packagr/issues/2765) [#643](https://github.com/ng-packagr/ng-packagr/issues/643)

### [17.1.2](https://github.com/ng-packagr/ng-packagr/compare/17.1.1...17.1.2) (2024-01-24)

### [17.1.1](https://github.com/ng-packagr/ng-packagr/compare/17.1.0...17.1.1) (2024-01-22)


### Bug Fixes

* correctly embed CSS resources ([059ba29](https://github.com/ng-packagr/ng-packagr/commit/059ba298b96ace42fc92ed2d67757848f5a8ea17)), closes [#2768](https://github.com/ng-packagr/ng-packagr/issues/2768)

## [17.1.0](https://github.com/ng-packagr/ng-packagr/compare/17.1.0-next.5...17.1.0) (2024-01-17)

### Bug Fixes

* add missing tailwind `@screen` directive in matcher ([ad1bd50](https://github.com/ng-packagr/ng-packagr/commit/ad1bd50efb9eadccf5f80abbf8c24e03551f2081))
* remove direct imports to `rollup` ([45336ae](https://github.com/ng-packagr/ng-packagr/commit/45336ae69a22c95825e85afccf40ad526275f31b)), closes [#2749](https://github.com/ng-packagr/ng-packagr/issues/2749)
* correctly validate secondary entry-points config ([5ff4afd](https://github.com/ng-packagr/ng-packagr/commit/5ff4afde43b4984bf7f64ce991dfe255b1fb9373))
* use rollup wasm version when rollup fails to load ([1ed0dc9](https://github.com/ng-packagr/ng-packagr/commit/1ed0dc962275ec8f8dfbd4d658024bbafbdb9277)), closes [#2722](https://github.com/ng-packagr/ng-packagr/issues/2722)

### Performance

* do not update package.json version on watch mode ([1225a24](https://github.com/ng-packagr/ng-packagr/commit/1225a241e765b4e37a55958268725d13da5e8e30))
* embeed assets in css using esbuild instead of postcss ([fe3e052](https://github.com/ng-packagr/ng-packagr/commit/fe3e0521099c53d769ca690ebcefdf1178b1cf2f))
* only process component styles with postcss when needed ([84cf578](https://github.com/ng-packagr/ng-packagr/commit/84cf578001ef2a8ef2ef15047cb78aea7c098a65))
* only emit changed DTS and JS from NG compiler ([cd0f508](https://github.com/ng-packagr/ng-packagr/commit/cd0f508a80e94b877acab177b57fd68170f80318))
* only write FESM files when content changes during watch mode ([fb096a0](https://github.com/ng-packagr/ng-packagr/commit/fb096a065d5cb4a358463ce4640f2da7a04b34c5))
* reduce TypeScript JSDoc parsing ([8228740](https://github.com/ng-packagr/ng-packagr/commit/822874098e6b52bca6165efad635f9ec1d6ee7c3))

## [17.1.0-next.5](https://github.com/ng-packagr/ng-packagr/compare/17.1.0-next.4...17.1.0-next.5) (2023-12-22)


### Bug Fixes

* correctly validate secondary entry-points config ([5ff4afd](https://github.com/ng-packagr/ng-packagr/commit/5ff4afde43b4984bf7f64ce991dfe255b1fb9373))

## [17.1.0-next.4](https://github.com/ng-packagr/ng-packagr/compare/17.1.0-next.3...17.1.0-next.4) (2023-12-20)


### Bug Fixes

* add missing tailwind `@screen` directive in matcher ([ad1bd50](https://github.com/ng-packagr/ng-packagr/commit/ad1bd50efb9eadccf5f80abbf8c24e03551f2081))
* remove direct imports to `rollup` ([45336ae](https://github.com/ng-packagr/ng-packagr/commit/45336ae69a22c95825e85afccf40ad526275f31b)), closes [#2749](https://github.com/ng-packagr/ng-packagr/issues/2749)

## [17.1.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/17.1.0-next.2...17.1.0-next.3) (2023-12-13)

### Performance

* only emit changed DTS and JS from NG compiler ([cd0f508](https://github.com/ng-packagr/ng-packagr/commit/cd0f508a80e94b877acab177b57fd68170f80318))
* only write FESM files when content changes during watch mode ([fb096a0](https://github.com/ng-packagr/ng-packagr/commit/fb096a065d5cb4a358463ce4640f2da7a04b34c5))
* reduce TypeScript JSDoc parsing ([8228740](https://github.com/ng-packagr/ng-packagr/commit/822874098e6b52bca6165efad635f9ec1d6ee7c3))

## [17.1.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/17.1.0-next.1...17.1.0-next.2) (2023-12-05)


### Performance

* do not update package.json version on watch mode ([1225a24](https://github.com/ng-packagr/ng-packagr/commit/1225a241e765b4e37a55958268725d13da5e8e30))
* embeed assets in css using esbuild instead of postcss ([fe3e052](https://github.com/ng-packagr/ng-packagr/commit/fe3e0521099c53d769ca690ebcefdf1178b1cf2f))
* only process component styles with postcss when needed ([84cf578](https://github.com/ng-packagr/ng-packagr/commit/84cf578001ef2a8ef2ef15047cb78aea7c098a65))

## [17.1.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/17.1.0-next...17.1.0-next.1) (2023-11-23)


### Bug Fixes

* use rollup wasm version when rollup fails to load ([1ed0dc9](https://github.com/ng-packagr/ng-packagr/commit/1ed0dc962275ec8f8dfbd4d658024bbafbdb9277)), closes [#2722](https://github.com/ng-packagr/ng-packagr/issues/2722)

### [17.0.2](https://github.com/ng-packagr/ng-packagr/compare/17.0.1...17.0.2) (2023-11-20)


### Bug Fixes

* use rollup wasm version when rollup fails to load ([65b0b6c](https://github.com/ng-packagr/ng-packagr/commit/65b0b6ce3ac4486ec71a5701707280f93999fcc3)), closes [#2722](https://github.com/ng-packagr/ng-packagr/issues/2722)

## [17.1.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/17.0.1...17.1.0-next.0) (2023-11-17)

### Features

* add support for Angular 17.1 ([ce11810](https://github.com/ng-packagr/ng-packagr/commit/ce118106650ada305df86256260d38425ff1381c))

## [17.0.1](https://github.com/ng-packagr/ng-packagr/compare/17.0.0...17.0.1) (2023-11-16)


### Bug Fixes

* display template error when cache is disabled ([0698929](https://github.com/ng-packagr/ng-packagr/commit/0698929aa8583204d4b6a203824c0af27770f0eb)), closes [#2705](https://github.com/ng-packagr/ng-packagr/issues/2705)

## [17.0.0](https://github.com/ng-packagr/ng-packagr/compare/16.2.2...17.0.0) (2023-11-08)

### ⚠ BREAKING CHANGES

* TypeScript versions before 5.2 are no longer supported.

### Features

* esbuild can't resolve secondary entry point from library ([29f417e](https://github.com/ng-packagr/ng-packagr/commit/29f417eecddfc79d894e362da1524be3be6ee6ce))
* drop support for TypeScript versions before 5.2 ([72500c3](https://github.com/ng-packagr/ng-packagr/commit/72500c32dbef977d347022fbe6898ec829143bb1))
* add support for Angular 17 ([cbb06ee](https://github.com/ng-packagr/ng-packagr/commit/cbb06eeffa1ab36cbf9a22ed55a6ddcdcb57a33a))
* support TypeScript 5.2 ([0acd2c4](https://github.com/ng-packagr/ng-packagr/commit/0acd2c473db9a3b4510e28b2e384a0e0e0bdee4c))

### Bug Fixes

* emit `.tsbuildinfo` when cache mode is enabled ([5f32591](https://github.com/ng-packagr/ng-packagr/commit/5f32591e9613d971d6d7608af3e27c30ee14aa3a)), closes [#2682](https://github.com/ng-packagr/ng-packagr/issues/2682)
* add workaround to terminate workers on destroy ([7252f53](https://github.com/ng-packagr/ng-packagr/commit/7252f53fda8bf87db5554724a0bf501b93ef5cbc)), closes [#2688](https://github.com/ng-packagr/ng-packagr/issues/2688)

## [17.0.0-rc.1](https://github.com/ng-packagr/ng-packagr/compare/17.0.0-rc.0...17.0.0-rc.1) (2023-11-01)

## [17.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/17.0.0-next.2...17.0.0-rc.0) (2023-10-26)


### Features

* esbuild can't resolve secondary entry point from library ([29f417e](https://github.com/ng-packagr/ng-packagr/commit/29f417eecddfc79d894e362da1524be3be6ee6ce))

## [17.0.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/17.0.0-next.0...17.0.0-next.2) (2023-09-27)


### ⚠ BREAKING CHANGES

* TypeScript versions before 5.2 are no longer supported.

### Features

* drop support for TypeScript versions before 5.2 ([72500c3](https://github.com/ng-packagr/ng-packagr/commit/72500c32dbef977d347022fbe6898ec829143bb1))
* support TypeScript 5.2 ([0acd2c4](https://github.com/ng-packagr/ng-packagr/commit/0acd2c473db9a3b4510e28b2e384a0e0e0bdee4c))


### Bug Fixes

* emit `.tsbuildinfo` when cache mode is enabled ([5f32591](https://github.com/ng-packagr/ng-packagr/commit/5f32591e9613d971d6d7608af3e27c30ee14aa3a)), closes [#2682](https://github.com/ng-packagr/ng-packagr/issues/2682)

## [17.0.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/17.0.0-next.0...17.0.0-next.1) (2023-09-07)


### Features

* support TypeScript 5.2 ([0acd2c4](https://github.com/ng-packagr/ng-packagr/commit/0acd2c473db9a3b4510e28b2e384a0e0e0bdee4c))


### Bug Fixes

* emit `.tsbuildinfo` when cache mode is enabled ([5f32591](https://github.com/ng-packagr/ng-packagr/commit/5f32591e9613d971d6d7608af3e27c30ee14aa3a)), closes [#2682](https://github.com/ng-packagr/ng-packagr/issues/2682)

## [17.0.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/16.2.2...17.0.0-next.0) (2023-08-29)


### Features

* add support for Angular 17 ([cbb06ee](https://github.com/ng-packagr/ng-packagr/commit/cbb06eeffa1ab36cbf9a22ed55a6ddcdcb57a33a))

### [16.2.2](https://github.com/ng-packagr/ng-packagr/compare/16.2.1...16.2.2) (2023-08-29)


### Bug Fixes

* watch mode not emitted transformed DTS files ([a799883](https://github.com/ng-packagr/ng-packagr/commit/a79988399c49691227583d18e62f003e01b25848)), closes [#2664](https://github.com/ng-packagr/ng-packagr/issues/2664)

### [16.2.1](https://github.com/ng-packagr/ng-packagr/compare/16.2.0-next.1...16.2.1) (2023-08-23)


### Bug Fixes

* do not set less math option ([24fa68b](https://github.com/ng-packagr/ng-packagr/commit/24fa68bcf9db6db9a6c0707716c25806418749b3)), closes [#2675](https://github.com/ng-packagr/ng-packagr/issues/2675)

## [16.2.0](https://github.com/ng-packagr/ng-packagr/compare/16.2.0-next.1...16.2.0) (2023-08-09)

## [16.2.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/16.2.0-next.0...16.2.0-next.1) (2023-07-11)


### Bug Fixes

* no provider for `InjectionToken ng.v5.defaultTsConfig` ([6652727](https://github.com/ng-packagr/ng-packagr/commit/665272791aa54057d8583993c48a7b59bf119e1c))

## [16.2.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/16.1.0...16.2.0-next.0) (2023-06-28)


### Features

* add support for Angular 16.2.0 ([3c1072e](https://github.com/ng-packagr/ng-packagr/commit/3c1072e97c163d21e75883a3aa78c922566208ee))

## [16.1.0](https://github.com/ng-packagr/ng-packagr/compare/16.1.0-rc.0...16.1.0) (2023-06-13)


### Features
* support TypeScript 5.1 ([fcc0c6a](https://github.com/ng-packagr/ng-packagr/commit/fcc0c6a8ddba163dcf642d1cb1634ca223fa97b2))
* support incremental TypeScript semantic diagnostics ([d3b9488](https://github.com/ng-packagr/ng-packagr/commit/d3b9488a4a829efc7f640a3497e16ba94308316c))


### Bug Fixes

* allow usages of ECMAScript Decorators ([9abe6a0](https://github.com/ng-packagr/ng-packagr/commit/9abe6a02bf681a67184c923f26330a358f3d48d7)), closes [#2625](https://github.com/ng-packagr/ng-packagr/issues/2625)


### [16.0.1](https://github.com/ng-packagr/ng-packagr/compare/16.0.0...16.0.1) (2023-05-10)


### Bug Fixes

* warn when finding conflicting package export conditions ([b08b075](https://github.com/ng-packagr/ng-packagr/commit/b08b07598ecd675a01f9fd03e9040eb469d52af1)), closes [#2609](https://github.com/ng-packagr/ng-packagr/issues/2609)

## [16.0.0](https://github.com/ng-packagr/ng-packagr/compare/16.0.0-rc.1...16.0.0) (2023-05-03)

### ⚠ BREAKING CHANGES

* TypeScript 4.8 is no longer supported.

* Several changes to the Angular Package Format (APF)
  - Removal of FESM2015
   - Replacing ES2020 with ES2022
  - Replacing FESM2020 with FESM2022

* Node.js v14 support has been removed

    Node.js v14 is planned to be End-of-Life on 2023-04-30. Angular will stop supporting Node.js v14 in Angular v16. Angular v16 will continue to officially support Node.js versions v16 and v18.
* NGCC integration has been removed and as a result Angular View Engine libraries will no longer work.


### Features

* (APF) Angular Package Format updates ([4ae531c](https://github.com/ng-packagr/ng-packagr/commit/4ae531c60c122b41c12b5c57d7db0245ce751a96))
* remove NGCC integration ([d9fdc89](https://github.com/ng-packagr/ng-packagr/commit/d9fdc89ab76179cb6734ab32bb784e7e3278e3cf))

### Bug Fixes

* always set destination directory ([4e89bcf](https://github.com/ng-packagr/ng-packagr/commit/4e89bcfe571c382ad0b47ae50d5d6dab5de6bef7))
* remove Node.js v14 support ([a091d82](https://github.com/ng-packagr/ng-packagr/commit/a091d8255053537b49d4f58b084c274579bbc580))


## [16.0.0-rc.1](https://github.com/ng-packagr/ng-packagr/compare/16.0.0-rc.0...16.0.0-rc.1) (2023-04-18)


### Bug Fixes

* update list of known tailwind configuration files ([50a7114](https://github.com/ng-packagr/ng-packagr/commit/50a7114621d71a637d744b62f40725746130b8f4))

## [16.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/16.0.0-next.2...16.0.0-rc.0) (2023-04-12)

## [16.0.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/16.0.0-next.1...16.0.0-next.2) (2023-03-22)


### ⚠ BREAKING CHANGES

* Several changes to the Angular Package Format (APF)
- Removal of FESM2015
- Replacing ES2020 with ES2022
- Replacing FESM2020 with FESM2022

### Features

* (APF) Angular Package Format updates ([4ae531c](https://github.com/ng-packagr/ng-packagr/commit/4ae531c60c122b41c12b5c57d7db0245ce751a96))

## [16.0.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/16.0.0-next.0...16.0.0-next.1) (2023-03-17)


### ⚠ BREAKING CHANGES

* * TypeScript 4.8 is no longer supported.

### Features

* add support for TypeScript 5 ([1d4cc04](https://github.com/ng-packagr/ng-packagr/commit/1d4cc045c643150c03913df6fc7f5df2f7506792))

## [16.0.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/15.2.0...16.0.0-next.0) (2023-02-22)


### ⚠ BREAKING CHANGES

* Node.js v14 support has been removed

Node.js v14 is planned to be End-of-Life on 2023-04-30. Angular will stop supporting Node.js v14 in Angular v16. Angular v16 will continue to officially support Node.js versions v16 and v18.
* NGCC integration has been removed and as a result Angular View Engine libraries will no longer work.

### Features

* remove NGCC integration ([d9fdc89](https://github.com/ng-packagr/ng-packagr/commit/d9fdc89ab76179cb6734ab32bb784e7e3278e3cf))


### Bug Fixes

* always set destination directory ([4e89bcf](https://github.com/ng-packagr/ng-packagr/commit/4e89bcfe571c382ad0b47ae50d5d6dab5de6bef7))


* remove Node.js v14 support ([a091d82](https://github.com/ng-packagr/ng-packagr/commit/a091d8255053537b49d4f58b084c274579bbc580))

### [15.2.1](https://github.com/ng-packagr/ng-packagr/compare/15.2.0...15.2.1) (2023-02-22)

## [15.2.0](https://github.com/ng-packagr/ng-packagr/compare/15.1.2...15.2.0) (2023-02-22)


### Bug Fixes

* only copy README.md from entry-points ([23c718d](https://github.com/ng-packagr/ng-packagr/commit/23c718d04eea85e015b4c261310b7bd0c39e5311)), closes [#2564](https://github.com/ng-packagr/ng-packagr/issues/2564)

### [15.1.2](https://github.com/ng-packagr/ng-packagr/compare/15.1.1...15.1.2) (2023-02-09)


### Bug Fixes

* remove trailing slash from dest ([426a081](https://github.com/ng-packagr/ng-packagr/commit/426a081abc8e076afc558586da0cf9cf3f65b78e)), closes [#2558](https://github.com/ng-packagr/ng-packagr/issues/2558)
* support of Safari TP versions ([fa80ee0](https://github.com/ng-packagr/ng-packagr/commit/fa80ee02c6ccc0da7a35da94dc8e91d951ac6bb2))
* update browserslist config to include last 2 Chrome versions ([1519c8d](https://github.com/ng-packagr/ng-packagr/commit/1519c8dd9828b192170fd43fa01b42b0c5ad7d4e)), closes [angular/angular#48669](https://github.com/angular/angular/issues/48669)

### [15.1.1](https://github.com/ng-packagr/ng-packagr/compare/15.1.0...15.1.1) (2023-01-12)


### Performance

* create a single stylesheet renderer worker instance ([6718f6e](https://github.com/ng-packagr/ng-packagr/commit/6718f6e892e6a4ac7364408efeee2261020033fd)), closes [#2530](https://github.com/ng-packagr/ng-packagr/issues/2530)

## [15.1.0](https://github.com/ng-packagr/ng-packagr/compare/15.1.0-next.0...15.1.0) (2023-01-11)

### Features

* add support for dynamic import ([7226bb1](https://github.com/ng-packagr/ng-packagr/commit/7226bb101db0e918571f375cd3b0a9a39182ffdc)), closes [#2508](https://github.com/ng-packagr/ng-packagr/issues/2508)


### Performance

* move stylesheet processing into a worker pool ([9eaa398](https://github.com/ng-packagr/ng-packagr/commit/9eaa398b4489457bada33aa7ba2cbd5280b1fe1f))

### Bug Fixes

* include `cssUrl` and `styleIncludePaths` in the CSS cache key ([6bb7a4a](https://github.com/ng-packagr/ng-packagr/commit/6bb7a4a35a9969c9b0619f855ff9c890ed4e2928)), closes [#2523](https://github.com/ng-packagr/ng-packagr/issues/2523)

## [15.1.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/15.0.3...15.1.0-next.0) (2022-12-21)


### Features

* add support for dynamic import ([7226bb1](https://github.com/ng-packagr/ng-packagr/commit/7226bb101db0e918571f375cd3b0a9a39182ffdc)), closes [#2508](https://github.com/ng-packagr/ng-packagr/issues/2508)


### Performance

* move stylesheet processing into a worker pool ([9eaa398](https://github.com/ng-packagr/ng-packagr/commit/9eaa398b4489457bada33aa7ba2cbd5280b1fe1f))

### [15.0.3](https://github.com/ng-packagr/ng-packagr/compare/15.0.2...15.0.3) (2022-12-09)


### Bug Fixes

* add support for prerelease version of Angular ([632217e](https://github.com/ng-packagr/ng-packagr/commit/632217e80832f57032fd164f85e9085fdb6c427d))

### [15.0.2](https://github.com/ng-packagr/ng-packagr/compare/15.0.1...15.0.2) (2022-12-08)


### Performance

* reduce sourcemap loading and decoding ([3089f51](https://github.com/ng-packagr/ng-packagr/commit/3089f514356b2f9aee2d85f52b2ea97576935048)), closes [#2495](https://github.com/ng-packagr/ng-packagr/issues/2495)

### [15.0.1](https://github.com/ng-packagr/ng-packagr/compare/15.0.0...15.0.1) (2022-11-23)


### Bug Fixes

* copy changed file during watch mode when using advanced asset pattern ([0a11ca9](https://github.com/ng-packagr/ng-packagr/commit/0a11ca960cf8de2398bf5098210dd7677365343c)), closes [#2479](https://github.com/ng-packagr/ng-packagr/issues/2479)

## [15.0.0](https://github.com/ng-packagr/ng-packagr/compare/15.0.0-rc.0...15.0.0) (2022-11-16)


### ⚠ BREAKING CHANGES

* ng-packagr no longer supports Node.js versions `14.[15-19].x` and `16.[10-12].x`. Current supported versions of Node.js are `14.20.x`, `16.13.x` and `18.10.x`.
* TypeScript versions older than 4.8.2 are no longer supported.
* Deprecated support for Stylus has been removed. The Stylus package has never reached a stable version and it's usage in the ng-packagr is minimal. It's recommended to migrate to another CSS preprocessor that the ng-packagr supports.

### Features

* add support for tailwindcss ([fdc0707](https://github.com/ng-packagr/ng-packagr/commit/fdc07079cb2f2f947a72176011e02c7fa2a3c2fa)), closes [#1943](https://github.com/ng-packagr/ng-packagr/issues/1943)
* add support for Node.js version 18 ([e70e3a3](https://github.com/ng-packagr/ng-packagr/commit/e70e3a3547cfdb131608d6a015c528ca64bde629))
* drop support for TypeScript 4.6 and 4.7 ([56d9a85](https://github.com/ng-packagr/ng-packagr/commit/56d9a8558cbc4efa17e7e7e965dea046de90dba7))
* switch to sass modern API ([b1ebee3](https://github.com/ng-packagr/ng-packagr/commit/b1ebee34c7c89cb3d91cb49c74b9c013e84da125))

### Bug Fixes

* grammatical update error message ([6d7d2a9](https://github.com/ng-packagr/ng-packagr/commit/6d7d2a97b2c9586bce51a92d3918051be0441460))
* remove support for Stylus ([2f92ab8](https://github.com/ng-packagr/ng-packagr/commit/2f92ab8e6dabc75d6e4f5793b7de6115848bdf6c))
* emit TypeScript declaration diagnostics ([844ea6c](https://github.com/ng-packagr/ng-packagr/commit/844ea6c6c6b414c192aa0e5fcce7adfbfda0e439)), closes [#2405](https://github.com/ng-packagr/ng-packagr/issues/2405)
* exclude scanning node_modules when trying to locate README.md ([b54159b](https://github.com/ng-packagr/ng-packagr/commit/b54159bf5f9d8fcb57126a37fdfa33443c2f58c2)), closes [#2418](https://github.com/ng-packagr/ng-packagr/issues/2418)
* exclude scanning nested node_modules when locating `README.md` ([4e4c00b](https://github.com/ng-packagr/ng-packagr/commit/4e4c00bf67d2dcb932da5404cc36703e49556594)), closes [#2459](https://github.com/ng-packagr/ng-packagr/issues/2459)
* show actionable error when component resource is not found ([5dcba25](https://github.com/ng-packagr/ng-packagr/commit/5dcba25c284b55f407ddd6bdc7db59ce5436bcca))

## [15.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/15.0.0-next.4...15.0.0-rc.0) (2022-10-21)


### Features

* add support for tailwindcss ([fdc0707](https://github.com/ng-packagr/ng-packagr/commit/fdc07079cb2f2f947a72176011e02c7fa2a3c2fa)), closes [#1943](https://github.com/ng-packagr/ng-packagr/issues/1943)

## [15.0.0-next.4](https://github.com/ng-packagr/ng-packagr/compare/15.0.0-next.3...15.0.0-next.4) (2022-10-12)


### ⚠ BREAKING CHANGES

* ng-packagr no longer supports Node.js versions `14.[15-19].x` and `16.[10-12].x`. Current supported versions of Node.js are `14.20.x`, `16.13.x` and `18.10.x`.
* TypeScript versions older than 4.8.2 are no longer supported.

### Features

* add support for Node.js version 18 ([e70e3a3](https://github.com/ng-packagr/ng-packagr/commit/e70e3a3547cfdb131608d6a015c528ca64bde629))
* drop support for TypeScript 4.6 and 4.7 ([56d9a85](https://github.com/ng-packagr/ng-packagr/commit/56d9a8558cbc4efa17e7e7e965dea046de90dba7))

## [15.0.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/15.0.0-next.2...15.0.0-next.3) (2022-09-28)


### ⚠ BREAKING CHANGES

* Deprecated support for Stylus has been removed. The Stylus package has never reached a stable version and it's usage in the ng-packagr is minimal. It's recommended to migrate to another CSS preprocessor that the ng-packagr supports.

### Features

* switch to sass modern API ([b1ebee3](https://github.com/ng-packagr/ng-packagr/commit/b1ebee34c7c89cb3d91cb49c74b9c013e84da125))


### Bug Fixes

* grammatical update error message ([6d7d2a9](https://github.com/ng-packagr/ng-packagr/commit/6d7d2a97b2c9586bce51a92d3918051be0441460))


* remove support for Stylus ([2f92ab8](https://github.com/ng-packagr/ng-packagr/commit/2f92ab8e6dabc75d6e4f5793b7de6115848bdf6c))

## [15.0.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/15.0.0-next.1...15.0.0-next.2) (2022-09-08)

## [15.0.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/15.0.0-next.0...15.0.0-next.1) (2022-09-07)


### Bug Fixes

* emit TypeScript declaration diagnostics ([844ea6c](https://github.com/ng-packagr/ng-packagr/commit/844ea6c6c6b414c192aa0e5fcce7adfbfda0e439)), closes [#2405](https://github.com/ng-packagr/ng-packagr/issues/2405)
* exclude scanning node_modules when trying to locate README.md ([b54159b](https://github.com/ng-packagr/ng-packagr/commit/b54159bf5f9d8fcb57126a37fdfa33443c2f58c2)), closes [#2418](https://github.com/ng-packagr/ng-packagr/issues/2418)

### [14.2.1](https://github.com/ng-packagr/ng-packagr/compare/14.2.0...14.2.1) (2022-09-07)


### Bug Fixes

* emit TypeScript declaration diagnostics ([2176bd9](https://github.com/ng-packagr/ng-packagr/commit/2176bd96b58dfcde17748945e6709f3387e34fba)), closes [#2405](https://github.com/ng-packagr/ng-packagr/issues/2405)
* exclude scanning node_modules when trying to locate README.md ([90b0463](https://github.com/ng-packagr/ng-packagr/commit/90b046330592f184b5744dc89a5791ded00cf23c)), closes [#2418](https://github.com/ng-packagr/ng-packagr/issues/2418)


## [15.0.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/14.3.0...15.0.0-next.0) (2022-08-26)

### Features

* support Angular 15 ([e3eca0a](https://github.com/ng-packagr/ng-packagr/commit/e3eca0ab8b2669eea0cb3fd5c46413ef6a3197d1))

## [14.2.0](https://github.com/ng-packagr/ng-packagr/compare/14.1.0...14.2.0) (2022-08-24)


### Features

* add support for TypeScript 4.8 ([387a4e1](https://github.com/ng-packagr/ng-packagr/commit/387a4e146f7fea2706ca5e9be015dd9fe0ff9817))

## [14.1.0](https://github.com/ng-packagr/ng-packagr/compare/14.1.0-next.0...14.1.0) (2022-07-20)

## [14.1.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/v14.0.4...v14.1.0-next.0) (2022-07-20)

### [14.0.4](https://github.com/ng-packagr/ng-packagr/compare/v14.0.3...v14.0.4) (2022-07-20)


### Bug Fixes

* update watch version on secondary entrypoint changes ([1280320](https://github.com/ng-packagr/ng-packagr/commit/1280320607ca896b3bfec07e8e16e3378303ad0a)), closes [#2069](https://github.com/ng-packagr/ng-packagr/issues/2069)

### [14.0.3](https://github.com/ng-packagr/ng-packagr/compare/v14.0.2...v14.0.3) (2022-07-06)


### Bug Fixes

* address issue were dts were not emitted fully when using entrypoint name as filename ([713d940](https://github.com/ng-packagr/ng-packagr/commit/713d9408f7b9629863bdbe38a426daa453807a16)), closes [#2369](https://github.com/ng-packagr/ng-packagr/issues/2369) [#2360](https://github.com/ng-packagr/ng-packagr/issues/2360)
* do not run ngcc when node_modules does not exist ([97beddc](https://github.com/ng-packagr/ng-packagr/commit/97beddc50000e04faf5a38a7da0fc6e9642fe0c0))

### [14.0.2](https://github.com/ng-packagr/ng-packagr/compare/v14.0.1...v14.0.2) (2022-06-10)
### Bug Fixes

* error when index file is parallel to entry-point but is not configured as such ([ecb55b1](https://github.com/ng-packagr/ng-packagr/commit/ecb55b1d7e55a6e86cd1972ea87a88b52660d2d5))


### [14.0.1](https://github.com/ng-packagr/ng-packagr/compare/v14.0.0...v14.0.1) (2022-06-08)

No visible changes

## [14.0.0](https://github.com/ng-packagr/ng-packagr/compare/v14.0.0-rc.0...v14.0.0) (2022-06-02)

### ⚠ BREAKING CHANGES

* Support for TypeScript 4.4 and 4.5 has been removed. Please update to TypeScript 4.6.
* Support for Node.js v12 has been removed as it will become EOL on 2022-04-30. Please use Node.js v14.15 or later.
* `package.json` is not longer a valid method to configure ng-packagr. Use `ng-package.json` instead.

### Features

* support TypeScript 4.7 ([5574598](https://github.com/ng-packagr/ng-packagr/commit/5574598b8ae44adca3c734a6659e14055169264d))
* remove handling of `package.json` as configuration ([a94bd14](https://github.com/ng-packagr/ng-packagr/commit/a94bd14b90297affadc33548ea6f1289379e5d61)), closes [#2176](https://github.com/ng-packagr/ng-packagr/issues/2176)
* update generated output to APF 14 ([c6f6e4d](https://github.com/ng-packagr/ng-packagr/commit/c6f6e4d701d31e3d9e8636703ede731c3790778b))
* support more complex `assets` configurations ([6776e17](https://github.com/ng-packagr/ng-packagr/commit/6776e17ac41458f4d196f8ea001ab649e5274952)), closes [#1497](https://github.com/ng-packagr/ng-packagr/issues/1497)
* drop support for Node.js 12 ([181ac25](https://github.com/ng-packagr/ng-packagr/commit/181ac25f831e5e56c2eda357f72c2a46ab0abff2))
* support TypeScript 4.6.2 ([9faef17](https://github.com/ng-packagr/ng-packagr/commit/9faef173ce4949c6993d32127c97d35fe0ce3bb5))

### Bug Fixes

* watch mode when using ng-packagr CLI directly ([0f8f92a](https://github.com/ng-packagr/ng-packagr/commit/0f8f92a181ca04e4bf9f26d3200fece0689945d4))
* join paths instead of resolving ([0a54e7d](https://github.com/ng-packagr/ng-packagr/commit/0a54e7d076ce82e1e041df712fbfab569454e026)), closes [#2241](https://github.com/ng-packagr/ng-packagr/issues/2241)
* avoid a recursive export when entryfile is named `index.ts` ([4c96acb](https://github.com/ng-packagr/ng-packagr/commit/4c96acbe21bda356c6fa14ad8470bccfb4d42451))
* ignore circular dependency warnings ([9b93a18](https://github.com/ng-packagr/ng-packagr/commit/9b93a18d8673b6b788e35916518f241e981c302b))
* remove hardcoded `moduleResolution` ([3f5448d](https://github.com/ng-packagr/ng-packagr/commit/3f5448dfce04e11af66fdaae25effc49f139e6ad))
* re-allow `index.ts` as entry-files ([8c5cc4f](https://github.com/ng-packagr/ng-packagr/commit/8c5cc4fff8846bafcd7210c310d9ef0d3f812709))
* invalid browsers version ranges ([547a11f](https://github.com/ng-packagr/ng-packagr/commit/547a11f166e9b6347fee25ea66e3801ee4e11564))


## [14.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/v14.0.0-next.10...v14.0.0-rc.0) (2022-05-12)

## [14.0.0-next.10](https://github.com/ng-packagr/ng-packagr/compare/v14.0.0-next.9...v14.0.0-next.10) (2022-05-09)


### Bug Fixes

* avoid a recursive export when entryfile is named `index.ts` ([4c96acb](https://github.com/ng-packagr/ng-packagr/commit/4c96acbe21bda356c6fa14ad8470bccfb4d42451))

## [14.0.0-next.9](https://github.com/ng-packagr/ng-packagr/compare/v14.0.0-next.8...v14.0.0-next.9) (2022-05-06)


### Bug Fixes

* re-allow `index.ts` as entry-files ([8c5cc4f](https://github.com/ng-packagr/ng-packagr/commit/8c5cc4fff8846bafcd7210c310d9ef0d3f812709))

## [14.0.0-next.8](https://github.com/ng-packagr/ng-packagr/compare/v14.0.0-next.7...v14.0.0-next.8) (2022-05-06)


### Features

* support TypeScript 4.7 ([5574598](https://github.com/ng-packagr/ng-packagr/commit/5574598b8ae44adca3c734a6659e14055169264d))

## [14.0.0-next.7](https://github.com/ng-packagr/ng-packagr/compare/v14.0.0-next.6...v14.0.0-next.7) (2022-05-06)


### ⚠ BREAKING CHANGES

* `package.json` is not longer a valid method to configure ng-packagr. Use `ng-package.json` instead.

### Features

* remove handling of `package.json` as configuration ([a94bd14](https://github.com/ng-packagr/ng-packagr/commit/a94bd14b90297affadc33548ea6f1289379e5d61)), closes [#2176](https://github.com/ng-packagr/ng-packagr/issues/2176)

## [14.0.0-next.6](https://github.com/ng-packagr/ng-packagr/compare/v14.0.0-next.5...v14.0.0-next.6) (2022-05-05)


### ⚠ BREAKING CHANGES

* ~~`entryFile` can no longer be named `index.ts` as it will conflict with the generated `index.d.ts`. Please rename~~

### Features

* update generated output to APF 14 ([c6f6e4d](https://github.com/ng-packagr/ng-packagr/commit/c6f6e4d701d31e3d9e8636703ede731c3790778b))

## [14.0.0-next.5](https://github.com/ng-packagr/ng-packagr/compare/v14.0.0-next.4...v14.0.0-next.5) (2022-04-11)


### Bug Fixes

* watch mode when using ng-packagr CLI directly ([0f8f92a](https://github.com/ng-packagr/ng-packagr/commit/0f8f92a181ca04e4bf9f26d3200fece0689945d4))

## [14.0.0-next.4](https://github.com/ng-packagr/ng-packagr/compare/v14.0.0-next.3...v14.0.0-next.4) (2022-03-28)


### Features

* support more complex `assets` configurations ([6776e17](https://github.com/ng-packagr/ng-packagr/commit/6776e17ac41458f4d196f8ea001ab649e5274952)), closes [#1497](https://github.com/ng-packagr/ng-packagr/issues/1497)


### Bug Fixes

* join paths instead of resolving ([0a54e7d](https://github.com/ng-packagr/ng-packagr/commit/0a54e7d076ce82e1e041df712fbfab569454e026)), closes [#2241](https://github.com/ng-packagr/ng-packagr/issues/2241)

## [14.0.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/v14.0.0-next.2...v14.0.0-next.3) (2022-03-17)

## [14.0.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/v14.0.0-next.1...v14.0.0-next.2) (2022-03-10)


### ⚠ BREAKING CHANGES

* Support for TypeScript 4.4 and 4.5 has been removed. Please update to TypeScript 4.6.
* Support for Node.js v12 has been removed as it will become EOL on 2022-04-30. Please use Node.js v14.15 or later.

### Features

* drop support for Node.js 12 ([181ac25](https://github.com/ng-packagr/ng-packagr/commit/181ac25f831e5e56c2eda357f72c2a46ab0abff2))
* support TypeScript 4.6.2 ([9faef17](https://github.com/ng-packagr/ng-packagr/commit/9faef173ce4949c6993d32127c97d35fe0ce3bb5))

## [14.0.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/v14.0.0-next.0...v14.0.0-next.1) (2022-01-31)


### Bug Fixes

* invalid browsers version ranges ([547a11f](https://github.com/ng-packagr/ng-packagr/commit/547a11f166e9b6347fee25ea66e3801ee4e11564))

## [14.0.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/v13.2.0...v14.0.0-next.0) (2022-01-28)


### Features

* support Angular 14 ([c153c4d](https://github.com/ng-packagr/ng-packagr/commit/c153c4d822bb4441fb7819a8c1d66548f34dfb35))

## [13.2.0](https://github.com/ng-packagr/ng-packagr/compare/v13.1.3...v13.2.0) (2022-01-26)


### Bug Fixes

* link to angular 12 ivy docs ([be4c280](https://github.com/ng-packagr/ng-packagr/commit/be4c280bc1e6da1b8af3631b292444980063de80)), closes [#2228](https://github.com/ng-packagr/ng-packagr/issues/2228)

### [13.1.3](https://github.com/ng-packagr/ng-packagr/compare/v13.1.2...v13.1.3) (2022-01-13)

### Bug Fixes
*  update dependency postcss-preset-env to v7

### [13.1.2](https://github.com/ng-packagr/ng-packagr/compare/v13.1.1...v13.1.2) (2021-12-15)


### Bug Fixes

* close rollup bundle after write ([cf5de76](https://github.com/ng-packagr/ng-packagr/commit/cf5de7642832cc73aeaca70f3a7ea442df0856c9))

### [13.1.1](https://github.com/ng-packagr/ng-packagr/compare/v13.1.0...v13.1.1) (2021-12-08)

## [13.1.0](https://github.com/ng-packagr/ng-packagr/compare/v13.0.8...v13.1.0) (2021-12-08)


### Features

* add support for TypeScript 4.5 ([b4d3f5c](https://github.com/ng-packagr/ng-packagr/commit/b4d3f5c68dbee60806f1e75e2afa85fdcdb487ad))

### [13.0.8](https://github.com/ng-packagr/ng-packagr/compare/v13.0.7...v13.0.8) (2021-11-24)


### Bug Fixes

* correctly append `sourceMappingUrl` when saving FESMs into cache ([657eacd](https://github.com/ng-packagr/ng-packagr/commit/657eacd863aa989f11b8cbb2da2e485a7e42ca11)), closes [#2172](https://github.com/ng-packagr/ng-packagr/issues/2172)

### [13.0.7](https://github.com/ng-packagr/ng-packagr/compare/v13.0.6...v13.0.7) (2021-11-23)


### Bug Fixes

* package exports merging during watch mode ([af36c3a](https://github.com/ng-packagr/ng-packagr/commit/af36c3ac3c7b952923424b798518d27ccac6c132)), closes [#2168](https://github.com/ng-packagr/ng-packagr/issues/2168)

### [13.0.6](https://github.com/ng-packagr/ng-packagr/compare/v13.0.5...v13.0.6) (2021-11-18)
### Bug Fixes
*  Revert "build: update dependency postcss-preset-env to v7", due to licensing issues of `postcss-values-parser`. https://github.com/shellscape/postcss-values-parser/issues/115

### [13.0.5](https://github.com/ng-packagr/ng-packagr/compare/v13.0.4...v13.0.5) (2021-11-17)
### Bug Fixes

* ~~remove `files` property from default tsconfig ([c4cd3a7](https://github.com/ng-packagr/ng-packagr/commit/c4cd3a7bf482e1732d25afeaa76cc9d9c41a6efc)), closes [#2156](https://github.com/ng-packagr/ng-packagr/issues/2156)~~

### [13.0.4](https://github.com/ng-packagr/ng-packagr/compare/v13.0.3...v13.0.4) (2021-11-17)


### Bug Fixes

* `--version` doesn't work ([ba835bb](https://github.com/ng-packagr/ng-packagr/commit/ba835bbfe39725085fdaec4fae7e93d355d68f59)), closes [#2157](https://github.com/ng-packagr/ng-packagr/issues/2157)
* remove `files` property from default tsconfig ([c4cd3a7](https://github.com/ng-packagr/ng-packagr/commit/c4cd3a7bf482e1732d25afeaa76cc9d9c41a6efc)), closes [#2156](https://github.com/ng-packagr/ng-packagr/issues/2156)
* show warning when configuring ng-packagr in `package.json` ([037ccf5](https://github.com/ng-packagr/ng-packagr/commit/037ccf5cf30c1680251199b6affb7ecb0c89ee01))

### [13.0.3](https://github.com/ng-packagr/ng-packagr/compare/v13.0.2...v13.0.3) (2021-11-05)


### Bug Fixes

* handle multiple node_modules when resolving Sass ([c7c51a3](https://github.com/ng-packagr/ng-packagr/commit/c7c51a34b016cbff07441c59e5a18a211ec1d729))

### [13.0.2](https://github.com/ng-packagr/ng-packagr/compare/v13.0.1...v13.0.2) (2021-11-04)


### Bug Fixes

* handle imports of node packages without tilda ([a60ff99](https://github.com/ng-packagr/ng-packagr/commit/a60ff999aeb44449ee7f1fe3b469888a2397469f)), closes [#2142](https://github.com/ng-packagr/ng-packagr/issues/2142)

### [13.0.1](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0...v13.0.1) (2021-11-04)


### Bug Fixes

* unable to add additional conditions to entry-point subpaths controlled by ng-packagr ([a63ebb7](https://github.com/ng-packagr/ng-packagr/commit/a63ebb7b37a9ab0b266056acf40cf4a21dfbc2a0))

## [13.0.0](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0-rc.3...v13.0.0) (2021-11-03)

### ⚠ BREAKING CHANGES

* TypeScript versions prior to 4.4 are no longer supported.
* Compilation of libraries using VIew Engine is no longer supported.
* We no longer generate UMD bundles. The below options which were used for UMD bundle generation has also been removed;
  - `umdModuleIds`
  - `amdId`
  - `umdId`
* Support for `node-sass`  has been removed. sass will be used by default to compile SASS and SCSS files.

### Features

* add package exports for node and es2015 ([bd986f6](https://github.com/ng-packagr/ng-packagr/commit/bd986f6e737239a82b934f4f88b9d648fb496d29))
* add support for package.json exports ([047e3ca](https://github.com/ng-packagr/ng-packagr/commit/047e3cac2beb15d5b62e016e3c0b64f26bba43aa))
* drop support for node-sass ([34d805d](https://github.com/ng-packagr/ng-packagr/commit/34d805d9e96bd05888043010eb874986d7820feb))
* emit Javascript files with `.mjs` extension ([95166f3](https://github.com/ng-packagr/ng-packagr/commit/95166f3917e9674b5fd17d4868df71e497646c7f))
* support TypeScript to 4.4 ([40f7316](https://github.com/ng-packagr/ng-packagr/commit/40f73161a3b5fdefcd672a9b5ce325fcb208c0c4))
* update `tslib`peerDependencies to `^2.3.0` ([12dc21e](https://github.com/ng-packagr/ng-packagr/commit/12dc21e747382aff183e5c678c3aa580fd67608e))
* add package exports for node and es2015 ([bd986f6](https://github.com/ng-packagr/ng-packagr/commit/bd986f6e737239a82b934f4f88b9d648fb496d29))
* add support for package.json exports ([047e3ca](https://github.com/ng-packagr/ng-packagr/commit/047e3cac2beb15d5b62e016e3c0b64f26bba43aa))
* drop support for node-sass ([34d805d](https://github.com/ng-packagr/ng-packagr/commit/34d805d9e96bd05888043010eb874986d7820feb))
* emit Javascript files with `.mjs` extension ([95166f3](https://github.com/ng-packagr/ng-packagr/commit/95166f3917e9674b5fd17d4868df71e497646c7f))
* support Node.js version 16 ([5c8ce22](https://github.com/ng-packagr/ng-packagr/commit/5c8ce225c3a7c4243e3fc0522509a683f5a7535e))
* add esm2020 conditions in APF package exports ([ed79b27](https://github.com/ng-packagr/ng-packagr/commit/ed79b27ff69378fa2796d81626969292c27d1da9))
* add es2020 conditional export ([e5d4296](https://github.com/ng-packagr/ng-packagr/commit/e5d4296f7b755f6805270eb3b6100dcf66003333))
* do not generate UMDs ([cc59146](https://github.com/ng-packagr/ng-packagr/commit/cc5914659973a3c9e6dc04e2c038457923afae82)), closes [#2023](https://github.com/ng-packagr/ng-packagr/issues/2023) [#2000](https://github.com/ng-packagr/ng-packagr/issues/2000) [#1757](https://github.com/ng-packagr/ng-packagr/issues/1757) [#1674](https://github.com/ng-packagr/ng-packagr/issues/1674)
* downlevel es2020 bundle to generate FESM2015 ([6cf2514](https://github.com/ng-packagr/ng-packagr/commit/6cf251460e58dc430416922429d2f2dcb6a48a9c))
* enable Ivy partial compilations by default ([46133d9](https://github.com/ng-packagr/ng-packagr/commit/46133d98630e137764e0daf8a4eddaf98ac159e1)), closes [#1087](https://github.com/ng-packagr/ng-packagr/issues/1087) [#382](https://github.com/ng-packagr/ng-packagr/issues/382) [#285](https://github.com/ng-packagr/ng-packagr/issues/285) [#317](https://github.com/ng-packagr/ng-packagr/issues/317) [#355](https://github.com/ng-packagr/ng-packagr/issues/355) [#656](https://github.com/ng-packagr/ng-packagr/issues/656) [#917](https://github.com/ng-packagr/ng-packagr/issues/917)
* replace es2015 with es2020 ([9e37a56](https://github.com/ng-packagr/ng-packagr/commit/9e37a56a43d1bcd34e9f6264b3cc6f5590c2d1d1))
* support specifying stylesheet language for inline component styles ([61cd015](https://github.com/ng-packagr/ng-packagr/commit/61cd015e174a3e1db0507e63005704a7f49b9952))
* enable providing cache directory and disabling caching via options ([7d6ee38](https://github.com/ng-packagr/ng-packagr/commit/7d6ee382daa5963a1e2e9f14670a657a53e363a5))

### Bug Fixes

* error when a finding a conflicting package export ([bf3a0b9](https://github.com/ng-packagr/ng-packagr/commit/bf3a0b9c729668174e1df1e5de88393f8294a796))
* merge instead of overriding package exports ([f238118](https://github.com/ng-packagr/ng-packagr/commit/f2381189b53bb7b067b95279d76a767908d4be1f))
* improve Safari browserslist to esbuild target conversion ([23b4776](https://github.com/ng-packagr/ng-packagr/commit/23b47761dd60ac83af2a053d866c6ece9ab38330))
* incorrect cache path ([2c0121a](https://github.com/ng-packagr/ng-packagr/commit/2c0121aced903de87c4303735b2654472e12bea4))
* make cache paths safe for windows ([5b58731](https://github.com/ng-packagr/ng-packagr/commit/5b5873188d09af862aa756741b2d0857e1308c7b))
* provide supported browsers to esbuild ([4ed2e08](https://github.com/ng-packagr/ng-packagr/commit/4ed2e089d17ac19b0608012c8e509d643fc6e8ca))
* set browserslist defaults ([8223a47](https://github.com/ng-packagr/ng-packagr/commit/8223a476e816e9548ec945e22e04902712fcab4b)), closes [/github.com/browserslist/browserslist/blob/83764ea81ffaa39111c204b02c371afa44a4ff07/index.js#L516-L522](https://github.com/ng-packagr//github.com/browserslist/browserslist/blob/83764ea81ffaa39111c204b02c371afa44a4ff07/index.js/issues/L516-L522)
* error when a finding a conflicting package export ([bf3a0b9](https://github.com/ng-packagr/ng-packagr/commit/bf3a0b9c729668174e1df1e5de88393f8294a796))
* merge instead of overriding package exports ([f238118](https://github.com/ng-packagr/ng-packagr/commit/f2381189b53bb7b067b95279d76a767908d4be1f))
* report typescript configuration errors ([31b508d](https://github.com/ng-packagr/ng-packagr/commit/31b508d4d8373ec460e0395cb255c7dac2d086bc))
* don't process tslib with ngcc ([925b427](https://github.com/ng-packagr/ng-packagr/commit/925b427fe0a8b39b5fb87d7dfd259455cb5f3248))
* replace `node-sass-tilde-importer` with custom sass importer ([5cf363b](https://github.com/ng-packagr/ng-packagr/commit/5cf363b35fa33a7bf1aa979463b3ea6cb9814ab5)), closes [#2125](https://github.com/ng-packagr/ng-packagr/issues/2125)
* display package versions correctly when using the version command ([141fd65](https://github.com/ng-packagr/ng-packagr/commit/141fd655d7b080a9211596ed2a8110fdc06ba7d5))
* force less version 3.5 math behaviour ([a491faf](https://github.com/ng-packagr/ng-packagr/commit/a491faf0a37ea884f0714396b6e38a950d6a4563)), closes [#2113](https://github.com/ng-packagr/ng-packagr/issues/2113)
* only watch dependent files ([5bf477d](https://github.com/ng-packagr/ng-packagr/commit/5bf477dc1df72b053830aed659c94108027ce25a)), closes [#1829](https://github.com/ng-packagr/ng-packagr/issues/1829) [#2042](https://github.com/ng-packagr/ng-packagr/issues/2042) [#1723](https://github.com/ng-packagr/ng-packagr/issues/1723)
* remove `@rollup/plugin-commonjs` ([0d306a3](https://github.com/ng-packagr/ng-packagr/commit/0d306a309e8d1ce3574f1bc2185b442c60149d4f))
* include `esbuild-check` in the dist package ([eda7f04](https://github.com/ng-packagr/ng-packagr/commit/eda7f04e36cd6ca7451e71806b6a408127ba3ddb))
* support WASM-based esbuild optimizer fallback ([68b5f0b](https://github.com/ng-packagr/ng-packagr/commit/68b5f0b7c1798a7f79a4c3acf1415842b9973bce))
* don't exit with non zero error code on non error compiler diagnostics ([0daa33e](https://github.com/ng-packagr/ng-packagr/commit/0daa33e826795d5b1ecd91f3c67a42996de2b20f))
* normalize NGCC tsconfig path ([3846b40](https://github.com/ng-packagr/ng-packagr/commit/3846b40102b3cd8b48188fa08203961552700523))

### Performance

* only re-generate FESMs when ESM has changed ([2a02a89](https://github.com/ng-packagr/ng-packagr/commit/2a02a896c7a100e1538892fd6ab66974a52af3fe))
* read esm files from memory ([51ba534](https://github.com/ng-packagr/ng-packagr/commit/51ba5346818294e831e70393f41aed09bc8ba18c))
* store fesm generation state on disk ([4565a8b](https://github.com/ng-packagr/ng-packagr/commit/4565a8bd95d61c30e835f97a408f62da28e523ba))

## [13.0.0-rc.3](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0-rc.2...v13.0.0-rc.3) (2021-10-26)


### Bug Fixes

* report typescript configuration errors ([31b508d](https://github.com/ng-packagr/ng-packagr/commit/31b508d4d8373ec460e0395cb255c7dac2d086bc))

## [13.0.0-rc.2](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0-rc.1...v13.0.0-rc.2) (2021-10-21)


### Bug Fixes

* don't process tslib with ngcc ([925b427](https://github.com/ng-packagr/ng-packagr/commit/925b427fe0a8b39b5fb87d7dfd259455cb5f3248))
* replace `node-sass-tilde-importer` with custom sass importer ([5cf363b](https://github.com/ng-packagr/ng-packagr/commit/5cf363b35fa33a7bf1aa979463b3ea6cb9814ab5)), closes [#2125](https://github.com/ng-packagr/ng-packagr/issues/2125)

## [13.0.0-rc.1](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0-rc.0...v13.0.0-rc.1) (2021-10-20)


### Bug Fixes

* display package versions correctly when using the version command ([141fd65](https://github.com/ng-packagr/ng-packagr/commit/141fd655d7b080a9211596ed2a8110fdc06ba7d5))
* force less version 3.5 math behaviour ([a491faf](https://github.com/ng-packagr/ng-packagr/commit/a491faf0a37ea884f0714396b6e38a950d6a4563)), closes [#2113](https://github.com/ng-packagr/ng-packagr/issues/2113)
* only watch dependent files ([5bf477d](https://github.com/ng-packagr/ng-packagr/commit/5bf477dc1df72b053830aed659c94108027ce25a)), closes [#1829](https://github.com/ng-packagr/ng-packagr/issues/1829) [#2042](https://github.com/ng-packagr/ng-packagr/issues/2042) [#1723](https://github.com/ng-packagr/ng-packagr/issues/1723)
* remove `@rollup/plugin-commonjs` ([0d306a3](https://github.com/ng-packagr/ng-packagr/commit/0d306a309e8d1ce3574f1bc2185b442c60149d4f))


### Performance

* only re-generate FESMs when ESM has changed ([2a02a89](https://github.com/ng-packagr/ng-packagr/commit/2a02a896c7a100e1538892fd6ab66974a52af3fe))
* read esm files from memory ([51ba534](https://github.com/ng-packagr/ng-packagr/commit/51ba5346818294e831e70393f41aed09bc8ba18c))
* store fesm generation state on disk ([4565a8b](https://github.com/ng-packagr/ng-packagr/commit/4565a8bd95d61c30e835f97a408f62da28e523ba))

## [13.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0-next.8...v13.0.0-rc.0) (2021-10-14)


### Features

* support Node.js version 16 ([5c8ce22](https://github.com/ng-packagr/ng-packagr/commit/5c8ce225c3a7c4243e3fc0522509a683f5a7535e))

## [13.0.0-next.8](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0-next.7...v13.0.0-next.8) (2021-10-08)


### Features

* add esm2020 conditions in APF package exports ([ed79b27](https://github.com/ng-packagr/ng-packagr/commit/ed79b27ff69378fa2796d81626969292c27d1da9))


### Bug Fixes

* include `esbuild-check` in the dist package ([eda7f04](https://github.com/ng-packagr/ng-packagr/commit/eda7f04e36cd6ca7451e71806b6a408127ba3ddb))

## [13.0.0-next.7](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0-next.6...v13.0.0-next.7) (2021-10-06)


### Features

* add es2020 conditional export ([e5d4296](https://github.com/ng-packagr/ng-packagr/commit/e5d4296f7b755f6805270eb3b6100dcf66003333))


### Bug Fixes

* error when a finding a conflicting package export ([bf3a0b9](https://github.com/ng-packagr/ng-packagr/commit/bf3a0b9c729668174e1df1e5de88393f8294a796))
* merge instead of overriding package exports ([f238118](https://github.com/ng-packagr/ng-packagr/commit/f2381189b53bb7b067b95279d76a767908d4be1f))

## [13.0.0-next.6](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0-next.5...v13.0.0-next.6) (2021-10-04)


### ⚠ BREAKING CHANGES

* Support for `node-sass`  has been removed. sass will be used by default to compile SASS and SCSS files.

### Features

* add package exports for node and es2015 ([bd986f6](https://github.com/ng-packagr/ng-packagr/commit/bd986f6e737239a82b934f4f88b9d648fb496d29))
* add support for package.json exports ([047e3ca](https://github.com/ng-packagr/ng-packagr/commit/047e3cac2beb15d5b62e016e3c0b64f26bba43aa))
* drop support for node-sass ([34d805d](https://github.com/ng-packagr/ng-packagr/commit/34d805d9e96bd05888043010eb874986d7820feb))
* emit Javascript files with `.mjs` extension ([95166f3](https://github.com/ng-packagr/ng-packagr/commit/95166f3917e9674b5fd17d4868df71e497646c7f))

## [13.0.0-next.5](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0-next.4...v13.0.0-next.5) (2021-09-28)


### ⚠ BREAKING CHANGES

* TypeScript versions prior to 4.4 are no longer supported.

### Features

* support TypeScript to 4.4 ([40f7316](https://github.com/ng-packagr/ng-packagr/commit/40f73161a3b5fdefcd672a9b5ce325fcb208c0c4))
* update `tslib`peerDependencies to `^2.3.0` ([12dc21e](https://github.com/ng-packagr/ng-packagr/commit/12dc21e747382aff183e5c678c3aa580fd67608e))


### Bug Fixes

* don't exit with non zero error code on non error compiler diagnostics ([0daa33e](https://github.com/ng-packagr/ng-packagr/commit/0daa33e826795d5b1ecd91f3c67a42996de2b20f))
* normalize NGCC tsconfig path ([3846b40](https://github.com/ng-packagr/ng-packagr/commit/3846b40102b3cd8b48188fa08203961552700523))

## [13.0.0-next.4](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0-next.3...v13.0.0-next.4) (2021-09-27)


### Features

* enable providing cache directory and disabling caching via options ([7d6ee38](https://github.com/ng-packagr/ng-packagr/commit/7d6ee382daa5963a1e2e9f14670a657a53e363a5))

## [13.0.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0-next.2...v13.0.0-next.3) (2021-09-22)


### Bug Fixes

* support WASM-based esbuild optimizer fallback ([68b5f0b](https://github.com/ng-packagr/ng-packagr/commit/68b5f0b7c1798a7f79a4c3acf1415842b9973bce))

## [13.0.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0-next.0...v13.0.0-next.2) (2021-09-08)


### Bug Fixes

* improve Safari browserslist to esbuild target conversion ([23b4776](https://github.com/ng-packagr/ng-packagr/commit/23b47761dd60ac83af2a053d866c6ece9ab38330))

## [13.0.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/v13.0.0-next.0...v13.0.0-next.1) (2021-09-02)


### Bug Fixes

* incorrect cache path ([2c0121a](https://github.com/ng-packagr/ng-packagr/commit/2c0121aced903de87c4303735b2654472e12bea4))

## [13.0.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/v12.2.0...v13.0.0-next.0) (2021-09-02)


### ⚠ BREAKING CHANGES

* Compilation of libraries using VIew Engine is no longer supported.
* We no longer generate UMD bundles. The below options which were used for UMD bundle generation has also been removed;

- `umdModuleIds`
- `amdId`
- `umdId`

### Features

* do not generate UMDs ([cc59146](https://github.com/ng-packagr/ng-packagr/commit/cc5914659973a3c9e6dc04e2c038457923afae82)), closes [#2023](https://github.com/ng-packagr/ng-packagr/issues/2023) [#2000](https://github.com/ng-packagr/ng-packagr/issues/2000) [#1757](https://github.com/ng-packagr/ng-packagr/issues/1757) [#1674](https://github.com/ng-packagr/ng-packagr/issues/1674)
* downlevel es2020 bundle to generate FESM2015 ([6cf2514](https://github.com/ng-packagr/ng-packagr/commit/6cf251460e58dc430416922429d2f2dcb6a48a9c))
* enable Ivy partial compilations by default ([46133d9](https://github.com/ng-packagr/ng-packagr/commit/46133d98630e137764e0daf8a4eddaf98ac159e1)), closes [#1087](https://github.com/ng-packagr/ng-packagr/issues/1087) [#382](https://github.com/ng-packagr/ng-packagr/issues/382) [#285](https://github.com/ng-packagr/ng-packagr/issues/285) [#317](https://github.com/ng-packagr/ng-packagr/issues/317) [#355](https://github.com/ng-packagr/ng-packagr/issues/355) [#656](https://github.com/ng-packagr/ng-packagr/issues/656) [#917](https://github.com/ng-packagr/ng-packagr/issues/917)
* replace es2015 with es2020 ([9e37a56](https://github.com/ng-packagr/ng-packagr/commit/9e37a56a43d1bcd34e9f6264b3cc6f5590c2d1d1))
* support specifying stylesheet language for inline component styles ([61cd015](https://github.com/ng-packagr/ng-packagr/commit/61cd015e174a3e1db0507e63005704a7f49b9952))


### Bug Fixes

* make cache paths safe for windows ([5b58731](https://github.com/ng-packagr/ng-packagr/commit/5b5873188d09af862aa756741b2d0857e1308c7b))
* provide supported browsers to esbuild ([4ed2e08](https://github.com/ng-packagr/ng-packagr/commit/4ed2e089d17ac19b0608012c8e509d643fc6e8ca))
* set browserslist defaults ([8223a47](https://github.com/ng-packagr/ng-packagr/commit/8223a476e816e9548ec945e22e04902712fcab4b)), closes [/github.com/browserslist/browserslist/blob/83764ea81ffaa39111c204b02c371afa44a4ff07/index.js#L516-L522](https://github.com/ng-packagr//github.com/browserslist/browserslist/blob/83764ea81ffaa39111c204b02c371afa44a4ff07/index.js/issues/L516-L522)

## [12.2.0](https://github.com/ng-packagr/ng-packagr/compare/v12.2.0-next.0...v12.2.0) (2021-08-04)

### Performance

* use esbuild as a CSS optimizer for component styles ([ceb81f9](https://github.com/ng-packagr/ng-packagr/commit/ceb81f9a2533369320a1b9890fa02440a73380a9))



## [12.2.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/v12.1.2...v12.2.0-next.0) (2021-07-23)


### Performance

* use esbuild as a CSS optimizer for component styles ([ceb81f9](https://github.com/ng-packagr/ng-packagr/commit/ceb81f9a2533369320a1b9890fa02440a73380a9))

### [12.1.2](https://github.com/ng-packagr/ng-packagr/compare/v12.1.1...v12.1.2) (2021-07-13)


### Bug Fixes

* parse styles cache as JSON ([f778b92](https://github.com/ng-packagr/ng-packagr/commit/f778b92f9562d248a337b5177cdeaa22a8f7ab74))

### [12.1.1](https://github.com/ng-packagr/ng-packagr/compare/v12.1.0...v12.1.1) (2021-07-09)

### Bug Fixes

* avoid non-actionable template type-checker syntax diagnostics ([63598d0](https://github.com/ng-packagr/ng-packagr/commit/63598d0))

## [12.1.0](https://github.com/ng-packagr/ng-packagr/compare/v12.1.0-next.0...v12.1.0) (2021-06-25)


### Features

* add compilation mode in build logs ([4959f8b](https://github.com/ng-packagr/ng-packagr/commit/4959f8b6b9856d5a3939cddb49523a1d74a6d1ff)), closes [#1991](https://github.com/ng-packagr/ng-packagr/issues/1991)
* add support for TypeScript 4.3 ([d6cabcf](https://github.com/ng-packagr/ng-packagr/commit/d6cabcf4f9ca2a320ee7998d2116be68d00b9c49))
* update Ivy compilation pipeline to use faster NGTSC program ([9f17304](https://github.com/ng-packagr/ng-packagr/commit/9f1730467bc6c599306e16c1583b26c305b33e53))

## [12.1.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/v12.0.6...v12.1.0-next.0) (2021-06-22)


### Features

* add support for TypeScript 4.3 ([d6cabcf](https://github.com/ng-packagr/ng-packagr/commit/d6cabcf4f9ca2a320ee7998d2116be68d00b9c49))
* update Ivy compilation pipeline to use faster NGTSC program ([9f17304](https://github.com/ng-packagr/ng-packagr/commit/9f1730467bc6c599306e16c1583b26c305b33e53))


### Bug Fixes

* error shown multiple times in terminal ([22322e8](https://github.com/ng-packagr/ng-packagr/commit/22322e8b3233597831cea8e02ad06a621d5a0b64))

### [12.0.6](https://github.com/ng-packagr/ng-packagr/compare/v12.0.5...v12.0.6) (2021-06-18)


### Bug Fixes

* add version stamping during watch builds ([4e13041](https://github.com/ng-packagr/ng-packagr/commit/4e13041a7cc47918dcecd4dd94f2f57edc0e747c))

### [12.0.5](https://github.com/ng-packagr/ng-packagr/compare/v12.0.4...v12.0.5) (2021-06-09)


### Bug Fixes

* Debug Failure. False expression when using triple slash reference directive ([043c53b](https://github.com/ng-packagr/ng-packagr/commit/043c53b9f811fc4e604b51d5660c061271c2ad03))

### [12.0.4](https://github.com/ng-packagr/ng-packagr/compare/v12.0.3...v12.0.4) (2021-06-09)


### Bug Fixes

* show error message on nested circular dependency ([06e6700](https://github.com/ng-packagr/ng-packagr/commit/06e67004dc9310c67c7f9d36d16165be32779145)), closes [#2001](https://github.com/ng-packagr/ng-packagr/issues/2001)

### [12.0.3](https://github.com/ng-packagr/ng-packagr/compare/v12.0.2...v12.0.3) (2021-06-03)


### Bug Fixes

* update supported range of node versions ([#1996](https://github.com/ng-packagr/ng-packagr/issues/1996)) ([1064bea](https://github.com/ng-packagr/ng-packagr/commit/1064bea620c4650b5c4ad7f87a53f6c4ef7b0259))

### [12.0.2](https://github.com/ng-packagr/ng-packagr/compare/v12.0.1...v12.0.2) (2021-05-25)


### Bug Fixes

* display file stylesheet file path when there is an error ([698de4e](https://github.com/ng-packagr/ng-packagr/commit/698de4e0dc9f917ee147ec115cb36b0c1b7c59bf))

### [12.0.1](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0...v12.0.1) (2021-05-25)


### Bug Fixes

* ignore type definitions when building entry-point dependency graph ([9a7dccb](https://github.com/ng-packagr/ng-packagr/commit/9a7dccb6e9068775a26c79d1ab1e2aee5571012a)), closes [#1982](https://github.com/ng-packagr/ng-packagr/issues/1982)
* log error from stylesheet pre-processor ([077fc65](https://github.com/ng-packagr/ng-packagr/commit/077fc65f20364636db8dca1fb3e9106a887cb7ec)), closes [#1983](https://github.com/ng-packagr/ng-packagr/issues/1983)

## [12.0.0](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-rc.3...v12.0.0) (2021-05-12)

## [12.0.0](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-rc.3...v12.0.0) (2021-05-12)

## [12.0.0-rc.3](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-rc.2...v12.0.0-rc.3) (2021-05-10)


### Bug Fixes

* improve stylesheet caching mechanism ([b4b44c8](https://github.com/ng-packagr/ng-packagr/commit/b4b44c8879e69eba06bd41da180cd6c2414acc0d))

## [12.0.0-rc.2](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-rc.1...v12.0.0-rc.2) (2021-05-06)


### Bug Fixes

* add `built at` and `time` to console output ([50639dc](https://github.com/ng-packagr/ng-packagr/commit/50639dcbb97add89fcda2570aa5a55892a9b0d2c))
* initialize worker options post browserlist setup ([ff90621](https://github.com/ng-packagr/ng-packagr/commit/ff906218cb198b0e4653528fac7df184294b70f4))


### Performance

* cache processed stylesheets ([b791429](https://github.com/ng-packagr/ng-packagr/commit/b7914293dd424b4bc30d4123f3ef6642eabdb1dc))

## [12.0.0-rc.1](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-rc.0...v12.0.0-rc.1) (2021-05-05)


### Bug Fixes

* disable CSS declaration sorting optimizations ([4f06939](https://github.com/ng-packagr/ng-packagr/commit/4f06939bab2d15e84d2737fe91d37605edfc8d6c))


### Performance

* remove double iteration over source files ([5e6afb1](https://github.com/ng-packagr/ng-packagr/commit/5e6afb1011870d8e3c8a15e2e37f82f9e5f4ee31))

## [12.0.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-rc.0...v12.0.0-next.0) (2021-05-05)


### Bug Fixes

* disable CSS declaration sorting optimizations ([4f06939](https://github.com/ng-packagr/ng-packagr/commit/4f06939bab2d15e84d2737fe91d37605edfc8d6c))


### Performance

* remove double iteration over source files ([5e6afb1](https://github.com/ng-packagr/ng-packagr/commit/5e6afb1011870d8e3c8a15e2e37f82f9e5f4ee31))

## [12.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-next.9...v12.0.0-rc.0) (2021-04-22)


### ⚠ BREAKING CHANGES

* Bundling of dependencies has been removed without replacement. In many cases this was used incorrectly which drastically increase in size. This was also mainly used for UMD bundles which will be removed in future.

### Features

* remove bundled dependencies ([6576b9a](https://github.com/ng-packagr/ng-packagr/commit/6576b9a3db69c158409550c1abbf03b484070a08)), closes [#1432](https://github.com/ng-packagr/ng-packagr/issues/1432)


### Bug Fixes

* update rollup to version 2.45.2 ([fcf62fa](https://github.com/ng-packagr/ng-packagr/commit/fcf62faaf0f2f9fc40a93cf15742ece1f7bb6625))
* update sass to version 1.32.10 ([7dec58c](https://github.com/ng-packagr/ng-packagr/commit/7dec58c4cafef1068a9060731e3e060fde878cb8))

## [12.0.0-next.9](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-next.8...v12.0.0-next.9) (2021-04-15)


### ⚠ BREAKING CHANGES

* Minified UMD bundles are no longer generated.

### Bug Fixes

* don't generate minified UMD bundles. ([cf56f3b](https://github.com/ng-packagr/ng-packagr/commit/cf56f3bd3449affb63761530f6b1670a096e5538))
* update cssnano to version 5.0.0 ([1ad8fe6](https://github.com/ng-packagr/ng-packagr/commit/1ad8fe67fca8d7e0bf9211e1383de1f2ae311de1))
* update supported range of node versions ([3800679](https://github.com/ng-packagr/ng-packagr/commit/3800679130d4d860d0b00f35bb1a7337c93c9b4d))

## [12.0.0-next.8](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-next.7...v12.0.0-next.8) (2021-04-06)


### Features

* allow publishing of Ivy library in partial mode. ([c7040e8](https://github.com/ng-packagr/ng-packagr/commit/c7040e88939b8d316dcc55c3ce654abab7cd49cf)), closes [#1901](https://github.com/ng-packagr/ng-packagr/issues/1901)

## [12.0.0-next.7](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-next.6...v12.0.0-next.7) (2021-03-31)


### ⚠ BREAKING CHANGES

* During `watch` mode we no longer generate UMD bundles.

### Features

* speed up incremental mode by not generating UMD ([0af0ce0](https://github.com/ng-packagr/ng-packagr/commit/0af0ce05cf98791f6d0a90e56552cdcd56746238))


### Bug Fixes

* update @rollup/plugin-commonjs to version 18.0.0 ([76f6f43](https://github.com/ng-packagr/ng-packagr/commit/76f6f43d468d0cae576c533e5e9be3a04aa32aa9))
* update ajv to version 8.0.0 ([8d24c20](https://github.com/ng-packagr/ng-packagr/commit/8d24c207bd2485a2196d20ecb22ebd6bb84d78e6))

## [12.0.0-next.6](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-next.5...v12.0.0-next.6) (2021-03-22)


### Bug Fixes

* release main thread on worker error ([eb3138a](https://github.com/ng-packagr/ng-packagr/commit/eb3138a85fd7e6400f1ee9bccc4138b5cdeab0d6))

## [12.0.0-next.5](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-next.4...v12.0.0-next.5) (2021-03-17)


### Features

* support TypeScript 4.2 ([82c173c](https://github.com/ng-packagr/ng-packagr/commit/82c173cd2e0a2f315ee1b7d4b4037e866f1ff768))


### Bug Fixes

* process only the typings files of packages with NGCC ([9122e7f](https://github.com/ng-packagr/ng-packagr/commit/9122e7ffdfec64e7418791f88fbb42a318f8aa4e))

## [12.0.0-next.4](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-next.3...v12.0.0-next.4) (2021-03-04)


### Features

* add support for comments in JSON configuration file ([eb909bc](https://github.com/ng-packagr/ng-packagr/commit/eb909bc57c1b7c7e38726edc0849c1cf612a2ab0)), closes [#1896](https://github.com/ng-packagr/ng-packagr/issues/1896)

## [12.0.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-next.2...v12.0.0-next.3) (2021-02-23)


### Bug Fixes

* deprecate whitelistedNonPeerDependencies in favor of allowedNonPeerDependencies ([e7fc214](https://github.com/ng-packagr/ng-packagr/commit/e7fc2149f190fb131f3d21625c6c9eb253ede84a)), closes [#1884](https://github.com/ng-packagr/ng-packagr/issues/1884)
* removed default value from whitelistedNonPeerDependencies in json schema ([f0d38fc](https://github.com/ng-packagr/ng-packagr/commit/f0d38fc2185d0e9f4120565988b0dd70cda1de5b)), closes [#1892](https://github.com/ng-packagr/ng-packagr/issues/1892)
* replace `i` with checkmark when displaying a built entrypoint ([54b8968](https://github.com/ng-packagr/ng-packagr/commit/54b89684e751ba7b01d6ef4df2d2d4a203076a93)), closes [#1883](https://github.com/ng-packagr/ng-packagr/issues/1883)


### Performance

* reuse stylesheet processor ([2c6bb7d](https://github.com/ng-packagr/ng-packagr/commit/2c6bb7de7920b9f8597a6c4aff22958f796d87e5))

## [12.0.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-next.1...v12.0.0-next.2) (2021-02-18)


### Features

* add `postcss-preset-env` with stage 3 features ([0caf3db](https://github.com/ng-packagr/ng-packagr/commit/0caf3dbc2f88b759ecbca0fd3dbf06184e05388d)), closes [/preset-env.cssdb.org/features#stage-3](https://github.com/ng-packagr//preset-env.cssdb.org/features/issues/stage-3)


### Bug Fixes

* show error when template file is unreadable ([c0ba153](https://github.com/ng-packagr/ng-packagr/commit/c0ba1538f1665b8c5f8285795bf7df18f896f537))

## [12.0.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/v12.0.0-next.0...v12.0.0-next.1) (2021-02-12)


### Features

* add support for Angular version 12 ([5fc70d0](https://github.com/ng-packagr/ng-packagr/commit/5fc70d0e8c7924a1e6687589a2c854b190165a09))


### Bug Fixes

* update @angular/cdk to version ~11.2.0 ([d96dbab](https://github.com/ng-packagr/ng-packagr/commit/d96dbab73594e107ca3ecb9c13c99a82158f4e5e))
* use `path.join` instead of `require.resolve` to resolve worker ([6a9a23d](https://github.com/ng-packagr/ng-packagr/commit/6a9a23d9c4ce7f43656c00a5746b088150b7003f)), closes [#1867](https://github.com/ng-packagr/ng-packagr/issues/1867)


### Performance

* use sync-rcp instead of execFileSync to transform async function to sync functions [#1872](https://github.com/ng-packagr/ng-packagr/issues/1872) ([9ccafb0](https://github.com/ng-packagr/ng-packagr/commit/9ccafb0156e9e9ff4ea1b3b4038f0bbb012eba54))

## [12.0.0-next.0](https://github.com/ng-packagr/ng-packagr/compare/v11.2.0...v12.0.0-next.0) (2021-02-11)


### ⚠ BREAKING CHANGES

* Node.js version 10 will become EOL on 2021-04-30.
Angular CLI 12 will require Node.js 12.13+ or 14.15+. Node.js 12.13 and 14.15 are the first LTS releases for their respective majors.

* update to use Node 12 APIs ([69ec8e2](https://github.com/ng-packagr/ng-packagr/commit/69ec8e2e4ff7466a91ef3ff64c14c2809f8ebb46))

## [11.2.0](https://github.com/ng-packagr/ng-packagr/compare/v11.1.4...v11.2.0) (2021-02-10)

### [11.1.4](https://github.com/ng-packagr/ng-packagr/compare/v11.1.3...v11.1.4) (2021-02-05)


### Bug Fixes

* remove optional dependency on tsickle ([d3e46ce](https://github.com/ng-packagr/ng-packagr/commit/d3e46ce87d599fe5d2bb3ff57a3c3802277c3f35))

### [11.1.3](https://github.com/ng-packagr/ng-packagr/compare/v11.1.2...v11.1.3) (2021-02-02)


### Bug Fixes

* ensure license entry point is properly built ([#1849](https://github.com/ng-packagr/ng-packagr/issues/1849)) ([ed6b15a](https://github.com/ng-packagr/ng-packagr/commit/ed6b15a1d009d5a9597a186417ece37018176c59))

### [11.1.2](https://github.com/ng-packagr/ng-packagr/compare/v11.1.1...v11.1.2) (2021-01-20)

### [11.1.1](https://github.com/ng-packagr/ng-packagr/compare/v11.1.0...v11.1.1) (2021-01-20)


### Bug Fixes

* await async process method ([361e43b](https://github.com/ng-packagr/ng-packagr/commit/361e43ba773021ef1b63525a67011c4e514a8ea8))

## [11.1.0](https://github.com/ng-packagr/ng-packagr/compare/v11.0.3...v11.1.0) (2021-01-20)


### Features

* add NGCC async integration ([232fb21](https://github.com/ng-packagr/ng-packagr/commit/232fb213d572294c5ea94280bd43e432e6d0995c))
* add stylesheet processor DI ([dedb3b3](https://github.com/ng-packagr/ng-packagr/commit/dedb3b3de41c16e85fde6e39626a858bb6d473c1))
* add support for using TypeScript 4.1 ([ffe3ab9](https://github.com/ng-packagr/ng-packagr/commit/ffe3ab935f83155cb7f5d0822902573ce96cdbe5))

### Bug Fixes

* add tsickle as optional peer dependency ([52f3988](https://github.com/ng-packagr/ng-packagr/commit/52f398887abb91db3901088a9f76e3911e88e5c6)), closes [#1801](https://github.com/ng-packagr/ng-packagr/issues/1801)
* changed assets not being copied during watch mode ([8d6664e](https://github.com/ng-packagr/ng-packagr/commit/8d6664e782bab40bfadd555dcdd9ef011b0104d6)), closes [#1826](https://github.com/ng-packagr/ng-packagr/issues/1826)
* set sourceRoot to empty string to correctly resolve dts sources ([94dd2d8](https://github.com/ng-packagr/ng-packagr/commit/94dd2d8881bc06696fbe8e6b67f9f8a8e761fa96))
* termination of process when using CTRL+C ([8f6c46e](https://github.com/ng-packagr/ng-packagr/commit/8f6c46ef4a8d418c37778b687f8f6bbb2d73f876))

### Performance

* only use ensureUnixPath when OS is Windows ([d4ed2b4](https://github.com/ng-packagr/ng-packagr/commit/d4ed2b44d3a7e3264e50c9e6786bb6b0c8197b39))

### [11.0.3](https://github.com/ng-packagr/ng-packagr/compare/v11.0.2...v11.0.3) (2020-11-21)


### Bug Fixes

* correctly resolve sourceRoot ([6673dbc](https://github.com/ng-packagr/ng-packagr/commit/6673dbcc7903ba766f44c44d6fb39967ef0f002e))

### [11.0.2](https://github.com/ng-packagr/ng-packagr/compare/v11.0.1...v11.0.2) (2020-11-12)


### Bug Fixes

* sourcemap should not differ based on build path ([1504c8e](https://github.com/ng-packagr/ng-packagr/commit/1504c8e06a64aee5b3ecc09327af25de5bd58385))
* Revert "fix: update @rollup/plugin-commonjs to version ^16.0.0"

### [11.0.1](https://github.com/ng-packagr/ng-packagr/compare/v11.0.0...v11.0.1) (2020-11-11)

## [11.0.0](https://github.com/ng-packagr/ng-packagr/compare/v11.0.0-rc.0...v11.0.0) (2020-11-11)


### Bug Fixes

* sourcemap should not differ based on build path ([6f946b7](https://github.com/ng-packagr/ng-packagr/commit/6f946b7c91c88fed1d6aa3fa6e06335d5769e86e))

## [11.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/v11.0.0-next.3...v11.0.0-rc.0) (2020-11-05)

## [11.0.0-next.3](https://github.com/ng-packagr/ng-packagr/compare/v11.0.0-next.2...v11.0.0-next.3) (2020-10-29)


### Features

* improve progress reporting ([3a9827f](https://github.com/ng-packagr/ng-packagr/commit/3a9827f6a8f0398a8c2f8e4ead8a02b9a2a13ffd))


### Bug Fixes

* update @rollup/plugin-commonjs to version ^16.0.0 ([75e5d51](https://github.com/ng-packagr/ng-packagr/commit/75e5d51e4260d2c514cb8492f5d53b925d2cef25))
* update @rollup/plugin-node-resolve to version ^10.0.0 ([e76b97b](https://github.com/ng-packagr/ng-packagr/commit/e76b97b0a736fcfdfc7e8d0abd5c317a352cf856))

## [11.0.0-next.2](https://github.com/ng-packagr/ng-packagr/compare/v11.0.0-next.1...v11.0.0-next.2) (2020-10-22)


### ⚠ BREAKING CHANGES

* TypeScript 3.9 is no longer supported, please upgrade to TypeScript 4.0.


## [11.0.0-next.1](https://github.com/ng-packagr/ng-packagr/compare/v11.0.0-next.0...v11.0.0-next.1) (2020-10-14)


### Bug Fixes

* clear analysis cache to detect invalid imports in watch mode ([d6a3920](https://github.com/ng-packagr/ng-packagr/commit/d6a39203bb0fdbe1b5465355261a0c3b0a2c7501))


### Performance

* initialize ajv validator only once ([24f4b83](https://github.com/ng-packagr/ng-packagr/commit/24f4b8382edd5ee12c7c32a621fc15931dcf22ec))
* short-circuit ngcc processing across entry-points ([599b742](https://github.com/ng-packagr/ng-packagr/commit/599b742b45f902e1402d4e9ac046a4223530be6b))
* use set semantics when computing which entry-points to recompile ([f0f52c7](https://github.com/ng-packagr/ng-packagr/commit/f0f52c744c2b9e9b7977c2f11c28686ccb5a3e85))
* use shared module resolution cache across all entry-points ([954ae79](https://github.com/ng-packagr/ng-packagr/commit/954ae797581e80969456c803f5d7467ad5403239))
