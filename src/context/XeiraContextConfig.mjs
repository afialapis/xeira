import path from 'path'

export class XeiraContextConfig {
  constructor(config, pkgJson, options) {
    this.config= config
    this.pkgJson= pkgJson
    this.options= options
  }
  get pkgName () {
    return this.pkgJson.name
  }
  mergeConfig (config) {
    this.config= {
      ...config || {},
      ...this.config
    }
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

  getSourceFolder() {
    return this.options?.source_folder || path.dirname(this.sourceIndex)
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

  get bundleName() {
    return this.config.bundle_name || this.pkgName
  }

  get bundleExtension() {
    return this.config.bundle_extension
  }

  bundleAll() {
    return !this.bundleExtension
  }

  bundleThis(extension) {
    if (this.bundleExtension) {
      return this.bundleExtension.indexOf(extension) >= 0
    }
    return true
  }

  get inlineDynamicImports() {
    return ! (this.config.bundle_inline_dynamic_imports != true)
  }

  get polyfillNode() {
    return this.config.bundle_node_polyfill === true
  }

  get bundleWithRollup() {
    return this.config.bundler == 'rollup'
  }

  get testFolder() {
    return this.config.test_folder || 'tests'
  }

  getDevServer() {
    return this.config?.dev_server || 'rollup'
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


