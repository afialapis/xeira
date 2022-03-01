class XeiraConfig {
  constructor(pkgPath) {
    try {
      this.config = require(`${pkgPath}/xeira.json`)
    } catch(e) {
      console.error('[xeira] xeira.json not found!')
      console.error(e)
    }
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

  get compileWithBabel() {
    return this.config.compiler == 'babel'
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


function getXeiraConfig(pkgPath) {
  const xc= new XeiraConfig(pkgPath)
  return xc 
}

module.exports = {
  getXeiraConfig
}