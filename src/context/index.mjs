import {readJsonFileSync} from '../utils/json.mjs'
import defConfig from '../../configs/xeira.mjs'
import {getFilterPatternFromArgv,
  getContextFolders,
  getConfigFromArgv } from './utils.mjs'
import { XeiraContext } from './XeiraContext.mjs'


function getXeiraContexts(folder, argv, aliases) {
  
  const filterPattern= getFilterPatternFromArgv(argv, aliases)
  const contextFolders= getContextFolders(folder, filterPattern)

  const parentConfig= readJsonFileSync(`${folder}/xeira.json`, true)
  const parentPkgJson= readJsonFileSync(`${folder}/package.json`)

  let contexts= []

  contextFolders.map(contextFolder => {

    const pkgConfig= contextFolder!=folder
      ? readJsonFileSync(`${contextFolder}/xeira.json`, true)
      : {}

    const pkgJson= contextFolder!=folder
      ? readJsonFileSync(`${contextFolder}/package.json`)
      : parentPkgJson
  
    const mergedConfig= {
      ...defConfig,
      ...parentConfig,
      ...pkgConfig,
      ...getConfigFromArgv(argv || {}, aliases)
    }

    const context= new XeiraContext(mergedConfig, contextFolder, pkgJson)
    contexts.push(context)

  })

  return contexts
}

function makeXeiraContext(config, pkgPath) {
  const pkgJson=  readJsonFileSync(`${pkgPath}/package.json`)
  const xeiraContext = new XeiraContext(config, pkgPath, pkgJson.name)
  return xeiraContext 
}



export {
  getXeiraContexts,
  makeXeiraContext
}