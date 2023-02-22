import {XeiraConfigObj} from './xeiraConfigObj.mjs'
import {readJsonFile, readJsonFileSync} from '../utils/json.mjs'
import defConfig from '../../configs/xeira.mjs'

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

function _getConfigValuesFromArgs(argv) {
  const valid_keys= Object.keys(defConfig)
  let config= {}
  valid_keys.map(k => {
    if (k in argv) {
      config[k]= 
        argv[k]==='true'
        ? true
        : argv[k]==='false'
        ? false
        : argv[k]==undefined
        ? undefined
        : argv[k]
    }
  })
  return config
}

function getConfigKeysFromArgs(argv) {
  return Object.keys(
    _getConfigValuesFromArgs(argv)
  )
}


function readXeiraConfigObj(pkgPath, argv) {
  const pkgConfig= readJsonFileSync(`${pkgPath}/xeira.json`, true)
  const pkgJson= readJsonFileSync(`${pkgPath}/package.json`)

  const config= {
    ...defConfig,
    ...pkgConfig,
    ..._getConfigValuesFromArgs(argv || {})
  }

  const xeiraObj= new XeiraConfigObj(config, pkgPath, pkgJson.name)
  return xeiraObj 
}

async function makeXeiraConfigObj(config, pkgPath, pkgName) {
  const xeiraObj= new XeiraConfigObj(config, pkgPath, pkgName)
  return xeiraObj 
}



export {
  getXeiraDefaultConfig,
  getXeiraConfigObj,
  readXeiraConfigObj,
  getConfigKeysFromArgs,
  makeXeiraConfigObj
}
