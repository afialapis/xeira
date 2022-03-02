const path = require('path');

function _getBabelConfigName (xeiraConfig) { 
  return `babel${xeiraConfig.usesReact ? '.react' : ''}`
}

function getBabelConfigPath (xeiraConfig) { 
  const name = _getBabelConfigName(xeiraConfig)
  
  return `./node_modules/xeira/configs/${name}`
}

function getBabelConfig (xeiraConfig) { 
  const config = require(path.join('../../configs', _getBabelConfigName(xeiraConfig)))
  return config
}

module.exports= {
  getBabelConfig,
  getBabelConfigPath
}