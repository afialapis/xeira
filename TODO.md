# Problems

## t-test-esm-react
 
Even working with "type: module", when testing we get the error:

```
Error [ERR_REQUIRE_ESM]: 
  require() of ES Module .../t-test-esm-react/src/index.js 
     from .../t-test-esm-react/test/esm_pkg.cjs 
     not supported.
```

It is solved if /src uses .mjs extension

# demo

Waiting for this fix on Nollup:
https://github.com/PepsRyuu/nollup/issues/239

State clearly that:
· Rollup: no externals
· Nollup: using externals, so index.html must be touched.


# Configs

## eslint / babel

  Ver como funcionaria en entornos donde se especifiquen ficheros de configuración propios.
  Sobretodo, en lo relativo a CJS / MJS. 

  -- ESLint no soporta MJS, no debería haber problemas por ahí.
  -- Babel soporta MJS solo de forma asíncrona, es decir que ojo cuidado


## Mocha

### Use it programmatically

  so we can do things like passing the good BABEL config

### Para que funcione MOCHA:
     
    Si PKG.type = 'module'
      El filename debe ser unit.cjs, para que pase por babel
      --require @babel/register, y que el PKG."babel"."extends" apunte al correcto babel.cjs
      --require babel.cjs (donde pasamos las opts a @babel/require), no es necesario PKG."babel"."extends"
    
    Si PKG.type != 'module',
       las anteriores condiciones aplican




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

## some command helper to change xeira configs?

Like:

```
npx xeira config
```

And then prompts do some helpful actions


# Other commands


## Docs?

Or leave it for docaine?

