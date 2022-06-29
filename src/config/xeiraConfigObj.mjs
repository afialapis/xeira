const addSuffix = (s, suf) => s.replace(/\.js$/, `.${suf}.js`).replace(/\.mjs$/, `.${suf}.mjs`).replace(/\.cjs$/, `.${suf}.cjs`);


const NODE_MAIN = 'umd' // 'cjs'

export class XeiraConfigObj {
  constructor(config) {
    this.config= config
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

  get lintWithEslint() {
    return this.config.linter == 'eslint'
  }

  get transpile() {
    return this.config?.transpile_folder !== undefined
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

  getMainFileForNodeSuffix() {
    return NODE_MAIN
  }

  getMainFileForNode(pkgName) {
    if (this.isTargetingNode) {
      const suffix = this.getMainFileForNodeSuffix()
      const output = suffix=='cjs'
        ? this.getCjsOutput(pkgName)
        : addSuffix(this.getUmdOutput(pkgName), 'main')
      return output
    }
    return undefined    
  }

  getMainFile(pkgName) {
    if (this.transpileFolder !== undefined && this.target == 'node') {
      return `${this.transpileFolder}/index.js`
    }
    if (this.isTargetingNode) {
      return this.getMainFileForNode(pkgName)
    }
    return addSuffix(this.getUmdOutput(pkgName), 'main')
  }

}

