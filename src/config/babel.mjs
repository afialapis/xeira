import path from 'path'

function _getBabelConfigName (xeiraConfig) { 
  return `babel${xeiraConfig.usesReact ? '.react' : ''}.mjs`
}

function getBabelConfigPath (xeiraConfig) { 
  const name = _getBabelConfigName(xeiraConfig)
  
  return `./node_modules/xeira/configs/${name}`
}

async function getBabelConfig (xeiraConfig) { 
  const config = await import(path.join('../../configs', _getBabelConfigName(xeiraConfig)))
  return config.default
}

export {
  getBabelConfig,
  getBabelConfigPath
}