import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import {execSync} from 'child_process'
import { renderJsTmpl } from '../../../utils/io.mjs'
import { getBabelPluginForResolvingAliases, hasAliases } from '../../../utils/aliases.mjs'
import { unlink } from 'fs'
import { cfilename } from '../../../utils/colors.mjs'


function _makeBabelTempFile(context) {
  const source= path.join(__dirname, 'babel.mjs.tmpl')
  const dest= path.join(context.pkgPath, '.test.babel.mjs')

  const alias_plugin= getBabelPluginForResolvingAliases (context)
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


async function testWithMocha(context, extraParams, testPathStr) {
  const withAliases= hasAliases(context.pkgPath)
  
  const babelRegPath= withAliases
    ? _makeBabelTempFile(context)
    : path.join(__dirname, 'babel.cjs')
  
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
    
    // RTL seems to always expect JSDOM
    // context.isTargetingBrowser ? `--require ${helperDOMPath}` : '',    
    `--require ${helperDOMPath}`,

    '--require ignore-styles',
    ...extraParams || [],
    helperChaiPath,
    context.usesReact ? helperReactPath : '',
    //`$(find ${fullTestPath} -name '*.js' ! -path '**/_*.js')`
    //`${fullTestPath}/**/*.{ts,js,mjs,cjs,jsx,es6}`
    testPathStr
  ]

  const command= `${mocha} ${params.join(' ')}`
  context.log_info('test', `Running ${cfilename(command)}`)

  execSync(
    command, 
    {
      cwd: context.pkgPath,
      stdio: [0, 1, 2]
    });
  
  if (withAliases) {
    unlink(babelRegPath, () => {})
  }
}

export {
  testWithMocha
}
 