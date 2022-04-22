const {getBabelConfigPath} = require('../../config/babel')
const {getEslintConfigPath} = require('../../config/eslint')

function makePkgJsonValues(xeiraConfig, pkgName) {

  let pkgJsonValues= {
    main: xeiraConfig.getMainFile(pkgName),
    exports: {
      import: xeiraConfig.getEsmOutput(pkgName),
      default: xeiraConfig.getMainFile(pkgName)
    },
    module: xeiraConfig.getEsmOutput(pkgName)
  }

  if (xeiraConfig.isTargetingNode) {
    pkgJsonValues.exports['require']= xeiraConfig.getCjsOutput(pkgName)
    pkgJsonValues['cjs']= xeiraConfig.getCjsOutput(pkgName)
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

module.exports = makePkgJsonValues