import {cyan_italic} from '../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../src/config/xeira.mjs'
import xeiraBundle from '../../src/scripts/bundle/index.mjs'

const command = 'bundle [source_index] [bundle_folder] [verbose]'
const describe = `${cyan_italic('Bundle your code')}`

const builder = function (yargs) {
  const pkgPath= process.env.PWD
  const xeiraConfig = readXeiraConfigObj(pkgPath)

  return yargs
    .option('source_index', {
      alias: 'entry',
      default: xeiraConfig.sourceIndex
    })
    .option('bundle_folder', {
      alias: 'to',
      default: xeiraConfig.bundleFolder
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

  await xeiraBundle(xeiraConfig)
}

export {command, describe, builder, handler}
