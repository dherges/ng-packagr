ng-packagr in 2026 and beyond
=============================

> "Invert, always invert."
> &mdash; Charles Munger.
>

A re-design of `ng-packagr` to improve developer experience,
reduce build times for large-scale library projects,
and converge the codebase of the Angular Application Builder and Angular Library Builder.


## Context: Why a Re-Design?

`ng-packagr` was created in 2017 out of neccesity and in some way out of desperation.
It has served its purpose for 9+ years.

Back in that day, competing build systems existed: Webpack, Bazel, Rollup.
The ECMAScript module format was fragmented: CommonJS, ESM, flattened ESM,
sometimes in different language levels starting from ES5 right through to ES2022.

In 2026, [`esbuild`](https://github.com/evanw/esbuild) has become the de-facto standard &mdash;
the Angular CLI implements application builds on top of an `esbuild` tool stack.
At the same time, [TypeScript](https://github.com/microsoft/typescript) is doing a native rewrite in Golang and
the bundler [`rolldown`](https://github.com/rolldown/rolldown) is written in Rust to optimize speed for large-scale projects.

Looking at `ng-packagr` through the eyes of today's world, one has to ask:
is it still doing great?


## Scope (Requirements)

To iterate the legacy architecture of `ng-packagr`,
this document proposes a port of the current implementation towards a native `esbuild` build engine for libraries.
If accepted and implemented,
the Angular Application Builder and Angular Library Builder will eventually converge on `esbuild` as the common denominator.

Here is the requirement analysis to port `ng-packagr` to a `esbuild`-native build system,
while keeping feature-parity with the current implementation.

### Functional Requirements (Ecosystem Commitments)

The proposed native `esbuild` engine meets all requirements mandated by Angular Package Format (APF):

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

In short: don't break the functional core of legacy `ng-packagr`.
Port the existing functionality _as-is_.

### Non-Functional Requirements (The Innovation Core)
 
While maintaining 100% feature-parity with the functionality,
this rewrite optimizes the library build pipeline for large-scale library codebases:
 
 - ⚡ __Watch Velocity (Developer Experience)__:
   Reduces the latency of incremental library compilation in local development mode. By maintaining an in-memory graph, code changes bypass the declaration phase entirely, enabling near-instant application hot-reloads in large-scale monorepos.
 - 🧠 __I/O Resiliency (Minimal Resource Footprint)__:
   Significantly shrinks CI/CD pipeline runtimes by prioritizing volatile in-memory AST transformations over heavy, sequential disk-bound read/write cycles.
 - 🎯 __Tooling Homogeneity (Ecosystem Convergence)__:
   Standardizes the Angular build ecosystem. By natively utilizing `esbuild` for both applications (`@angular-devkit/build-angular`) and libraries, the Angular team will be enabled to deprecate disparate, parallel build layers (such as Rolldown/Rollup fragments), unifying the codebase and lowering long-term maintenance overhead.


## Goals (Expected Value)

In summary, the `esbuild`-native rewrite aims to be bring value to 3 different groups of people:

1. For Angular library developers: improved developer experience through faster builds.
2. For organizations running large-scale Angular component libraries: reduced CI/CD costs by optimized pipeline cycle times.
3. For Angular Core & CLI maintainers: reduced complexity and fewer mental load through one codebase for application and library builds.


## Next Steps

It's a _"win-win-win"_ proposition:
the developers win.
The Angular team wins.
And the `ng-packagr` maintainers win.

Sounds good?

How to get there?
