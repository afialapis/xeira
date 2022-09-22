import path from 'path'
import demoDefaults from '../../defaults.mjs'
import {makeSimpleConfig} from './config.mjs'
import { readJsonFile } from '../../../../utils/json.mjs'
import { getJSValidPkgName } from '../../../../utils/names.mjs'
import { rollupBuild } from '../../../bundle/rollup/build.mjs'
import { rollupWatch } from './watch.mjs'


// eslint-disable-next-line no-unused-vars
async function demoWithRollup(pkgPath, xeiraConfig) {
  
  const pkgJson = await readJsonFile(path.join(pkgPath ,'package.json'))
  const pkgName = getJSValidPkgName(pkgJson.name)
  const input = demoDefaults.input
  const output = demoDefaults.output
  //const contentBase = path.join(pkgPath, demoDefaults.contentBase)
  const port = demoDefaults.port
  const [inputOptions, outputOptions]= makeSimpleConfig(pkgName, input, output, demoDefaults.contentBase, port)

  await rollupBuild(inputOptions, [outputOptions])
  rollupWatch({
    ...inputOptions,
    output: [outputOptions],
    watch: {
      //buildDelay: 200,
      exclude: 'node_modules/**'
    }
  })
}


export {demoWithRollup}