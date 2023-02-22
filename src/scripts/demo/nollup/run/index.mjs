import path from 'path'
import NollupDevServer from 'nollup/lib/dev-server.js'
import demoDefaults from '../../defaults.mjs'
import {makeSimpleConfig} from './config.mjs'
import { readJsonFile } from '../../../../utils/json.mjs'
import { getJSValidPkgName } from '../../../../utils/names.mjs'
import {cyan} from '../../../../utils/colors.mjs'
import { log_always } from '../../../../utils/log.mjs'

// eslint-disable-next-line no-unused-vars
async function demoWithNollup(xeiraConfig) {
  
  const pkgJson = await readJsonFile(path.join(xeiraConfig.pkgPath ,'package.json'))
  const name = getJSValidPkgName(pkgJson.name)
  let config= await makeSimpleConfig(xeiraConfig, name, demoDefaults.input, demoDefaults.output)

  log_always('demo', `Serving demo at ${cyan(`localhost:${demoDefaults.port}`)}`)

  NollupDevServer({
    port: demoDefaults.port,
    hot: demoDefaults.hot,
    config,
    contentBase: path.join(xeiraConfig.pkgPath, demoDefaults.contentBase),
    //publicPath: path.basename(config.output.file),
    verbose: true
  })

}


export {demoWithNollup}