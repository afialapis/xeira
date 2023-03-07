import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function _getEslintConfigName (context, esm= false) { 
  return `eslint${context.usesReact ? '.react' : ''}.${esm ? 'mjs' : 'cjs'}`
}

function getEslintConfigPath (context, esm= false) { 
  const name = _getEslintConfigName(context, esm)
  return `./node_modules/xeira/configs/${name}`
}

async function getEslintConfig (context) { 
  const config = await import(path.join('../../configs', _getEslintConfigName(context, /*esm=*/ true)))
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