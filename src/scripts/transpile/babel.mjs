// import path from 'path'
// import { fileURLToPath } from 'url'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)


//import { access, writeFile } from 'fs/promises'
import { writeFile } from 'fs/promises'
// import { transformFileAsync, loadOptions } from "@babel/core"
import { transformFileAsync } from "@babel/core"
// import { pkgJsonRead } from '../../utils/pkgJson.mjs'
import { transpileDirectory } from './iter.mjs'
import {getBabelConfig} from '../../config/babel.mjs'

async function transpileWithBabel(pkgPath, xeiraConfig, sourcePath, destPath, minimifyCallback, forceExtension= 'cjs') {

  // https://babeljs.io/docs/en/babel-core#loadoptions

  // TODO
  // It makes no sense to read pkgJson.babel (it's xceira stuff)
  // We need to decide how to read possible custom config files
 
  //  // prepae babel options
  //  let babelConfig
  //  try {
  //    const babelrc= path.join(pkgPath, '.babelrc')
  //    await access(babelrc)
  //    babelConfig = await import(babelrc)
  //  } catch(e) {
  //
  //    const pkgJson = await pkgJsonRead(pkgPath)
  //    if (pkgJson.babel != undefined) {
  //      babelConfig = pkgJson.babel
  //
  //      if (babelConfig.extends) {
  //        babelConfig.extends= babelConfig.extends.replace('./node_modules/xeira/configs', path.join(__dirname,'../../../configs'))
  //      }
  //
  //    } else {      
  //      babelConfig = await getBabelConfig(xeiraConfig)
  //    }
  //
  //  }  

  const babelConfig = await getBabelConfig(xeiraConfig)

  
  babelConfig.sourceType= 'unambiguous'
  
  //babelConfig.presets.filter(p => p[0]=='@babel/preset-env')[0][1].modules= 'commonjs'
  babelConfig.plugins= [
    ...babelConfig.plugins,
    "@babel/plugin-transform-modules-commonjs",
    ['module-extension', {
      mjs: 'cjs',
    }]    
  ]


  await transpileDirectory(pkgPath, sourcePath, destPath, forceExtension, async (filepath, destpath) => {
    let { code } = await transformFileAsync(filepath, babelConfig)
    code = await minimifyCallback(code)
    //code = code.replace(/\.mjs/g, '.'+forceExtension)
    return await writeFile(destpath, code)
  })
}

export {
  transpileWithBabel
}