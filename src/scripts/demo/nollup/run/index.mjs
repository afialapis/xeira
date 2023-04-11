import path from 'path'
import NollupDevServer from 'nollup/lib/dev-server.js'
import demoDefaults from '../../defaults.mjs'
import {makeSimpleConfig} from './config.mjs'
import { readJsonFile } from '../../../../utils/json.mjs'
import { getJSValidPkgName } from '../../../../utils/names.mjs'
import {cfilename} from '../../../../utils/colors.mjs'

// eslint-disable-next-line no-unused-vars
async function demoWithNollup(context) {
  
  const pkgJson = await readJsonFile(path.join(context.pkgPath ,'package.json'))
  const name = getJSValidPkgName(pkgJson.name)
  let config= await makeSimpleConfig(context, name, demoDefaults.input, demoDefaults.output)
  const port = context?.options?.port || demoDefaults.port

  context.log_always('demo', `Serving demo at ${cfilename(`localhost:${port}`)}`)

  NollupDevServer({
    port: port,
    hot: demoDefaults.hot,
    config,
    contentBase: path.join(context.pkgPath, demoDefaults.contentBase),
    //publicPath: path.basename(config.output.file),
    verbose: true
  })

}


export {demoWithNollup}