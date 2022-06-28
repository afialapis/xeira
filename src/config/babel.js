const path = require('path')
const xeiraConfigsPath= path.join(__dirname, '../../configs')


function _getBabelConfigName (xeiraConfig) { 
  return `babel${xeiraConfig.usesReact ? '.react' : ''}`
}

function getBabelConfigPathForPkgJson (xeiraConfig) { 
  const name = _getBabelConfigName(xeiraConfig)
  
  return `./node_modules/xeira/configs/${name}`
}

function getBabelConfig (xeiraConfig) { 
  const config = require(path.join(xeiraConfigsPath, _getBabelConfigName(xeiraConfig)))
  return config
}

module.exports= {
  getBabelConfig,
  getBabelConfigPathForPkgJson
}