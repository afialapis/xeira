import {cyan_italic} from '../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../src/config/xeira.mjs'
import xeiraLint from '../../src/scripts/lint/index.mjs'

const command = 'lint [folder] [verbose]'

const describe = `${cyan_italic('Lint code in a folder')}`

const builder = function (yargs) {
  const pkgPath= process.env.PWD
  const xeiraConfig = readXeiraConfigObj(pkgPath)

  return yargs
    .option('folder', {
      alias: 'f',
      default: xeiraConfig.sourceFolder
    })
    .option('verbose', {
      alias: 'b',
      default: xeiraConfig.beVerbose(),
      boolean: true
    })
}


const handler = async function (argv) {
  const pkgPath= process.env.PWD
  const xeiraConfig = readXeiraConfigObj(pkgPath, argv)

  await xeiraLint(xeiraConfig, argv.folder)
}

export {command, describe, builder, handler}
