![xeira logo](https://xeira.afialapis.com/logo.png)

[![NPM Version](https://badge.fury.io/js/xeira.svg)](https://www.npmjs.com/package/xeira)
[![NPM Downloads](https://img.shields.io/npm/dm/xeira.svg?style=flat)](https://www.npmjs.com/package/xeira)

> One web-dev-stack command to rule them all

`xeira` aims to group all the Web Dev stack processes you need from a single, zero config command.
Under the hoods, it calls well known, community-trusted tools:

- linting trough [ESLint](https://github.com/eslint/eslint)
- transpiling with [Babel](https://github.com/babel/babel)
- minifying with [Uglify](https://github.com/mishoo/UglifyJS)
- bundling with [Rollup](https://github.com/rollup/rollup)
- serving dev servers both with [Rollup](https://github.com/rollup/rollup) or [Nollup](https://github.com/PepsRyuu/nollup)
- testing with [Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai)
- building static site for your package trough [arredemo](https://github.com/afialapis/arredemo)

It supports [working with monorepos](#working-with-monorepos).

Future versions will try to add more tools (so, for example, letting you to pick your
preferred bundler). It's also very opinionated, using pretty standard configurations.


# Install

```
  npm i -D xeira
```

# API

`xeira` usage is always like:

```
  npx xeira <command> [...options] [...config] [--filter]
```

`xeira` commands will provide some particular `[...options]` depending on each case. 

`[...config]`: you can also pass any value from [`xeira`'s config](#configuration) as parameter,
taking priority over `xeira.json` file (if any).

`--filter`: [working with monorepos?](#working-with-monorepos)

## help

In case of doubts, `--help` is always there for you:

```
  npx xeira --help
  npx xeira <command> --help
```

## init

This one-shot command will guide you in the creation of `xeira`'s 
[config file (`xeira.json`)](#configuration).

```
  npx xeira init [--force] [config] [--filter]
```

If `--force=true`, you will be asked about values even if they already exist on your `xeira.json`.

This command will also update some values of your `package.json` file (just... trust `xeira`!).


## lint

```
  npx xeira lint [--folder=./] [config] [--filter]
```


## transpile

```
  npx xeira transpile [--source_folder=./src] [config] [--filter]
```


## bundle

```
  npx xeira bundle [--name] [config] [--filter]
```


## test

```
  npx xeira test [--files] [config] [--filter] [mocha_params]
```

As `[mocha_params]`, you can specify any param to be passed directly to Mocha.

[Check info here](https://mochajs.org/#command-line-usage).


## demo

```
  npx xeira demo [--init [--force]] [config] [--filter]
```


## version

```
  npx xeira version [--type | --number] [config] [--filter]
```


## static site

```
  npx xeira site [config] [--filter]
```


# Configuration

Alongside your `package.json`, in your main folder, `xeira.json` will store your `xeira`' configuration.

This file may be automatically generated by running [`init` command](#init).

Notice this `xeira.json` is not mandatory. You can specify `[options]` when running any `xeira` command. 
For example, you could do the next, and `xeira` will just work as expected:

```
  npx xeira bundle --source_index=./src/index.mjs --bundle_folder=./dist --verbose=true
```

Existence of a `xeira.json` may be a good idea, though:

- more explicit (and transparent) usage of `xeira`
- simpler `npm run` scripts!

## `product`

Can be `package` (default) or `app`. It determines how bundle files are made (and which ones).

## `target`

Can be `node` (default), `browser` or `both`. It determines how bundle files are made (and which ones).

## `source_index`

Entry point to your source code. Default value is `./src/index.js`.

## `linter`

Which tool to use for linting your code. Default is `eslint`. 

## `transpile_folder`

Destination folder for your transpiled code. Default is `./lib`.

## `transpiler`

Tool in charge of transpiling. Default is `babel`.

## `minifier`

Tool in charge of minifying transpiled code and bundled files. Default is `uglify`.

If you wanna disable it for transpiling, just specify `null`.

## `bundle_folder`

Destination folder for bundle files. Default is `./dist`.

## `bundle_inline_dynamic_imports`

Sets the `rollup`'s [`inlineDynamicImports`](https://rollupjs.org/configuration-options/#output-inlinedynamicimports) option. `true` by default.

If `false`, each bundle will consist on several files (`xeira` will create subdirectories, 
like `./dist/cjs`, `./dist/mjs`...).

`umd` and `iife` bundles cannot be split. So, if your `target` is `browser`, this option will be ignored.

## `bundler`

Tool in charge of source code bundling. Default is `rollup`.

## `test_folder`

Folder where your test files are at. Default is `./test`.

## `demo_mode`

Mode for `demo --init` command. Default is `auto`.

## `demo_demoer`

Tool in charge of bundling, serving and watching your demo app. Possible values 
are `rollup` (default) or `nollup`.

## `verbose`

If `true`, `xeira` will just print more logs in the console output. Default is `false`. 


# Working with monorepos

When working with monorepos, you may `--filter` folders to apply the command on.

When using this option, by default, `packages` folder is inspected. So, for example:

```
  npx xeira lint --filter=react-*
```

will filter all the `./packages/react-*` folders.

If you want to search on another folder, just specify it with a relative path. So:

```
  npx xeira lint --filter=./custom_folder/react-*
```

will filter all the `./custom_folder/react-*` folders.


# Others

## Define aliases just once

You may have find yourself having to duplicate your aliases configuration:

- first on bundler files
- then on your editor's config 

With `xeira`, just do it once. Define your aliases just for your editor. 
In your root folder, file `jsconfig.json`:

```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "*": ["src/*"],
        "test/*": ["test/*"],
        "underscore": ["lodash"]
      }
    }
  }
```

And `xeira` will use them both for transpiling and bundling.

