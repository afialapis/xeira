import path from 'path'
import { fileURLToPath } from 'url'
import babelMerge from 'babel-merge'
import { loadPartialConfig } from "@babel/core"
import { getBabelPluginForResolvingAliases } from '../utils/aliases.mjs'
import { readJsonFileSync } from '../utils/json.mjs'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function _getBabelDefaultConfig (context) { 
  let config = readJsonFileSync(path.join(__dirname, '../../configs/babel.config.json'))
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

