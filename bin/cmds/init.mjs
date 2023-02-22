import {cyan_italic} from '../../src/utils/colors.mjs'
import { readXeiraConfigObj, getConfigKeysFromArgs } from '../../src/config/xeira.mjs'
import xeiraInit from '../../src/scripts/init/index.mjs'

const command = 'init [force] [options]'
const describe = `${cyan_italic('It will guide you to create xeira.json, the xeira\'s configuration file')}`

const builder = {
  force: {
    type: 'boolean',
    describe: 'If passed, you\'l be asked for every xeira option even if already present on xeira.json'
  },
  options: {
    describe: 'You can pass any fly options to overwrite xeira.json defaults'
  }
}

const handler = async function (argv) {
  const pkgPath= process.env.PWD
  const xeiraConfig = await readXeiraConfigObj(pkgPath, argv)

  const flyOptions= getConfigKeysFromArgs(argv)

  await xeiraInit(xeiraConfig, flyOptions, argv.force)
}

export {command, describe, builder, handler}

