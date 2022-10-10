import fs from 'fs'
import path from 'path'
import {stat} from 'fs/promises'
import Mocha from 'mocha'
import { fileURLToPath } from 'url'
import { transformFileSync } from "@babel/core"
import {getBabelConfig} from '../../../config/babel.mjs'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


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
  let extraOptions= {}
  
  for (let i=0; i<args.length; i++) {
    if (args[i].startsWith('-')) {
      
      if (_MOCHA_NON_BOOLEAN_ARGS.indexOf(args[i])>=0) {
        extraOptions[args[i]]= args[i+1]
        i+= 1
      } else {
        extraOptions[args[i]]= true
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
  
  let testPathStr= ''
  if (testPaths.length) {
    testPathStr= testPaths.join(' ')
  } else {
    testPathStr = `${xeiraConfig.testFolder}/**/*.{ts,js,mjs,cjs,jsx,es6}`
  }
  

  return [extraOptions, testPathStr]

}

async function testWithMochaAPI(pkgPath, xeiraConfig, args) {

  const babelRegPath=  path.join(__dirname, 'babel.mjs')
  const mochaDOMPath=  path.join(__dirname, 'dom.mjs')
  const mochaHelpersPath=  path.join(__dirname, 'helpers.mjs')

  const [extraOptions, testPathStr]= await _parseMochaArgs(args, pkgPath, xeiraConfig)
  

  //  const params= [
  //    '--exit',
  //    // '--timeout 500',
  //    // '--slow 300',
  //    // '--paralell', // react 17
  //    '--bail',
  //    //'--require @babel/register',
  //    `--require ${babelRegPath}`,
  //    //`--loader=testdouble`,
  //    //// `--extension js,cjs,mjs,jsx`,
  //    `--require ${mochaDOMPath}`,
  //    '--require ignore-styles',
  //    ...extraOptions || [],
  //    mochaHelpersPath,
  //    //`$(find ${fullTestPath} -name '*.js' ! -path '**/_*.js')`
  //    //`${fullTestPath}/**/*.{ts,js,mjs,cjs,jsx,es6}`
  //    testPathStr
  //  ]


  const babelConfig = await getBabelConfig(xeiraConfig);
  
  console.log('babel config is:')
  console.log(babelConfig)


  // Instantiate a Mocha with options
  const mocha = new Mocha({
    reporter: 'list'
  });

  // Use non-default Mocha test directory.
  const testDir = path.join(pkgPath, 'test')

  // Add each .js file to the mocha instance
  fs.readdirSync(testDir)
    .filter(function(file) {
      return path.extname(file) === '.mjs';
    })
    .forEach(function(file) {
      const mjs= path.join(testDir, file)
      const cjs= path.join(testDir, file).replace('.mjs', '_temp.cjs')
      let { code } = transformFileSync(mjs, babelConfig);
      fs.writeFileSync(cjs, code)

      console.log('---------------------- mocha add file: ' + cjs)
      mocha.addFile(cjs);
    });

  // Run the tests.
  mocha.run(function(failures) {
    process.exitCode = failures ? 1 : 0; // exit with non-zero status if there were failures
  });





}

export {
  testWithMochaAPI
}
 
