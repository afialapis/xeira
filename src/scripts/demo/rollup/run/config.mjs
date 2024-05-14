
//import externals from 'rollup-plugin-node-externals'
import json from '@rollup/plugin-json'
import {babel} from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

import {cfilename} from '../../../../utils/colors.mjs'
import { getRollupPluginForResolvingAliases } from  '../../../../utils/aliases.mjs'
import { getBabelConfig } from '../../../../config/babel.mjs'

const NODE_ENV = 'development'

const makeSimpleConfig = async (context, name, input, output, contentBase, port) => {

  const customBabelConfig= {
    exclude: 'node_modules/**',
    /*https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers*/
    babelHelpers: 'bundled'
  }

  const mergedBabelConfig= await getBabelConfig(context, input, customBabelConfig)

  const inputOptions= {
    input: input,
    plugins: [
      ...getRollupPluginForResolvingAliases(context.pkgPath),
      json(),
      replace({
        preventAssignment: true,
        'global.process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      babel(mergedBabelConfig),
      //externals(),
      nodeResolve(),
      commonjs(),
      scss({
        extract: true,
        plugins: [
          autoprefixer()
        ]
      }),
      serve({
        contentBase: contentBase,
        host: 'localhost',
        port: port,
        verbose: false,  
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        // execute function after server has begun listening
        onListening: function (server) {
          const address = server.address()
          const host = address.address === '::' ? 'localhost' : address.address
          // by using a bound function, we can access options as `this`
          const protocol = this.https ? 'https' : 'http'
          context.log_always('demo', `Server listening at ${cfilename(`${protocol}://${host}:${address.port}/`)}`)
        }        
      }),
      livereload({
        watch: contentBase,
        port: 35729,
        verbose: false,
        delay: 200
      })
    ]
  }

  const outputOptions= {
    file: output,
    format: 'iife', // umd, iife because of nollup
    name: name
  }

  return [inputOptions, outputOptions]

}

export {makeSimpleConfig}