import path from 'path'

export async function getEslintConfig () { 
  const config = await import(path.join('../../configs', 'eslint.config.js'))
  return config.default
}
