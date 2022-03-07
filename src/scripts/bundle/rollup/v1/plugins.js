const {externals} = require('rollup-plugin-node-externals')
const replace = require('@rollup/plugin-replace')
const {babel, getBabelOutputPlugin} = require('@rollup/plugin-babel')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const { terser } = require('rollup-plugin-terser')
const NODE_ENV = 'production'


const rollupInputPlugins= (xeiraConfig) => {
  return [
    externals({
      deps: true
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      /*https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers*/
      
      // TODO
      //  xeiraConfig.isAnApp()
      //  ? 'runtime' https://github.com/rollup/plugins/tree/master/packages/babel#injected-helpers
      //  : bundled
      
      babelHelpers: 'bundled',
      
      
      ... xeiraConfig.usesReact
         ? {presets: ['@babel/preset-env', '@babel/preset-react']}
         : {}      
    })
  ]

}

const rollupOutputPlugins= (withBabel, withTerser) => {
  let plugins= []
  /*if (withBabel) {
    plugins.push(
      getBabelOutputPlugin({ presets: ['@babel/preset-env'] })
    )    
  }*/
  if (withTerser) {
    plugins.push(
      terser()
    )
  }

  return plugins 
}



module.exports = {
  rollupInputPlugins,
  rollupOutputPlugins
}