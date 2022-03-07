module.exports = class XeiraConfigObj {
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
    return this.config.target == 'all'
  }

  get isTargetingBrowser() {
    return this.config.target == 'browser'
  }
  
  get isTargetingNode() {
    return (this.config.target != 'all') && (this.config.target != 'browser')
  }  

  get lintWithEslint() {
    return this.config.linter == 'eslint'
  }

  get transpileWithBabel() {
    return this.config.transpiler == 'babel'
  }

  get minifyWithUglify() {
    return this.config.minifier == 'uglify'
  }

  get bundleWithRollup() {
    return this.config.bundler == 'rollup'
  }

  get usesReact() {
    return this.config.react !== false
  }

  get isAMonoRepo() {
    return this.config.monorepo !== false
  }
}

