import {getBabelConfigPath} from '../../config/babel.mjs'
import {getEslintConfigPath} from '../../config/eslint.mjs'

function makePkgJsonValues(xeiraConfig, pkgName) {
  const [_main_file_suffix, main_file] = xeiraConfig.getMainFile(pkgName) 

  let pkgJsonValues= {
    main: main_file,
    exports: {
      import: xeiraConfig.getEsmOutput(pkgName),
      default: main_file
    },
    module: xeiraConfig.getEsmOutput(pkgName),
    // type: 'module'
  }

  if (xeiraConfig.isTargetingNode) {
    pkgJsonValues.exports['require']= xeiraConfig.getCjsOutput(pkgName)
    pkgJsonValues['cjs']= xeiraConfig.getCjsOutput(pkgName)
    // if (xeiraConfig.isTargetingNodeOnly) {
    //   pkgJsonValues['type']= 'commonjs'
    // }
  }

  if (xeiraConfig.isTargetingBrowser) {
    const iife= xeiraConfig.getIifeOutput(pkgName)
    const umd= xeiraConfig.getUmdOutput(pkgName)
    pkgJsonValues.browser= iife || umd
  }
  
  if (xeiraConfig.lintWithEslint) {
    const eslintConfigPath = getEslintConfigPath(xeiraConfig)
    pkgJsonValues['eslintConfig']= {"extends": [eslintConfigPath]}
  }

  if (xeiraConfig.transpileWithBabel) {
    const babelConfigPath = getBabelConfigPath(xeiraConfig)
    pkgJsonValues['babel']= {"extends": babelConfigPath}
    
  }

  return pkgJsonValues
}

export {makePkgJsonValues}