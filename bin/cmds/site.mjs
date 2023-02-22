import {cyan_italic} from '../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../src/config/xeira.mjs'
import xeiraSite from '../../src/scripts/site/index.mjs'

const command = 'site [verbose]'
const describe = `${cyan_italic('Build an static site for your docs (and demo)')}`

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

  await xeiraSite(xeiraConfig)
}

export {command, describe, builder, handler}
