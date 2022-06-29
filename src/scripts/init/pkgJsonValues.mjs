import {getBabelConfigPath} from '../../config/babel'
import {getEslintConfigPath} from '../../config/eslint'

function makePkgJsonValues(xeiraConfig, pkgName) {

  let pkgJsonValues= {
    main: xeiraConfig.getMainFile(pkgName),
    exports: {
      import: xeiraConfig.getEsmOutput(pkgName),
      default: xeiraConfig.getMainFile(pkgName)
    },
    module: xeiraConfig.getEsmOutput(pkgName),
    type: 'module'
  }

  if (xeiraConfig.isTargetingNode) {
    pkgJsonValues.exports['require']= xeiraConfig.getCjsOutput(pkgName)
    pkgJsonValues['cjs']= xeiraConfig.getCjsOutput(pkgName)
    if (xeiraConfig.isTargetingNodeOnly) {
      pkgJsonValues['type']= 'commonjs'
    }
  }

  if (xeiraConfig.isTargetingBrowser) {
    pkgJsonValues.browser= xeiraConfig.getUmdOutput(pkgName)
  }
  
  if (xeiraConfig.linter == 'eslint') {
    const eslintConfigPath = getEslintConfigPath(xeiraConfig)
    pkgJsonValues['eslintConfig']= {"extends": [eslintConfigPath]}
  }

  if (xeiraConfig.transpiler == 'babel') {
    const babelConfigPath = getBabelConfigPath(xeiraConfig)
    pkgJsonValues['babel']= {"extends": babelConfigPath}
    
  }

  return pkgJsonValues
}

export {makePkgJsonValues}