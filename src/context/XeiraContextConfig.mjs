import path from 'path'
import {
  BUNDLE_MODE_NO_BUNDLE,
  BUNDLE_MODE_NORMAL,
  BUNDLE_MODE_WITH_DEPS,
  BUNDLE_MODE_BOTH
} from './ns.mjs'

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
  
  _bundleMode(extension) {
    // returns an array like
    //   [
    //     0/1/2/3, -- Normal bundle: 0 no bundle, 1 bundle, 2 bundle with deps, 3 both normal and with deps
    //     0/1/2/3, -- Min    bundle: 0 no bundle, 1 bundle, 2 bundle with deps, 3 both normal and with deps
    //   ]
    if (this.bundleExtension) {
      const exts = this.bundleExtension.split(',')
      if (exts.length >= 1) {
        const matching = exts.filter((e) => e.indexOf(extension)>=0)
        if (matching.length > 0) {
          const matchingMin = matching.filter((e) => e.indexOf('min')>=0)
          const bundleMin = matchingMin.length > 0
          if (bundleMin) {
            const bundleMinDeps = matchingMin.filter((e) => e.indexOf('bundle')>=0).length > 0
            return [BUNDLE_MODE_NO_BUNDLE, bundleMinDeps ? BUNDLE_MODE_WITH_DEPS : BUNDLE_MODE_NORMAL] // bundle only .min
          }
          
          const bundleDeps = matching.filter((e) => e.indexOf('bundle')>=0).length > 0
          return [bundleDeps ? BUNDLE_MODE_WITH_DEPS : BUNDLE_MODE_NORMAL, BUNDLE_MODE_NO_BUNDLE]   // bundle only normal
        }
      }
      return [BUNDLE_MODE_NO_BUNDLE, BUNDLE_MODE_NO_BUNDLE] // bundle none
    }
    if (process.env?.NODE_ENV || 'production' === 'production') {
      return [BUNDLE_MODE_BOTH, BUNDLE_MODE_BOTH] // bundle all
    }
    return [BUNDLE_MODE_NORMAL, BUNDLE_MODE_NO_BUNDLE] // bundle normal only in dev
  }

  bundleIt(extension) {
    const [bundleNormal, bundleMin] = this._bundleMode(extension)
    if  (bundleNormal !== BUNDLE_MODE_NO_BUNDLE) {
      return true
    }
    if (bundleMin !== BUNDLE_MODE_NO_BUNDLE) {
      return true
    }
    return false
  }

  bundleWithDeps(extension) {
    const [bundleNormal, bundleMin] = this._bundleMode(extension)
    let out = 0
    if ([BUNDLE_MODE_WITH_DEPS, BUNDLE_MODE_BOTH].indexOf(bundleNormal) >= 0) {
      out+= 1
    }
    if ([BUNDLE_MODE_WITH_DEPS, BUNDLE_MODE_BOTH].indexOf(bundleMin) >= 0) {
      out+= 2
    }
    return out
  }  

  bundleWithoutDeps(extension) {
    const [bundleNormal, bundleMin] = this._bundleMode(extension)
    let out = 0
    if ([BUNDLE_MODE_NORMAL, BUNDLE_MODE_BOTH].indexOf(bundleNormal) >= 0) {
      out+= 1
    }
    if ([BUNDLE_MODE_NORMAL, BUNDLE_MODE_BOTH].indexOf(bundleMin) >= 0) {
      out+= 2
    }
    return out
  }  


  bundleSome(extension) {
    return this.bundleIt(extension, true) || this.bundleIt(extension, false)
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


