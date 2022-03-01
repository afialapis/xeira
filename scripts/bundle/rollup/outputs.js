const path = require('path')
const {rollupOutputPlugins} = require('./plugins')
const {toTitleCase} = require('farrapa-trings')

const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');

const titlefyPkgName = (package_name) => {
  const suffix= package_name.replace('farrapa-', '')
  return `farrapa${toTitleCase(suffix)}`

}

const makeGlobals = (pkgJson) => {
  const pkgs= Object.keys(pkgJson.dependencies)
  const globals= {}
  pkgs.map((n) => {
    globals[n]= titlefyPkgName(n)
  })
  return globals
}

const cjsOutputs = (file) => {
  return [
    // CommonJs
    {
      file: file,
      format: 'cjs',
      exports: 'named',
      plugins: rollupOutputPlugins(false)
    }, 
    // CommonJs .min
    {
      file: minifyExtension(file),
      format: 'cjs',
      exports: 'named',
      plugins: rollupOutputPlugins(true)
    },     
  ]
}

const moduleOutputs = (file) => {
  return [
    // ES module
    {
      file: file,
      format: 'es',
      exports: 'named',
      plugins: rollupOutputPlugins(false)
    },
    // ES module .min
    {
      file: minifyExtension(file),
      format: 'es',
      exports: 'named',
      plugins: rollupOutputPlugins(true)
    },    
  ]
}

const umdOutputs = (file, name, globals) => {
  return [
    // UMD
    {
      file: file,
      format: 'umd',
      name: titlefyPkgName(name),
      plugins: rollupOutputPlugins(false),
      globals
    },
    // UMD .min
    {
      file: minifyExtension(file),
      format: 'umd',
      name: titlefyPkgName(name),
      plugins: rollupOutputPlugins(true),
      globals
    }
  ]
}

const rollupOutputs = (pkgPath, pkgJson) => {
  const resolve_to_pkg = (f) => {
    return path.join(pkgPath, f)
  }

  return [
    // CommonJs
    ... pkgJson.cjs != undefined
      ?  cjsOutputs(resolve_to_pkg(pkgJson.cjs))
      : [],
    // ES module
    ... pkgJson.module != undefined
      ?  moduleOutputs(resolve_to_pkg(pkgJson.module))
      : [],
    // UMD
    ... pkgJson.browser != undefined
      ?  umdOutputs(resolve_to_pkg(pkgJson.browser), pkgJson.name, makeGlobals(pkgJson))
      : []
  ]
}


export {rollupOutputs}