# configs

  hacer la cosa de pkgJson ("eslintConfig" y "babel") para leerlos luego?
  o mejor que xeira ya lo haga por defecto? (en teoria ya lo hace)

  esta bien respetar custom configs de ambos, pero por movidas de CJS/MJS
  nos metemos en berenjenales. Porque en ambos tenemos que intentar
  OBVIAR CONFIGURATION FILES y pasar todo por runtime:

    -- eslint: se puede y ya lo hacemos, pero como tira de Babel,
       hay que ver bien como dejar Babel.
       Porque si se sobreescribe la config en babel, corremos el riesgo de
       intentar leer CJS y obtener errores.... se pueden solventar automaticamente????
       O quiza algo del palo: en 'xeira' solo aceptamos JSON ()

       https://babeljs.io/docs/en/babel-core#loadoptions

  Para que funcione MOCHA:
     
    Si PKG.type = 'module'
      El filename debe ser unit.cjs, para que pase por babel
      --require @babel/register, y que el PKG."babel"."extends" apunte al correcto babel.cjs
      --require babel.cjs (donde pasamos las opts a @babel/require), no es necesario PKG."babel"."extends"
    
    Si PKG.type != 'module',
       las anteriores condiciones aplican

    



# Init phase

## add package.json/eslintConfig

it is necessary to make ESLint work in the editor

## add package.json/babel?

Not needed for Xeira, but probably needed by other tools like dev servers and so

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
