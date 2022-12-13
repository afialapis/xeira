import {cyan} from 'farrapa-colors'
//import {externals} from 'rollup-plugin-node-externals'
import {babel} from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { getRollupPluginForResolvingAliases } from  '../../../../utils/aliases.mjs'

const NODE_ENV = 'development'

const makeSimpleConfig = (pkgPath, pkgName, input, output, contentBase, port) => {
  const inputOptions= {
    input: input,
    plugins: [
      ...getRollupPluginForResolvingAliases(pkgPath),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      babel({
        exclude: 'node_modules/**',
        /*https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers*/
        babelHelpers: 'bundled'
      }),
      //externals(),
      nodeResolve(),
      commonjs(),
      scss(),
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
          console.log(`[xeira][demo] Server listening at ${cyan(`${protocol}://${host}:${address.port}/`)}`)
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
    name: pkgName
  }

  return [inputOptions, outputOptions]

}

export {makeSimpleConfig}