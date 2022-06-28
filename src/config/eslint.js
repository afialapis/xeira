const path = require('path')
const xeiraConfigsPath= path.join(__dirname, '../../configs')

function _getEslintConfigName (xeiraConfig) { 
  return `eslint${xeiraConfig.usesReact ? '.react' : ''}`
}

function getEslintConfigPathForPkgJson (xeiraConfig) { 
  const name = _getEslintConfigName(xeiraConfig)

  return `./node_modules/xeira/configs/${name}`
}



function getEslintConfig (xeiraConfig) { 
  const config = require(path.join(xeiraConfigsPath, _getEslintConfigName(xeiraConfig)))
  return config
}


function getEslintIgnorePath() {
  return path.join(xeiraConfigsPath, '.eslintignore')
}

module.exports= {
  getEslintConfig,
  getEslintIgnorePath,
  getEslintConfigPathForPkgJson
}