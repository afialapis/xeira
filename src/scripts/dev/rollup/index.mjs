import path from 'path'
import devDefaults from '../defaults.mjs'
import {makeSimpleConfig} from './config.mjs'
import { readJsonFile } from '../../../utils/json.mjs'
import { getJSValidPkgName } from '../../../utils/names.mjs'
import { rollupBuild } from '../../bundle/rollup/build.mjs'
import { rollupWatch } from './watch.mjs'


// eslint-disable-next-line no-unused-vars
async function devWithRollup(context) {
  const pkgJson = await readJsonFile(path.join(context.pkgPath ,'package.json'))
  const name = getJSValidPkgName(pkgJson.name)
  
  const input = context.sourceIndex
  const contentBase = devDefaults.contentBase
  const output = devDefaults.output
  const port = context?.options?.port || devDefaults.port

  const [inputOptions, outputOptions]= await makeSimpleConfig(context, name, input, output, contentBase, port)

  await rollupBuild(context.pkgPath, inputOptions, [outputOptions])
  rollupWatch({
    ...inputOptions,
    output: [outputOptions],
    watch: {
      //buildDelay: 200,
      exclude: 'node_modules/**'
    }
  })
}


export {devWithRollup}