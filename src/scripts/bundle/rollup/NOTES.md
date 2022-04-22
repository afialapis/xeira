Some notes about the bundling process.

# ESM vs CJS

When the compiling target is in CJS, we used to got an error like this:

```
  Error: 'default' is not exported by node_modules/farrapa-collections/dist/farrapa-collections.mjs, imported by farrapa-collections?commonjs-external
```

These options will fix that:

```js
  commonjs({
    esmExternals: true
  }),
```

· If our package is CJS, rollup will happily compile it
· If our package is ESM, this options seems not to affect!

NOTE: this fixes error with farrapa-collections, but seems like it could affect
in an unwanted manner for other dependencies. Let's pay attention.


We could play with:
```js
  commonjs({
    requireReturnsDefault: 'namespace' // 'auto' | false | 'preferred'
                                       // each value produces slightly different outputs
  })
```

But seems the default `false` is good enough.


# Export conditions

This:

```js
  nodeResolve({
    exportConditions: ['node'],
  }),
```

seems the only way to support things like that:

_farrapa-collections/package.json_
```json
  "exports": {
    ".": [
      {
        "import": "./dist/farrapa-collections.mjs",
        "require": "./dist/farrapa-collections.cjs",
        "default": "./dist/farrapa-collections.cjs"
      },
      "./dist/farrapa-collections.cjs"
    ]
  },

```

# Babel helpers

To be better studied.

https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers

https://github.com/rollup/plugins/tree/master/packages/babel#injected-helpers

We want something like:

```js
  babelHelpers: 
    xeiraConfig.isAnApp()
    ? 'bundled'
    : 'runtime
```

