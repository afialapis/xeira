import path from 'path'
import NollupDevServer from 'nollup/lib/dev-server.js'
import demoDefaults from '../../defaults.mjs'
import {makeSimpleConfig} from './config.mjs'
import { readJsonFile } from '../../../../utils/json.mjs'
import { getJSValidPkgName } from '../../../../utils/names.mjs'
import {cyan} from '../../../../utils/colors.mjs'

// eslint-disable-next-line no-unused-vars
async function demoWithNollup(pkgPath, xeiraConfig) {
  
  const pkgJson = await readJsonFile(path.join(pkgPath ,'package.json'))
  const pkgName = getJSValidPkgName(pkgJson.name)
  let config= makeSimpleConfig(pkgPath, pkgName, demoDefaults.input, demoDefaults.output)

  console.log(`[xeira][demo] Serving demo at ${cyan(`localhost:${demoDefaults.port}`)}`)

  NollupDevServer({
    port: demoDefaults.port,
    hot: demoDefaults.hot,
    config,
    contentBase: path.join(pkgPath, demoDefaults.contentBase),
    //publicPath: path.basename(config.output.file),
    verbose: true
  })

}


export {demoWithNollup}