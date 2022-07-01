import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import {execSync} from 'child_process'

const _MOCHA_NON_BOOLEAN_ARGS= [
  '--global', '--globals', 
  '-j', '--jobs',
  '--retries', 
  '-s', '--slow', 
  '-t', '--timeout', '--timeouts',
  '-u', '-ui', 
  '-R', '--reporter',
  '-O', '--reporter-option', '--reporter-options',
  '--config',
  '-n', '--node-option',
  '--package',
  '--extension',
  '--file',
  '--ignore', '--exclude',
  '-r', '--require',
  '--watch-files',
  '--watch-ignore',
  '-f', '--fgrep',
  '-g', '--grep' 

]

function _parseMochaArgs(args, xeiraConfig) {

  let testPath= xeiraConfig.testFolder
  let extraParams= []
  
  for (let i=0; i<args.length; i++) {
    if (args[i].startsWith('-')) {
      extraParams.push(args[i])

      if (_MOCHA_NON_BOOLEAN_ARGS.indexOf(args[i])>=0) {
        extraParams.push(args[i+1])
        i+= 1
      }
    } else {
      //if (extraParams.indexOf(args[i])<0) {
        testPath= args[i]
      //}
    }
  }
  

  return [extraParams, testPath]

}

async function testWithMocha(pkgPath, xeiraConfig, args) {

  const babelRegPath=  path.join(__dirname, 'babel.mjs')
  const mochaDOMPath=  path.join(__dirname, 'dom.mjs')
  const mochaHelpersPath=  path.join(__dirname, 'helpers.mjs')

  const [extraParams, testPath]= _parseMochaArgs(args, xeiraConfig)
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
    ...extraParams || [],
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
 