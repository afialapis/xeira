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
    compile [src] [lib]

    Take them from:
    [lib] => dirname of pkgJson.main
    [src] => maybe check if exists, if not just take '.'
  
  · pluggable configurations
   
    move every default config to some common place,
    in order to make xeira easy customizable by just
    extending that common place
  

