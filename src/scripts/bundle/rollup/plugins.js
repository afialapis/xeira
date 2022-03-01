import autoExternal from 'rollup-plugin-node-externals'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
const NODE_ENV = 'production'


const rollupInputPlugins= () => {
  return [
    autoExternal(),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      /*https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers*/
      babelHelpers: 'bundled',
      /*
      presets: [
          ["@babel/preset-env", {"targets": {"esmodules": true}}]
      ]*/

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



export {
  rollupInputPlugins,
  rollupOutputPlugins
}