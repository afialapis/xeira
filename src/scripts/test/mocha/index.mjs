import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import {execSync} from 'child_process'
import { renderJsTmpl } from '../../../utils/io.mjs'
import { getBabelPluginForResolvingAliases, hasAliases } from '../../../utils/aliases.mjs'
import { unlink } from 'fs'


function _makeBabelTempFile(xeiraConfig) {
  const source= path.join(__dirname, 'babel.mjs.tmpl')
  const dest= path.join(xeiraConfig.pkgPath, '.test.babel.mjs')

  const alias_plugin= getBabelPluginForResolvingAliases (xeiraConfig)
  let plugins= []
  if (alias_plugin) {
    plugins= [alias_plugin]
  }
  const changes= {
    'PLUGINS': JSON.stringify(plugins, undefined, 4)
  }
  renderJsTmpl(source, dest, changes)
  return dest
}


async function testWithMocha(xeiraConfig, extraParams, testPathStr) {
  const withAliases= hasAliases(xeiraConfig.pkgPath)
  
  const babelRegPath= withAliases
    ? _makeBabelTempFile(xeiraConfig)
    : path.join(__dirname, 'babel.mjs')
  
  const helpersDir = path.join(__dirname, 'helpers')
  const helperChaiPath=  path.join(helpersDir, 'chai.mjs')
  const helperDOMPath=  path.join(helpersDir, 'dom.mjs')
  const helperReactPath=  path.join(helpersDir, 'react.mjs')
  

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
    //`--loader=testdouble`,
    //// `--extension js,cjs,mjs,jsx`,
    xeiraConfig.isTargetingBrowser ? `--require ${helperDOMPath}` : '',
    '--require ignore-styles',
    ...extraParams || [],
    helperChaiPath,
    xeiraConfig.usesReact ? helperReactPath : '',
    //`$(find ${fullTestPath} -name '*.js' ! -path '**/_*.js')`
    //`${fullTestPath}/**/*.{ts,js,mjs,cjs,jsx,es6}`
    testPathStr
  ]

  const command= `${mocha} ${params.join(' ')}`

  // console.log(command)

  execSync(
    command, 
    {
      cwd: xeiraConfig.pkgPath,
      stdio: [0, 1, 2]
    });
  
  if (withAliases) {
    unlink(babelRegPath, () => {})
  }
}

export {
  testWithMocha
}
 