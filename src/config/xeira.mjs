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

function _getConfigValuesFromArgs(argv, aliases) {
  function _parseValue (v) {
    return v==='true'
    ? true
    : v==='false'
    ? false
    : ((v=='null') || (v=='undefined') || (v=='none') || (v=='') || (v==undefined))
    ? undefined
    : v   
  }
  let config= {}

  const valid_keys= Object.keys(defConfig)
  valid_keys.map(k => {
    if (k in argv) {
      config[k]= _parseValue(argv[k])
    }
  })

  if (aliases) {
    const valid_alias= Object.keys(defConfig)
    valid_alias.map((fld) => {
      const alias = aliases[fld]
      if (alias in argv) {
        const v= argv[alias]
        config[alias]= _parseValue (v)      
      }
    })

  }


  return config
}

function getConfigKeysFromArgs(argv, aliases) {
  return Object.keys(
    _getConfigValuesFromArgs(argv, aliases)
  )
}


function readXeiraConfigObj(pkgPath, argv, aliases) {
  const pkgConfig= readJsonFileSync(`${pkgPath}/xeira.json`, true)
  const pkgJson= readJsonFileSync(`${pkgPath}/package.json`)

  const config= {
    ...defConfig,
    ...pkgConfig,
    ..._getConfigValuesFromArgs(argv || {}, aliases)
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
