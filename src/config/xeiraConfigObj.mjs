const addSuffix = (s, suf) => s.replace(/\.js$/, `.${suf}.js`).replace(/\.mjs$/, `.${suf}.mjs`).replace(/\.cjs$/, `.${suf}.cjs`);


const NODE_MAIN = 'umd' // 'cjs'

export class XeiraConfigObj {
  constructor(config) {
    this.config= config
  }

  // _convEmptyValue(v) {
  //   if ((v==null) || (v=='null') || (v=='none')) {
  //     return undefined
  //   }
  //   return v || undefined
  // }  

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

  get lintWithEslint() {
    return this.config.linter == 'eslint'
  }

  get transpile() {
    return this.config?.transpile_folder != undefined
  }

  get transpileFolder() {
    return this.config.transpile_folder
  }

  get transpileWithBabel() {
    return this.config.transpiler == 'babel'
  }

  get minifyWithUglify() {
    return this.config.minifier == 'uglify'
  }

  get bundleFolder() {
    return this.config.bundle_folder
  }

  get bundleWithRollup() {
    return this.config.bundler == 'rollup'
  }

  get testFolder() {
    return this.config.test_folder
  }

  get usesReact() {
    return this.config.react !== false
  }

  get isAMonoRepo() {
    return this.config.monorepo !== false
  }

  getCjsOutput(pkgName) {
    if (this.isTargetingNode) {
      return `${this.bundleFolder}/${pkgName}.cjs`
    }
    return undefined
  }

  getEsmOutput(pkgName) {
    return `${this.bundleFolder}/${pkgName}.mjs`
  }

  getEsmNodeOutput(pkgName) {
    if (this.isTargetingNode) {
      return addSuffix(this.getEsmOutput(pkgName), 'node')
    }
    return undefined
  }

  getUmdOutput(pkgName) {
    return `${this.bundleFolder}/${pkgName}.umd.js`
  }  

  getUmdFullBundleOutput(pkgName) {
    const umd= this.getUmdOutput(pkgName)
    return addSuffix(umd, 'bundle')
  }  

  getIifeOutput(pkgName) {
    return `${this.bundleFolder}/${pkgName}.iife.js`
  }  

  getIifeFullBundleOutput(pkgName) {
    const iife= this.getIifeOutput(pkgName)
    return addSuffix(iife, 'bundle')
  }    

  getMainFileForNodeSuffix() {
    return NODE_MAIN
  }

  getMainFileForNode(pkgName) {
    const suffix = this.getMainFileForNodeSuffix()
    const output = suffix=='cjs'
      ? this.getCjsOutput(pkgName)
      : addSuffix(this.getUmdOutput(pkgName), 'main')
    return [suffix, output]
  }

  getMainFile(pkgName) {
    if (this.transpileFolder != undefined /*&& this.isTargetingNode*/) {
      return [undefined, `${this.transpileFolder}/index.js`]
    }
    if (this.isTargetingNode) {
      return this.getMainFileForNode(pkgName)
    }
    return ['umd', addSuffix(this.getUmdOutput(pkgName), 'main')]
  }


  hasDemo() {
    return this.config?.demo_mode == 'auto'
  }
  getDemoer() {
    return this.config?.demo_demoer || 'rollup'
  }
}  


