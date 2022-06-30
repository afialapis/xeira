import path from 'path'

function _getBabelConfigName (xeiraConfig, esm= false) { 
  return `babel${xeiraConfig.usesReact ? '.react' : ''}.${esm ? 'mjs' : 'cjs'}`
}

function getBabelConfigPath (xeiraConfig, esm= false) { 
  const name = _getBabelConfigName(xeiraConfig, esm)
  return `./node_modules/xeira/configs/${name}`
}

async function getBabelConfig (xeiraConfig) { 
  const config = await import(path.join('../../configs', _getBabelConfigName(xeiraConfig, /*esm=*/ true)))
  return config.default
}

export {
  getBabelConfig,
  getBabelConfigPath
}