import path from 'path'
import NollupDevServer from 'nollup/lib/dev-server.js'
import devDefaults from '../defaults.mjs'
import {makeSimpleConfig} from './config.mjs'
import { readJsonFile } from '../../../utils/json.mjs'
import { getJSValidPkgName } from '../../../utils/names.mjs'
import {cfilename} from '../../../utils/colors.mjs'

// eslint-disable-next-line no-unused-vars
async function devWithNollup(context) {
  
  const pkgJson = await readJsonFile(path.join(context.pkgPath ,'package.json'))
  const name = getJSValidPkgName(pkgJson.name)
  
  const input = context.sourceIndex
  const contentBase = path.join(context.pkgPath, 'build') //context.getSourceFolder()
  const port = context?.options?.port || devDefaults.port

  let config= await makeSimpleConfig(context, name, input, devDefaults.output)

  context.log_always('dev', `Serving dev at ${cfilename(`localhost:${port}`)}`)

  NollupDevServer({
    port: port,
    hot: devDefaults.hot,
    config,
    contentBase: path.join(context.pkgPath, contentBase),
    //publicPath: path.basename(config.output.file),
    verbose: true
  })

}


export {devWithNollup}