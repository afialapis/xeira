import path from 'path'

export class XeiraContextConfig {
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

  get inlineDynamicImports() {
    return ! (this.config.bundle_inline_dynamic_imports != true)
  }

  get bundleWithRollup() {
    return this.config.bundler == 'rollup'
  }

  get testFolder() {
    return this.config.test_folder || 'tests'
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


