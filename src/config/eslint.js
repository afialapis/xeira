const path = require('path');

function _getEslintConfigName (xeiraConfig) { 
  return `eslint${xeiraConfig.usesReact ? '.react' : ''}`
}

function getEslintConfigPath (xeiraConfig) { 
  const name = _getEslintConfigName(xeiraConfig)

  return `./node_modules/xeira/configs/${name}`
}



function getEslintConfig (xeiraConfig) { 
  const config = require(path.join('../../configs', _getEslintConfigName(xeiraConfig)))
  return config
}


function getEslintIgnorePath() {
  return path.join(__dirname, '../../configs/.eslintignore')
}

module.exports= {
  getEslintConfig,
  getEslintIgnorePath,
  getEslintConfigPath
}