import { writeFile } from 'fs/promises'
import { transformFileAsync } from "@babel/core"
import { transpileDirectory } from './iter.mjs'
import {getBabelConfig} from '../../config/babel.mjs'
import { log_info } from '../../utils/log.mjs'
import { blue, blue_light } from '../../utils/colors.mjs'

async function transpileWithBabel(xeiraConfig, minimifyCallback, sourceFolder= undefined, forceExtension= 'cjs') {
  const theSourceFolder = sourceFolder || xeiraConfig.sourceFolder
  log_info(xeiraConfig, 'transpile', `Transpiling folder ${blue(theSourceFolder)} to ${blue(xeiraConfig.transpileFolder)} (forcing files to be ${blue(forceExtension)})`)

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
  
  
  await transpileDirectory(xeiraConfig.pkgPath, theSourceFolder, xeiraConfig.transpileFolder, forceExtension, async (filepath, destpath) => {
    // Log clean filenames
    const cleanFrom= filepath.replace(xeiraConfig.pkgPath, '')
    const cleanTo= destpath.replace(xeiraConfig.pkgPath, '')
    log_info(xeiraConfig, 'transpile', `Transpiling ${blue_light(cleanFrom)} to ${blue_light(cleanTo)}`)
    
    // Merge all involved babel configs
    const mergedConfig= await getBabelConfig(xeiraConfig, filepath, customBabelConfig)

    let { code } = await transformFileAsync(filepath, mergedConfig)
    code = await minimifyCallback(code)
    //code = code.replace(/\.mjs/g, '.'+forceExtension)
    return await writeFile(destpath, code)
  })
}

export {
  transpileWithBabel
}