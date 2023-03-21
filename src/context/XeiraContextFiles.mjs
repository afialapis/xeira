import path from 'path'
import { XeiraContextConfig } from "./XeiraContextConfig.mjs"

const NODE_MAIN = 'umd' // 'cjs'

export class XeiraContextFiles extends XeiraContextConfig {
  constructor(config, pkgPath, pkgJson) {
    super(config, pkgJson.name)
    this.pkgPath= pkgPath
    this.pkgJson= pkgJson
  }

  pkgp(p) {
    return p!=undefined 
      ? path.join(this.pkgPath, p) 
      : undefined
  }
  
  _getChunkFolder(name, minified= false) {
    if (this.inlineDynamicImports) {
      throw Error(`Trying to get a chunk folder for ${name}, but inlineDynamicImports is true`)
    }
    return minified
      ? `${name}.min`
      : name
  }

  _getOutputFile(name, ext, minified= false, suffix= undefined) {
    const smin = minified ? `.min` : ''
    const ssuf = suffix ? `.${suffix}` : ''
    let pre_ext= '', the_ext= ''
    if (ext.indexOf('.')>0) {
      [pre_ext, the_ext]= ext.split('.')
    } else {
      the_ext= ext
    }
    const spre_ext = pre_ext ? `.${pre_ext}` : ''

    const theFile = `${this.pkgName}${spre_ext}${ssuf}${smin}.${the_ext}`
    
    if (! this.inlineDynamicImports) {
      const chunkFolder = this._getChunkFolder(name, minified)
      return path.join(this.bundleFolder, chunkFolder, 'index.js')
    }
    return path.join(this.bundleFolder, theFile)
  }

  /*
  getCjsChunkFolder(minified= false) {
    return this._getChunkFolder('cjs', minified)
  }

  getEsmChunkFolder(minified= false) {
    return this._getChunkFolder('esm', minified)
  }

  getUmdChunkFolder(minified= false) {
    return this._getChunkFolder('umd', minified)
  }  

  getIifeChunkFolder(minified= false) {
    return this._getChunkFolder('iife', minified)
  }  
  */

  getCjsOutput(minified= false) {
    return this._getOutputFile('cjs', 'cjs', minified)
  }

  getEsmOutput(minified= false) {
    return this._getOutputFile('mjs', 'mjs', minified)
  }

  getEsmNodeOutput(minified= false) {
    return this._getOutputFile('mjs', 'mjs', minified, 'node')
  }

  getUmdOutput(minified= false, suffix= undefined) {
    return this._getOutputFile('umd', 'umd.js', minified, suffix)
  }  

  getUmdFullBundleOutput(minified= false) {
    return this._getOutputFile('umd_bundle', 'umd.js', minified, 'bundle')
  }  

  getIifeOutput(minified= false) {
    return this._getOutputFile('iife', 'iife.js', minified)
  }  

  getIifeFullBundleOutput(minified= false) {
    return this._getOutputFile('iife', 'iife.js', minified, 'bundle')
  } 

  getMainFile() {
    if (this.transpileFolder != undefined /*&& this.isTargetingNode*/) {
      return [undefined, path.join(this.transpileFolder, 'index.cjs')]
    }
    if (NODE_MAIN=='cjs') {
      return ['cjs', this.getCjsOutput(false)]
    }
    
    return ['umd', this.getUmdOutput(false, 'main')]
  }
}  


