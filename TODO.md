
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