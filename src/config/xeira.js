const XeiraConfigObj = require('./xeiraConfigObj')


function getXeiraConfigObj(pkgPathOrConfig) {
  let config
  if (typeof pkgPathOrConfig == 'string') {
    config = require(`${pkgPathOrConfig}/xeira.json`)
  } else {
    config = pkgPathOrConfig
  }
  const xeiraObj= new XeiraConfigObj(config)
  return xeiraObj 
}

function getXeiraDefaultConfig() { 
  const config = require('../../configs/xeira')
  return config
}

module.exports= {
  getXeiraDefaultConfig,
  getXeiraConfigObj
}
