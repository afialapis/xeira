import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function _getEslintConfigName (xeiraConfig, esm= false) { 
  return `eslint${xeiraConfig.usesReact ? '.react' : ''}.${esm ? 'mjs' : 'cjs'}`
}

function getEslintConfigPath (xeiraConfig, esm= false) { 
  const name = _getEslintConfigName(xeiraConfig, esm)
  return `./node_modules/xeira/configs/${name}`
}

async function getEslintConfig (xeiraConfig) { 
  const config = await import(path.join('../../configs', _getEslintConfigName(xeiraConfig, /*esm=*/ true)))
  return config.default
}

function getEslintIgnorePath() {
  return path.join(__dirname, '../../configs/.eslintignore')
}

export {
  getEslintConfig,
  getEslintIgnorePath,
  getEslintConfigPath
}