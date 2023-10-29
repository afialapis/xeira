import path from 'path'
import { XeiraContextConfig } from "./XeiraContextConfig.mjs"

const NODE_MAIN = 'umd' // 'cjs'

const _relative = (s) => `.${path.sep}${s}`

export class XeiraContextFiles extends XeiraContextConfig {
  constructor(config, pkgPath, pkgJson, options) {
    super(config, pkgJson, options)
    this.pkgPath= pkgPath
  }
  
  pkgp(p) {
    return p!=undefined 
      ? path.join(this.pkgPath, p) 
      : undefined
  }
  
  _getChunkFolder(name, minified= false) {
    if (this.inlineDynamicImports) {
      return undefined
    }
    return minified
      ? `${name}.min`
      : name
  }

  _getOutputFile(ext, chunkFolder= undefined, minified= false, suffix= undefined) {
    const smin = minified ? `.min` : ''
    const ssuf = suffix ? `.${suffix}` : ''
    let pre_ext= '', the_ext= ''
    if (ext.indexOf('.')>0) {
      [pre_ext, the_ext]= ext.split('.')
    } else {
      the_ext= ext
    }
    const spre_ext = pre_ext ? `.${pre_ext}` : ''

    const theFile = `${this.bundleName}${spre_ext}${ssuf}${smin}.${the_ext}`
    
    // Force to be relative to current folder
    if (chunkFolder) {
      return _relative(path.join(this.bundleFolder, chunkFolder, 'index.js'))
    }
    return _relative(path.join(this.bundleFolder, theFile))
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
    const chunkFolder = this._getChunkFolder('cjs', minified)
    return this._getOutputFile('cjs', chunkFolder, minified)
  }

  getEsmOutput(minified= false) {
    const chunkFolder = this._getChunkFolder('mjs', minified)
    return this._getOutputFile('mjs', chunkFolder, minified)
  }

  getEsmNodeOutput(minified= false) {
    const chunkFolder = this._getChunkFolder('mjs_node', minified)
    return this._getOutputFile('mjs', chunkFolder, minified, 'node')
  }

  getUmdOutput(minified= false, suffix= undefined) {
    return this._getOutputFile('umd.js', undefined,  minified, suffix)
  }  

  getUmdFullBundleOutput(minified= false) {
    return this.getUmdOutput(minified, 'bundle')
  }  

  getIifeOutput(minified= false, suffix= undefined) {
    return this._getOutputFile('iife.js', undefined, minified, suffix)
  }  

  getIifeFullBundleOutput(minified= false) {
    return this.getIifeOutput(minified, 'bundle')
  } 

  getMainFile() {
    if (this.transpileFolder != undefined) {
      return [undefined, _relative(path.join(this.transpileFolder, 'index.cjs'))]
    }
    if (NODE_MAIN=='cjs') {
      return ['cjs', this.getCjsOutput(false)]
    }
    
    return ['umd', this.getUmdOutput(false, 'main')]
  }
}  


