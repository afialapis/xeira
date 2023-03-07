import path from 'path'
import babelMerge from 'babel-merge'
import { loadPartialConfig } from "@babel/core"
import { getBabelPluginForResolvingAliases } from '../utils/aliases.mjs'

function _getBabelConfigName (context, esm= false) { 
  return `babel${context.usesReact ? '.react' : ''}.${esm ? 'mjs' : 'cjs'}`
}

async function _getBabelDefaultConfig (context) { 
  const configModule = await import(path.join('../../configs', _getBabelConfigName(context, /*esm=*/ true)))
  let config= configModule.default

  const plugin = getBabelPluginForResolvingAliases(context)
  if (plugin) {
    config= babelMerge(config, {plugins: [plugin]})
  }

  return config
}


async function getBabelConfig (context, filename, custom) { 
  let babelDefConfig = await _getBabelDefaultConfig(context)  
  const partialConfig= loadPartialConfig({filename})
  let mergedConfig= babelMerge(babelDefConfig, partialConfig)
  if (custom) {
    mergedConfig= babelMerge(mergedConfig, custom)
  }
  return mergedConfig
}


export {
  getBabelConfig
}

