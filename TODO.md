# TO DO

## `aliases`

 Check also `package.json`'s field `exports`!


## `transpile` command

Ensure "resolve"-like plugins are working. Ensure that `transpile_folder` having a different folder arch than source folder is working.

Example:

```js
import X  from 'some/diff/level/folder/X.mjs' // source
import X  from 'some/diff/level/folder/X.cjs' // wrong
import X  from 'right/level/folder/X.cjs' // ok
```

## `run` command

- use `@babel/register` when needed (if `type: commonjs` and/or if using `React`)
- if `--watch`, use `nodemon`
- notice `@babel/register` does not work for ESM

## `bundle` command

- `output.globals` as a parameter

- cases where we want to build a webapp (target only .iife, use watch)
  (VERY similar to /demo)

- bundle just `CSS` (`formiga-reactstrap`)
  Maybe if `--from`  is `.css` or `.scss`.
  We would need just to: `npx sass [from] [to]` or use it programmatically: https://sass-lang.com/documentation/js-api/
 

# TO SOLVE

## tests

### Use Mocha programmatically

  · so we can use: getBabelConfig()

  · info:

  https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically
  https://github.com/mochajs/mocha-examples/blob/master/packages/programmatic-usage/tests/run_mocha.js
  https://blog.testdouble.com/posts/2021-10-29-testing-esm-with-mocha-and-testdouble/

  · but this errors persists:
    
    We transpile code in /test/**. But dependencies in there (like 
    ```import X from '../src/index.mjs``` are not

### Even on command-base solution

  · use: getBabelConfig()


### t-c-test-esm-react
 
Even working with "type: module", when testing we get the error:

```
Error [ERR_REQUIRE_ESM]: 
  require() of ES Module .../t-c-test-esm-react/src/index.js 
     from .../t-c-test-esm-react/test/esm_pkg.cjs 
     not supported.
```

It is solved if /src uses .cjs extension


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
`contextObj.getMainFile` acts accordingly.
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


