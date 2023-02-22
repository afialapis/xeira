import {cyan_italic} from '../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../src/config/xeira.mjs'
import xeiraVersion from '../../src/scripts/version/index.mjs'


const command = 'version [type] [number] [filter] [verbose]'
const describe = `${cyan_italic('Version handling')}`

const builder = function (yargs) {
  const pkgPath= process.env.PWD
  const xeiraConfig = readXeiraConfigObj(pkgPath)

  return yargs 
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

  await xeiraVersion(xeiraConfig, argv.type, argv.number, argv.filter)
}

export {command, describe, builder, handler}
