ng-packagr in 2026 and beyond
=============================

> "Invert, always invert."
> &mdash; Charles Munger.
>

`ng-packagr` was created in 2017 out of neccesity and some may say, out of desperation.
It has served its purpose for 9+ years.

Back in that day, competing build systems existed: Webpack, Bazel, Rollup.
The ECMAScript module format was fragmented: CommonJS, ESM, flattened ESM, sometimes in different language levels from ES2015 to ES2022.
In 2026, `esbuild` has become the de-facto standard,
now being used by Angular CLI for application builds.

Looking at `ng-packagr` through the eyes of today's world, one may ask:
is it still doing great?


## Requirements

To iterate the legacy architecture of `ng-packagr`,
this proposal aims to keep feature-parity with the current implementation
and converge the infrastructure of the Angular Application Builder and the Angular Library Builder towards a build engine powered by `esbuild`.

Here is the requirement analysis to migrate `ng-packagr` to a `esbuild`-native build system.

### Functional Requirements (Ecosystem Commitments)

The proposed native `esbuild` engine meets all criteria mandated by Angular Package Format (APF):

- 🎁 __APF Compliance & NPM Readiness__:
  Bundles libraries strictly according to APF specifications, producing artifacts ready for immediate publishing to the npm registry (supporting both scoped and non-scoped packages 🔎).
  - 🏁 __FESM2022 Compilation__:
    Emits flat ESM modules matching the modern ECMAScript target requirements of the ecosystem.
  - 🎒 __Angular CLI Compatibility__:
    Guarantees that the resulting npm packages resolve seamlessly inside standard Angular CLI application builds.
  - 💃 __Rich Developer Tooling (`.d.ts`)__:
    Generates a flattened, self-contained declaration index (`.d.ts`) alongside localized typings to ensure optimal IntelliSense and type checking inside IDEs (VS Code, WebStorm).
 - 🏄 __Component Asset Inlining__:
   Natively processes and inlines external HTML templates and components' component-level metadata.
 - ✨ __Advanced Stylesheet Processing__:
   - 🐫 Executes the SCSS preprocessor, respecting custom include paths from monorepo structures.
   - 🐒 Runs post-processing pipelines (PostCSS) to automatically embed vendor-specific CSS prefixes.
   - 🐯 Embeds static asset data where required by the component metadata.
 
In summary, don't break the functional core of legacy `ng-packagr`.
You may have heard that _"don't be evil"_ story before.
Here, we go again.

### Non-Functional Requirements (The Innovation Core)
 
While maintaining 100% feature-parity with the functional criteria,
this rewrite optimizes the pipeline for large-scale library projects:
 
 - ⚡ __Watch Velocity (Developer Experience)__:
   Reduces the latency of incremental library compilation in local development mode. By maintaining an in-memory graph, code changes bypass the declaration phase entirely, enabling near-instant application hot-reloads in large-scale monorepos.
 - 🧠 __I/O Resiliency (Minimal Resource Footprint)__:
   Significantly shrinks CI/CD pipeline runtimes by prioritizing volatile in-memory AST transformations over heavy, sequential disk-bound read/write cycles.
 - 🎯 __Tooling Homogeneity (Ecosystem Convergence)__:
   Standardizes the Angular build ecosystem. By natively utilizing `esbuild` for both applications (`@angular-devkit/build-angular`) and libraries, the Angular team will be enabled to deprecate disparate, parallel build layers (such as Rolldown/Rollup fragments), unifying the codebase and lowering long-term maintenance overhead.

In summary, the `esbuild`-native rewrite aims to be benefitial to Angular library developers,
to organizations running CI/CD pipelines for large-scale Angular component libraries,
and to the Angular Core & CLI maintainers.

It's a _"win-win-win"_ proposition:
the developers win.
The Angular team wins.
And the `ng-packagr` maintainers win.


## Next Steps

Sounds good?

How to get there?
