function makePkgJsonValues(context) {
  const [_main_file_suffix, main_file] = context.getMainFile() 

  let pkgJsonValues= {
    main: main_file,
    exports: {
      import: context.getEsmOutput(),
      default: main_file
    },
    module: context.getEsmOutput(),
    // type: 'module'
  }

  if (context.isTargetingNode) {
    pkgJsonValues.exports['require']= context.getCjsOutput()
    pkgJsonValues['cjs']= context.getCjsOutput()
    // if (context.isTargetingNodeOnly) {
    //   pkgJsonValues['type']= 'commonjs'
    // }
  }

  if (context.isTargetingBrowser) {
    const iife= context.getIifeOutput()
    const umd= context.getUmdOutput()
    pkgJsonValues.browser= iife || umd
  }
  
  return pkgJsonValues
}

export {makePkgJsonValues}