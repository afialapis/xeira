import {externals} from 'rollup-plugin-node-externals'
import {babel} from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-postcss'

const NODE_ENV = 'development'

const makeSimpleConfig = (pkgName, input, output) => {
  return {
    input: input,
    output: {
      file: output,
      format: 'iife', // umd, iife because of nollup
      name: pkgName
    },
    plugins: [
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      babel({
        exclude: 'node_modules/**',
        /*https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers*/
        babelHelpers: 'bundled'
      }),
      externals(),
      nodeResolve(),
      commonjs(),
      scss()
    ]
  }
}

export {makeSimpleConfig}