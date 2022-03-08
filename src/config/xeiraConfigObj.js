const {getBabelConfigPath} = require('./babel')
const {getEslintConfigPath} = require('./eslint')

const addSuffix = (s, suf) => s.replace(/\.js$/, `.${suf}.js`);


const NODE_MAIN = 'cjs' // 'umd'

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
    return ( (this.config.target == 'browser') || (this.config.target == 'all') )
  }
  
  get isTargetingNode() {
    return ( (this.config.target == 'node') || (this.config.target == 'all') )
  }  

  get sourceIndex() {
    return this.config.source_index
  }

  get lintWithEslint() {
    return this.config.linter == 'eslint'
  }

  get transpile() {
    return this.config.transpile_folder !== 'none'
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

  get usesReact() {
    return this.config.react !== false
  }

  get isAMonoRepo() {
    return this.config.monorepo !== false
  }

  getCjsOutput(pkgName) {
    if (this.isTargetingNode) {
      return `${this.bundleFolder}/${pkgName}.cjs.js`
    }
    return undefined
  }

  getEsmOutput(pkgName) {
    return `${this.bundleFolder}/${pkgName}.esm.js`
  }

  getEsmNodeOutput(pkgName) {
    if (this.isTargetingNode) {
      return addSuffix(this.getEsmModule(pkgName), 'node')
    }
    return undefined
  }


  getUmdOutput(pkgName) {
    return `${this.bundleFolder}/${pkgName}.umd.js`
  }  

  getMainFileForNodeSuffix() {
    return NODE_MAIN
  }

  getMainFileForNode(pkgName) {
    if (this.isTargetingNode) {
      const suffix = this.getMainFileForNodeSuffix()
      const output = suffix=='cjs'
        ? this.getCjsOutput(pkgName)
        : this.getUmdOutput(pkgName)
      return addSuffix(output, 'main')
    }
    return undefined    
  }

  getMainFile(pkgName) {
    if (this.transpileFolder !== 'none' && this.target == 'node') {
      return `${this.transpileFolder}/index.js`
    }
    if (this.isTargetingNode) {
      return this.getMainFileForNode(pkgName)
    }
    return addSuffix(this.getUmdOutput(pkgName), 'main')
  }

  makePkgJsonValues(pkgName) {

    let pkgJsonValues= {
      main: this.getMainFile(pkgName),
      exports: {
        import: this.getEsmOutput(pkgName),
        default: this.getMainFile(pkgName)
      },
      module: this.getEsmOutput(pkgName)
    }

    if (this.isTargetingBrowser) {
      pkgJsonValues.browser= this.getUmdOutput(pkgName)
    }
    
    if (this.linter == 'eslint') {
      const eslintConfigPath = getEslintConfigPath(this)
      pkgJsonValues['eslintConfig']= {"extends": [eslintConfigPath]}
    }
  
    if (this.transpiler == 'babel') {
      const babelConfigPath = getBabelConfigPath(this)
      pkgJsonValues['babel']= {"extends": babelConfigPath}
      
    }

    return pkgJsonValues
  }
}

