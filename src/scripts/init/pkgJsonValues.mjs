import {getEslintConfigPath} from '../../config/eslint.mjs'

function makePkgJsonValues(xeiraConfig) {
  const [_main_file_suffix, main_file] = xeiraConfig.getMainFile() 

  let pkgJsonValues= {
    main: main_file,
    exports: {
      import: xeiraConfig.getEsmOutput(),
      default: main_file
    },
    module: xeiraConfig.getEsmOutput(),
    // type: 'module'
  }

  if (xeiraConfig.isTargetingNode) {
    pkgJsonValues.exports['require']= xeiraConfig.getCjsOutput()
    pkgJsonValues['cjs']= xeiraConfig.getCjsOutput()
    // if (xeiraConfig.isTargetingNodeOnly) {
    //   pkgJsonValues['type']= 'commonjs'
    // }
  }

  if (xeiraConfig.isTargetingBrowser) {
    const iife= xeiraConfig.getIifeOutput()
    const umd= xeiraConfig.getUmdOutput()
    pkgJsonValues.browser= iife || umd
  }
  
  if (xeiraConfig.lintWithEslint) {
    const eslintConfigPath = getEslintConfigPath(xeiraConfig)
    pkgJsonValues['eslintConfig']= {"extends": [eslintConfigPath]}
  }

  return pkgJsonValues
}

export {makePkgJsonValues}