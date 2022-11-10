# TO SOLVE

# tests

## t-test-esm-react
 
Even working with "type: module", when testing we get the error:

```
Error [ERR_REQUIRE_ESM]: 
  require() of ES Module .../t-test-esm-react/src/index.js 
     from .../t-test-esm-react/test/esm_pkg.cjs 
     not supported.
```

It is solved if /src uses .cjs extension


### Use Mocha programmatically

  so we can do things like passing the good BABEL config

  https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically
  https://github.com/mochajs/mocha-examples/blob/master/packages/programmatic-usage/tests/run_mocha.js

  https://blog.testdouble.com/posts/2021-10-29-testing-esm-with-mocha-and-testdouble/

  => pero mantenemos el error inicial. Parseamos a CJS el /test/***, pero desde alli se
    hace require() de contenido en /src que esta en MJS.

### Para que funcione MOCHA:
     
    Si PKG.type = 'module'
      El filename debe ser unit.cjs, para que pase por babel
      --require @babel/register, y que el PKG."babel"."extends" apunte al correcto babel.cjs
      --require babel.cjs (donde pasamos las opts a @babel/require), no es necesario PKG."babel"."extends"
    
    Si PKG.type != 'module',
       las anteriores condiciones aplican




## demo

Current demoers work with some limitations:
· Rollup: Ok. Both using externals or not.
· Nollup: Error using externals (ReactSharedInternals bug).
          `index.html` must be touched.
          Check `test-nollup-with-externals-and-react` repo,
            which should help to solve this and remove the limitation.

# use better fields in xeira.json


# TO BE BETTER TESTED

## Transpile to CJS

Added param `forceExtension= 'cjs'` on `transpileWithBabel`.
This will make every `/lib` content to be in CommonCjs, and so compatible
with `packageJson.main` and `packageJson.imports.default`.
`xeiraConfigObj.getMainFile` acts accordingly.
BUT is poor.


## Configs: eslint / babel

  Ver como funcionaria en entornos donde se especifiquen ficheros de configuración propios.
  Sobretodo, en lo relativo a CJS / MJS. 

  -- ESLint no soporta MJS, no debería haber problemas por ahí.
  -- Babel soporta MJS solo de forma asíncrona, es decir que ojo cuidado

# TO IMPROVE


# CSS

What about bundling CSS
  - Package NO? Hmmm
  - APP Yes

  - Use injected CSS on <head> (default behavior, inside bundled .js)

# Init phase

## add nice scripts entries?

Like:

```
  "bundle": "npx xeira bundle",
```

`npm run bundle` is equally shorter as `npx xeira bundle`, but maybe easier to remember, more standard.




# TO EXTEND

## some command helper to change xeira configs?

Like:

```
npx xeira config
```

And then prompts do some helpful actions

## Docs?

Or leave it for docaine?

