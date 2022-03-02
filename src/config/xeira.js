const XeiraConfigObj = require('./xeiraConfigObj')


function getXeiraConfigObj(pkgPath) {
  const config = require(`${pkgPath}/xeira.json`)
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
