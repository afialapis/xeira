import {gray_light} from '../../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../../src/config/xeira.mjs'
import xeiraTranspile from '../../../src/scripts/transpile/index.mjs'

const command = 'transpile [source_folder] [transpile_folder] [verbose]'
const describe = `${gray_light('Transpile your code')}`

const builder = function (yargs) {
  const pkgPath= process.env.PWD
  const xeiraConfig = readXeiraConfigObj(pkgPath)

  return yargs
    .option('source_folder', {
      alias: 'from',
      default: xeiraConfig.sourceFolder
    })
    .option('transpile_folder', {
      alias: 'to',
      default: xeiraConfig.transpileFolder
    })    
    .option('verbose', {
      alias: 'b',
      default: xeiraConfig.beVerbose(),
      boolean: true
    })
}

const handler = async function (argv) {
  const pkgPath= process.env.PWD
  // get xeira config
  const xeiraConfig = await readXeiraConfigObj(pkgPath, argv)

  await xeiraTranspile(xeiraConfig)
}

export {command, describe, builder, handler}
