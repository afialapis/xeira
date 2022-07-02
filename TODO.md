# Problems

· t-bundle-esm-react not working
· how do we decide to put type: module on package.json?


# configs

## eslint / babel

  Ver como funcionaria en entornos donde se especifiquen ficheros de configuración propios.
  Sobretodo, en lo relativo a CJS / MJS. 

  -- ESLint no soporta MJS, no debería haber problemas por ahí.
  -- Babel soporta MJS solo de forma asíncrona, es decir que ojo cuidado


## mocha

### Use it programatically

  so we can do things like passing the good BABEL config

### Para que funcione MOCHA:
     
    Si PKG.type = 'module'
      El filename debe ser unit.cjs, para que pase por babel
      --require @babel/register, y que el PKG."babel"."extends" apunte al correcto babel.cjs
      --require babel.cjs (donde pasamos las opts a @babel/require), no es necesario PKG."babel"."extends"
    
    Si PKG.type != 'module',
       las anteriores condiciones aplican

    



# Init phase

## add nice scripts entries?

Like:

```
  "bundle": "npx xeira bundle",
```

`npm run bundle` is equally shorter as `npx xeira bundle`, but maybe easier to remember, more standard.

# Other commands


## Docs?

Or leave it for docaine?


## Dev Server?

https://github.com/PepsRyuu/nollup







https://github.com/remix-run/react-router/blob/main/rollup.config.js
