import path from 'path'
import { fileURLToPath } from 'url'
import { writeFile } from 'fs/promises'
import { transformFileAsync } from "@babel/core"
//import babelPluginReplaceImportExtension from 'babel-plugin-replace-import-extension.mjs'
import { transpileDirectory } from './iter.mjs'
import {getBabelConfig} from '../../config/babel.mjs'
import { cfilename } from '../../utils/colors.mjs'


const __my_filename = fileURLToPath(import.meta.url)
const __my_dirname = path.dirname(__my_filename)

async function transpileWithBabel(context, minimifyCallback, forceExtension= 'cjs') {
  const theSourceFolder = context.getSourceFolder()
  context.log_info('transpile', `Transpiling folder ${cfilename(theSourceFolder)} to ${cfilename(context.transpileFolder)} (forcing files to be ${cfilename(forceExtension)})`)

  // apply some particular mod on babel config
  const customBabelConfig= {
    sourceType: 'unambiguous',
    //babelConfig.presets.filter(p => p[0]=='@babel/preset-env')[0][1].modules= 'commonjs'
    plugins: [
      "@babel/plugin-transform-modules-commonjs",
      "babel-plugin-transform-import-meta",
      //['module-extension', {
      //  mjs: 'cjs',
      //}]
      //['replace-import-extension', {
      //  "extMapping": { ".mjs": ".cjs" }
      //}]           
      
      [path.join(__my_dirname, 'babel-plugin-replace-import-extension.mjs'), {
        "extMapping": { ".mjs": ".cjs" }
      }]                 
    ]
  }
  
  
  await transpileDirectory(context.pkgPath, theSourceFolder, context.transpileFolder, forceExtension, async (filepath, destpath) => {
    // Log clean filenames
    const cleanFrom= filepath.replace(context.pkgPath, '')
    const cleanTo= destpath.replace(context.pkgPath, '')
    context.log_always('transpile', `Transpiling ${cfilename(cleanFrom)} to ${cfilename(cleanTo)}`)
    
    // Merge all involved babel configs
    const mergedConfig= await getBabelConfig(context, filepath, customBabelConfig)

    try {

      let { code } = await transformFileAsync(filepath, mergedConfig)
      code = await minimifyCallback(code)
      //code = code.replace(/\.mjs/g, '.'+forceExtension)
      return await writeFile(destpath, code)
    } catch(e) {
      context.log_error('transpile', `Error transpiling ${cleanFrom} to ${cleanTo}`)
      context.log_error('transpile', `Babel config is: ${JSON.stringify(mergedConfig)}`)
      context.log_error('transpile', `Error trace:`)
      console.error(e)      
    }
  })
}

export {
  transpileWithBabel
}