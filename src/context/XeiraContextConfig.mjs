import path from 'path'

const addSuffix = (s, suf) => 
  s
  .replace(/\.js$/, `.${suf}.js`)
  .replace(/\.mjs$/, `.${suf}.mjs`)
  .replace(/\.cjs$/, `.${suf}.cjs`)


const NODE_MAIN = 'umd' // 'cjs'

export class XeiraContextConfig {
  constructor(config, pkgName) {
    this.config= config
    this.pkgName= pkgName
  }

  get isAnApp() {
    return this.config.product == 'app'
  }

  get isAPackage() {
    return this.config.product != 'app'
  } 

  get isTargetingBoth() {
    return this.config.target == 'both'
  }

  get isTargetingBrowserOnly() {
    return this.config.target == 'browser'
  }

  get isTargetingBrowser() {
    return this.isTargetingBrowserOnly || this.isTargetingBoth
  }
  
  get isTargetingNodeOnly() {
    return this.config.target == 'node'
  }  

  get isTargetingNode() {
    return this.isTargetingNodeOnly || this.isTargetingBoth
  }  

  get sourceIndex() {
    return this.config.source_index
  }

  get sourceFolder() {
    return path.dirname(this.sourceIndex)
  }  

  get lintWithEslint() {
    return this.config.linter == 'eslint'
  }

  get transpile() {
    return this.config?.transpile_folder != undefined
  }

  get transpileFolder() {
    return this.config.transpile_folder || 'lib'
  }

  get transpileWithBabel() {
    return this.config.transpiler == 'babel'
  }

  get minifyWithUglify() {
    return this.config.minifier == 'uglify'
  }

  get bundleFolder() {
    return this.config.bundle_folder || 'dist'
  }

  get inlineDymamicImports() {
    return ! (this.config.bundle_inline_dynamic_imports != true)
  }

  get bundleWithRollup() {
    return this.config.bundler == 'rollup'
  }

  get testFolder() {
    return this.config.test_folder || 'tests'
  }

  getCjsOutput() {
    if (this.isTargetingNode) {
      return path.join(this.bundleFolder, `${this.pkgName}.cjs`)
    }
    return undefined
  }

  getEsmOutput() {
    return path.join(this.bundleFolder, `${this.pkgName}.mjs`)
  }

  getEsmNodeOutput() {
    if (this.isTargetingNode) {
      return addSuffix(this.getEsmOutput(), 'node')
    }
    return undefined
  }

  getUmdOutput() {
    if (this.isTargetingBrowser) {
      return path.join(this.bundleFolder, `${this.pkgName}.umd.js`)
    }
    return undefined
  }  

  getUmdFullBundleOutput() {
    const umd= this.getUmdOutput()
    if (umd) {
      return addSuffix(umd, 'bundle')
    }
    return undefined
  }  

  getIifeOutput() {
    if (this.isTargetingBrowser) {
      return path.join(this.bundleFolder, `${this.pkgName}.iife.js`)

    }
    return undefined
  }  

  getIifeFullBundleOutput() {
    const iife= this.getIifeOutput()
    if (iife) {
      return addSuffix(iife, 'bundle')
    }
    return undefined
  }    

  getMainFileForNodeSuffix() {
    return NODE_MAIN
  }

  getMainFileForNode() {
    const suffix = this.getMainFileForNodeSuffix()
    const output = suffix=='cjs'
      ? this.getCjsOutput()
      : addSuffix(this.getUmdOutput(), 'main')
    return [suffix, output]
  }

  getMainFile() {
    if (this.transpileFolder != undefined /*&& this.isTargetingNode*/) {
      return [undefined, path.join(this.transpileFolder, 'index.cjs')]
    }
    if (this.isTargetingNode) {
      return this.getMainFileForNode()
    }
    return ['umd', addSuffix(this.getUmdOutput(), 'main')]
  }

  getDemoMode() {
    return this.config?.demo_mode || 'auto'
  }

  hasDemo() {
    return this.getDemoMode() == 'auto'
  }
  getDemoer() {
    return this.config?.demo_demoer || 'rollup'
  }

  beVerbose() {
    return this.config?.verbose == true
  }
}  


