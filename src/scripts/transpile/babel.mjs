import { writeFile } from 'fs/promises'
import { transformFileAsync } from "@babel/core"
import { transpileDirectory } from './iter.mjs'
import {getBabelConfig} from '../../config/babel.mjs'
import { log_info } from '../../utils/log.mjs'
import { cfilename } from '../../utils/colors.mjs'

async function transpileWithBabel(context, minimifyCallback, sourceFolder= undefined, forceExtension= 'cjs') {
  const theSourceFolder = sourceFolder || context.sourceFolder
  log_info(context, 'transpile', `Transpiling folder ${cfilename(theSourceFolder)} to ${cfilename(context.transpileFolder)} (forcing files to be ${cfilename(forceExtension)})`)

  // apply some particular mod on babel config
  const customBabelConfig= {
    sourceType: 'unambiguous',
    //babelConfig.presets.filter(p => p[0]=='@babel/preset-env')[0][1].modules= 'commonjs'
    plugins: [
      "@babel/plugin-transform-modules-commonjs",
      ['module-extension', {
        mjs: 'cjs',
      }]    
    ]
  }
  
  
  await transpileDirectory(context.pkgPath, theSourceFolder, context.transpileFolder, forceExtension, async (filepath, destpath) => {
    // Log clean filenames
    const cleanFrom= filepath.replace(context.pkgPath, '')
    const cleanTo= destpath.replace(context.pkgPath, '')
    log_info(context, 'transpile', `Transpiling ${cfilename(cleanFrom)} to ${cfilename(cleanTo)}`)
    
    // Merge all involved babel configs
    const mergedConfig= await getBabelConfig(context, filepath, customBabelConfig)

    let { code } = await transformFileAsync(filepath, mergedConfig)
    code = await minimifyCallback(code)
    //code = code.replace(/\.mjs/g, '.'+forceExtension)
    return await writeFile(destpath, code)
  })
}

export {
  transpileWithBabel
}