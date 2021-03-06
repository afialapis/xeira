import {getBabelConfigPath} from '../../config/babel.mjs'
import {getEslintConfigPath} from '../../config/eslint.mjs'

function makePkgJsonValues(xeiraConfig, pkgName) {

  let pkgJsonValues= {
    main: xeiraConfig.getMainFile(pkgName),
    exports: {
      import: xeiraConfig.getEsmOutput(pkgName),
      default: xeiraConfig.getMainFile(pkgName)
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
    pkgJsonValues.browser= xeiraConfig.getUmdOutput(pkgName)
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