import path from 'path'
import babelMerge from 'babel-merge'
import { loadPartialConfig } from "@babel/core"
import { getBabelPluginForResolvingAliases } from '../utils/aliases.mjs'

function _getBabelConfigName (xeiraConfig, esm= false) { 
  return `babel${xeiraConfig.usesReact ? '.react' : ''}.${esm ? 'mjs' : 'cjs'}`
}

function getBabelConfigPath (xeiraConfig, esm= false) { 
  const name = _getBabelConfigName(xeiraConfig, esm)
  return `./node_modules/xeira/configs/${name}`
}


async function getBabelDefaultConfig (xeiraConfig) { 
  const configModule = await import(path.join('../../configs', _getBabelConfigName(xeiraConfig, /*esm=*/ true)))
  let config= configModule.default

  const plugin = getBabelPluginForResolvingAliases(xeiraConfig)
  if (plugin) {
    config= babelMerge(config, {plugins: [plugin]})
  }

  return config
}


async function getBabelConfig (xeiraConfig, filename, custom) { 
  let babelDefConfig = await getBabelDefaultConfig(xeiraConfig)  
  const partialConfig= loadPartialConfig({filename})
  let mergedConfig= babelMerge(babelDefConfig, partialConfig)
  if (custom) {
    mergedConfig= babelMerge(mergedConfig, custom)
  }
  return mergedConfig
}


export {
  getBabelConfig,
  getBabelConfigPath
}

