import path from 'path'
import { getBabelPluginForResolvingAliases } from '../utils/aliases.mjs'

function _getBabelConfigName (xeiraConfig, esm= false) { 
  return `babel${xeiraConfig.usesReact ? '.react' : ''}.${esm ? 'mjs' : 'cjs'}`
}

function getBabelConfigPath (xeiraConfig, esm= false) { 
  const name = _getBabelConfigName(xeiraConfig, esm)
  return `./node_modules/xeira/configs/${name}`
}

async function getBabelConfig (xeiraConfig, pkgPath) { 
  const configModule = await import(path.join('../../configs', _getBabelConfigName(xeiraConfig, /*esm=*/ true)))
  let config= configModule.default

  const plugin = getBabelPluginForResolvingAliases(xeiraConfig, pkgPath)
  if (plugin) {

    // console.log(`Adding aliases. Root ${path.join(pkgPath, path.dirname(xeiraConfig.sourceIndex))}. Aliases ${JSON.stringify(aliases)}`)
    config= {
      ...config,
      plugins: [
        plugin,        
        ...config.plugins,
      ]
    }
  }

  return config
}

export {
  getBabelConfig,
  getBabelConfigPath
}