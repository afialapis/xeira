import path from 'path'
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


export async function getEslintConfig () { 
  const config = await import(path.join(__dirname, '../../configs', 'eslint.config.js'))
  return config.default
}
