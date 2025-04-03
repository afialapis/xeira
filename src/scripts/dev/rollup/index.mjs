import devDefaults from '../defaults.mjs'
import {makeSimpleConfig} from './config.mjs'
import { rollupBuild } from '../../bundle/rollup/build.mjs'
import { rollupWatch } from './watch.mjs'


// eslint-disable-next-line no-unused-vars
async function devWithRollup(context, callback) {

  const [inputOptions, outputOptions]= await makeSimpleConfig(context, devDefaults, callback)
  
  const watch = true
  await rollupBuild(context.pkgPath, inputOptions, [outputOptions], watch)
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