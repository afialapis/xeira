![xeira logo](https://xeira.afialapis.com/logo.png)

[![NPM Version](https://badge.fury.io/js/xeira.svg)](https://www.npmjs.com/package/xeira)
[![NPM Downloads](https://img.shields.io/npm/dm/xeira.svg?style=flat)](https://www.npmjs.com/package/xeira)

> One web-dev-stack command to rule them all

`xeira` aims to group all the Web Dev stack processes you need from a single, zero config, command.
Under the hoods, it calls well known, community trusted tools:

- linting trough [ESLint](https://github.com/eslint/eslint)
- transpiling with [Babel](https://github.com/babel/babel)
- bundling with [Rollup](https://github.com/rollup/rollup)
- serving dev servers both with [Rollup](https://github.com/rollup/rollup) or [Nollup](https://github.com/PepsRyuu/nollup)
- testing with [Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai)
- building static site for your package trough [arredemo](https://github.com/afialapis/arredemo)

Future versions will try to add more tools (so, for example, letting you to pick your
preferred bundler). It's also very opinionated, using pretty standard configurations.


# Install

```
  npm i -D xeira
```

# API

`xeira` usage is always like:

```
  npx xeira <command> [options] [config]
```

`xeira` commands will provide some particular `[options]` depending on each case. 

`[config]`: you can also pass any value from [`xeira`'s config](#configuration) as parameter,
taking priority over `xeira.json` file (if any).

In case of doubts, `--help` is always there for you:

```
  npx xeira --help
  npx xeira <command> --help
```


## init

This one-shot command will guide you in the creation of `xeira`'s 
config file: `xeira.json`.

```
  npx xeira init [force] [options]
```


## lint

```
  npx xeira lint [folder (default= ./src) ]
```


## transpile

```
  npx xeira transpile [source_folder (default= ./src) dest_folder (default= ./lib)]
```


## bundle

```
  npx xeira bundle [source_index (default= ./src/index.js) dest_folder (default= ./dist)]
```


## test

```
  npx xeira test [folder (default= ./test) ]
```


## demo

```
  npx xeira demo [init [force]]
```


## version

```
  npx xeira version patch|minor|major|0.1.2 [-filter <pattern>]
```


## static site

```
  npx xeira site
```


## help

```
  npx xeira help
```

# Configuration

## `xeira.json` options



# Others

## Aliases supported

Define your aliases just for your editor. In your root folder, file `jsconfig.json`:

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

