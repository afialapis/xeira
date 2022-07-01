import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import {stat} from 'fs/promises'
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

async function _parseMochaArgs(args, pkgPath, xeiraConfig) {

  let testPaths= []
  let extraParams= []
  
  for (let i=0; i<args.length; i++) {
    if (args[i].startsWith('-')) {
      extraParams.push(args[i])

      if (_MOCHA_NON_BOOLEAN_ARGS.indexOf(args[i])>=0) {
        extraParams.push(args[i+1])
        i+= 1
      }
    } else {
      const fullTestPath= path.join(pkgPath, args[i])
      const stats= await stat(fullTestPath)
      if (stats.isFile()) {
        testPaths.push(fullTestPath)
      } else if (stats.isDirectory()) {
        testPaths.push(`${fullTestPath}/**/*.{ts,js,mjs,cjs,jsx,es6}`)
      } else {
        // we assume it is a pattern string already
        testPaths.push(fullTestPath)
      }
    }
  }
  
  let testPathStr= xeiraConfig.testFolder
  if (testPaths.length) {
    testPathStr= testPaths.join(' ')
  }
  

  return [extraParams, testPathStr]

}

async function testWithMocha(pkgPath, xeiraConfig, args) {

  const babelRegPath=  path.join(__dirname, 'babel.mjs')
  const mochaDOMPath=  path.join(__dirname, 'dom.mjs')
  const mochaHelpersPath=  path.join(__dirname, 'helpers.mjs')

  const [extraParams, testPathStr]= await _parseMochaArgs(args, pkgPath, xeiraConfig)
  

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
    //`${fullTestPath}/**/*.{ts,js,mjs,cjs,jsx,es6}`
    testPathStr
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
 