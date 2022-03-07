# xeira

Index for all the building tools your package or app needs


## TODO
  · init
    
    also init the files:
      - .gitignore
      - .npmignore
      - monorepo relateds

  · default params:
    
    lint [src]
    transpile [src] [lib]

    Take them from:
    [lib] => dirname of pkgJson.main
    [src] => maybe check if exists, if not just take '.'
  
  · pluggable configurations
   
    move every default config to some common place,
    in order to make xeira easy customizable by just
    extending that common place
  
  · config:

    product: 'package', // 'app',
    target: 'node', // 'browser', 'all',

    probably not needed, on bundle time we already have main/cjs/browser/module




https://nodejs.org/api/packages.html#packages_package_entry_points
https://nodejs.org/api/packages.html#packages_conditional_exports

https://github.com/rollup/rollup-starter-lib
https://github.com/rollup/rollup-starter-app
https://github.com/PepsRyuu/nollup

https://github.com/remix-run/react-router/blob/main/rollup.config.js