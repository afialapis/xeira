const {externals} = require('rollup-plugin-node-externals')
const replace = require('@rollup/plugin-replace')
const {babel} = require('@rollup/plugin-babel')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const { terser } = require('rollup-plugin-terser')
const NODE_ENV = 'production'


const rollupInputPlugins= () => {
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
      babelHelpers: 'bundled',
      /*
      presets: [
          ["@babel/preset-env", {"targets": {"esmodules": true}}]
      ]
      */
    })
  ]

}

const rollupOutputPlugins= (withTerser) => {
  let plugins= [
  ]
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