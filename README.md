# xeira

> One web-dev-stack command to rule them all

`xeira` aims to group all the Web Dev stack processes you need from a single, zero config, command.
Under the hoods, it calls well know, community trusted tools:

  · linting trough [ESLint](https://github.com/eslint/eslint)
  - transpiling with [Babel](https://github.com/babel/babel)
  - bundling with [Rollup](https://github.com/rollup/rollup)
  - serving dev servers both with [Rollup](https://github.com/rollup/rollup) or [Nollup](https://github.com/PepsRyuu/nollup)
  - testing with [Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai)

Future versions will try to add more tools (so, for example, letting you to pick your
preferred bundler). It's also very opinionated, using pretty standard configurations.


# Install

```
  npm i -D xeira
```

# API


## init

This one-shot command will guide you in the creation of `xeira`'s 
config file: `xeira.json`.

```
  npx xeira init
```


## lint

```
  npx xeira lint [folder (default= ./) ]
```


## transpile

```
  npx xeira transpile [source_folder (default= ./src) dest_folder (default= ./lib)]
```


## bundle

```
  npx xeira bundle
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


## help

```
  npx xeira help
```

