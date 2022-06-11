const path = require('path');
//const { pkgJsonRead } = require('../../utils/pkgJson');
const execSync = require('child_process').execSync;

async function testWithMocha(pkgPath, xeiraConfig, testPath) {

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
    '--require @babel/register',
    `--require ${mochaDOMPath}`,
    '--require ignore-styles',
    mochaHelpersPath,
    `$(find ${fullTestPath} -name '*.js' ! -path '**/_*.js')`
  ]

  const command= `${mocha} ${params.join(' ')}`

  execSync(
    command, 
    {
      cwd: pkgPath,
      stdio: [0, 1, 2]
    });
}

module.exports = {
  testWithMocha
}
 