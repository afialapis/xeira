si :
-- src/index.mjs
   - el bundle de farrapa? funciona sin necesidad de configurar commonjs/node-resolve/etc.

-- src/index.cjs
  - entonces tenemos el error
    Error: 'default' is not exported by node_modules/farrapa-collections/dist/farrapa-collections.mjs, imported by farrapa-collections?commonjs-external

  - se puede arreglar con:?
      nodeResolve({
        mainFields: ['cjs'] // or 'main'
        o quiza
        browser: true
      }),
      ¿¿¿porque aunque cambie esto, sigue buscando el fichero node_modules/farrapa-collections/dist/farrapa-collections.mjs ?????
      ===> No le gusta esto:

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

        https://github.com/rollup/plugins/issues/362
        -- parece que necesitamos: 
           exportConditions: ['node']
        
        -- pero el array no le gusta

        -- tampoco asi

          "exports": {
            "import": "./dist/farrapa-collections.mjs",
            "require": "./dist/farrapa-collections.cjs",
            "default": "./dist/farrapa-collections.cjs"
          },      


        https://github.com/rollup/plugins/issues/741


  - esto si funciona -al menos para cjs-
      commonjs({
        esmExternals: true
      })        
      ==> necesitamos ver tambien requireReturnsDefault

  - pero claro esto no puede ser fijo, depende del input del codigo que recibe Rollup
  - podriamos hacer algo que checase el codigo de entrada, pero ¿deberiamos asumir que
    el codigo recibido no va a mezclar cjs y esm?
  - Habría que hacer funcionar algo mixeado para asegurar


~~rollup-commonjs
~~  - añadiendo esmModules nos quitamos el error 
~~    Error: 'default' is not exported by node_modules/farrapa-objects/dist/farrapa-objects.es.js, imported by farrapa-objects?commonjs-external
~~    pero (quiza x esa misma opcion) en el output se incluye todo el codigo de farrapa-objects.
~~    porque no hace su trabajo el plugin externals?????
~~    seteando la opcion external manualmente si que va!


  -- INIT:
     - molaria que configurase el pkgJson
     - pero luego segun que cosas dependen del pkgJson
     - a ver...

     INIT SETEA:

       "main" si target Node: /dist/package-cjs.js o quiza /dist/package-esm-node.js
              si target Browser: /dist/package-umd.js
       
       "exports": {
         "Import"  ????
         "default" ????
       }

       "module" /dist/package-esm.js
       "browser" /dist/package-umd.js si target Browser/All

       "eslintConfig"
       "babel"


       si product=app
         => bundler=nollup quiza?
         => o si se puede usar nollup para package/app, y de algun modo añadir un commando diferente
            en lugar de "xeira bundle"
            que haya dos "xeira dev" / "xeira dist"



  -- ADD INPUT TO XEIRA config
  -- PROBABLY REMOVE PRODUCT/TARGET FROM XEIRA CONFIG
  -- GUESS TARGETS BASED ON EXISTANT PKGJSON FIELD