import externals from 'rollup-plugin-node-externals'
import json from '@rollup/plugin-json'
import {babel} from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import { getRollupPluginForResolvingAliases } from  '../../../../utils/aliases.mjs'
import { getBabelConfig } from '../../../../config/babel.mjs'

const NODE_ENV = 'development'

const makeSimpleConfig = async (context, name, input, output) => {
  const customBabelConfig= {
    exclude: 'node_modules/**',
    /*https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers*/
    babelHelpers: 'bundled'
  }

  const mergedBabelConfig= await getBabelConfig(context, input, customBabelConfig)

  return {
    input: input,
    output: {
      file: output,
      format: 'iife', // umd, iife because of nollup
      name: name
    },
    plugins: [
      ...getRollupPluginForResolvingAliases(context.pkgPath),
      json(),
      replace({
        preventAssignment: true,
        'global.process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      babel(mergedBabelConfig),
      externals(),
      nodeResolve(),
      commonjs(),
      scss({
        extract: true,
        plugins: [
          autoprefixer()
        ],
        use: {
          sass: {
            silenceDeprecations: ['legacy-js-api'],
          }
        }        
      })
    ]
  }
}

export {makeSimpleConfig}