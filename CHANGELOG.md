
# Changelog

## 2.0.0

· Finally moved to _ESLint_ 9. `eslintConfig` in `package.json` is not supported anymore.
· Simplified _ESLint_ and _Babel_ configs.
· `React` _^19.1.1_. as peer dependency.

## 1.3.1

· `tailwindcss` support

## 1.2.3

· `usesReact` also if `miolo` is in deps (hacky patch)

## 1.2.2

· `bundle_extension` fix

## 1.2.1

· `bundle_extension` can be a comma-separated list

## 1.1.9

· Upgrade deps, including `arredemo` which was forced back to `react``18`.

## 1.1.8

· Ignoring some warning when bundling
· Patch on `@rollup/plugin-commonjs` for cache using
  (error on `react-router-dom/server`)


## 1.1.7

· Use cache when in `watch` mode

## 1.1.6

· Remove `dynamicRequireTargets=true` when bundling `cjs`
· Upgrade deps

## 1.1.5

· ESM - Node and/or browser

## 1.1.4

· Allow to bundle also `bundle.mjs` when for _Node_

## 1.1.2

· `dynamicRequireTargets=true` when bundling `cjs`

## 1.1.1

· Allow to bundle also `bundle.cjs` when for _Node_

## 1.0.1

· Improved banner on built files' top

## 1.0.0

### Features

· `React` _^18.3.1_. as peer dependency to avoid collissions on tests

### `scss` build

· Removed Dart Sass `legacy-js-api` warnings.

## 1.0.0-beta.2

### Tests

· RTL seems to always expect JSDOM

## 1.0.0-beta.2

### Tests

· Extended testing capabilities

## 1.0.0-beta.1

### Features

· Upgraded dependencies.

### Tests

· Removed `Enzyme`, now using `React Testing Library`.
· `React` version (on tests) is now _^18.3.1_.
