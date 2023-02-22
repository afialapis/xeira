import {cyan_italic} from '../../src/utils/colors.mjs'
import { readXeiraConfigObj } from '../../src/config/xeira.mjs'
import xeiraDemo from '../../src/scripts/demo/index.mjs'

const command = 'demo [init] [force] [demo_mode] [demo_demoer] [verbose]'
const describe = `${cyan_italic('Bundle, serve and watch your package\'s demo')}`

const builder = function (yargs) {
  const pkgPath= process.env.PWD
  const xeiraConfig = readXeiraConfigObj(pkgPath)

  return yargs
    .option('init', {
      alias: 'i',
      default: false,
      boolean: true
    })
    .option('force', {
      alias: 'f',
      default: false,
      boolean: true
    })    
    .option('demo_mode', {
      alias: 'mode',
      default: xeiraConfig.getDemoMode()
    })
    .option('demo_demoer', {
      alias: 'to',
      default: xeiraConfig.getDemoer()
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

  await xeiraDemo(xeiraConfig, argv.init, argv.force)
}

export {command, describe, builder, handler}



