import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import {execSync} from 'child_process'

async function testWithMocha(pkgPath, xeiraConfig, testPath) {

  const babelRegPath=  path.join(__dirname, 'babel.mjs')
  const mochaDOMPath=  path.join(__dirname, 'dom.mjs')
  const mochaHelpersPath=  path.join(__dirname, 'helpers.mjs')
  const fullTestPath= path.join(pkgPath, testPath)

  //const mocha= 'npx mocha'
  const mocha= 'mocha'

  const params= [
    '--exit',
    // '--timeout 500',
    // '--slow 300',
    // '--paralell', // react 17
    '--bail',
    //'--require @babel/register',
    `--require ${babelRegPath}`,
    `--require ${mochaDOMPath}`,
    '--require ignore-styles',
    mochaHelpersPath,
    //`$(find ${fullTestPath} -name '*.js' ! -path '**/_*.js')`
    `${fullTestPath}/**/*.{ts,js,mjs,cjs,jsx,es6}`
  ]

  const command= `${mocha} ${params.join(' ')}`

  execSync(
    command, 
    {
      cwd: pkgPath,
      stdio: [0, 1, 2]
    });
}

export {
  testWithMocha
}
 