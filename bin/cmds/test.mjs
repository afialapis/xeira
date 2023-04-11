import {ctitle, ccmd, cxeira, coption_name, coption_value, cexample, cfilename} from '../../src/utils/colors.mjs'
import {configText, monoText, helpText} from './util/index.mjs'
import xeiraTest from '../../src/scripts/test/index.mjs'



const aliases= {
  'files': 'f', 
  'timeout': 't'
}
const configOptions= ['test_folder', 'verbose']

const help = `
${ctitle('SYNPSIS')}

  ${cxeira('xeira')} ${ccmd('test')} [${coption_name('--files')}] [${coption_value('config')}]

${ctitle('DESCRIPTION')}

  Run you runit tests!

${ctitle('OPTIONS')}

  ${coption_name('--files')}, ${coption_name('--f')}
    Entry point for your tests. If several, you may specify a comma-separated list of files.
    Usage of patterns is also allowed.

  ${coption_name('--timeout')}, ${coption_name('--t')}
    Specify test timeout threshold (in milliseconds). Default is 2000.

  ${helpText}   

  ${configText(configOptions)}

  ${monoText}


${ctitle('EXAMPLES')}

  ${cexample('xeira test --f=./tests/units/unit_one.js')}
    Run the ${cfilename('tests/units/unit_one.js')} test

  ${cexample('xeira test --f=./tests/units/*.{ts,js}')}
    Run every ${cfilename('.ts')} or ${cfilename('.js')} test in ${cfilename('./tests/units')}
    
  ${cexample('xeira test --f=./tests/units/unit_one.js,./tests/units/unit_two.js')}
    Run the ${cfilename('tests/units/unit_one.js')} and ${cfilename('tests/units/unit_two.js')} tests
  
  ${cexample('xeira test --test-folder=./other_tests_folder')}
    Run every Javascript file in ${cfilename('./other_tests_folder')}
`

const noCheck= true

export {aliases, configOptions, help, xeiraTest as handler, noCheck}

