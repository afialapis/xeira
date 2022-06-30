import {XeiraConfigObj} from './xeiraConfigObj.mjs'
import {readJsonFile} from '../utils/json.mjs'

async function getXeiraConfigObj(pkgPathOrConfig) {
  let config
  if (typeof pkgPathOrConfig == 'string') {
    //config = await import(`${pkgPathOrConfig}/xeira.json`,   
    //                      {assert: {type: "json"}})
    config= await readJsonFile(`${pkgPathOrConfig}/xeira.json`)
  } else {
    config = pkgPathOrConfig
  }
  const xeiraObj= new XeiraConfigObj(config)
  return xeiraObj 
}

async function getXeiraDefaultConfig() { 
  const config = await import('../../configs/xeira.mjs')
  return config.default
}

export {
  getXeiraDefaultConfig,
  getXeiraConfigObj
}
