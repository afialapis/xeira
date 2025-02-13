
import path from 'path'
//import externals from 'rollup-plugin-node-externals'
import json from '@rollup/plugin-json'
import {babel} from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import polyfillNode from 'rollup-plugin-polyfill-node'
import scss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

import { readJsonFile } from '../../../utils/json.mjs'
import { getJSValidPkgName } from '../../../utils/names.mjs'
import {cfilename} from '../../../utils/colors.mjs'
import { getRollupPluginForResolvingAliases } from  '../../../utils/aliases.mjs'
import { getBabelConfig } from '../../../config/babel.mjs'


const NODE_ENV = 'development'

const makeSimpleConfig = async (context, devDefaults, callback) => {


  const pkgJson = await readJsonFile(path.join(context.pkgPath ,'package.json'))
  const name = getJSValidPkgName(pkgJson.name)
  
  const input = context.sourceIndex
  const contentBase = devDefaults.contentBase
  const output = devDefaults.output
  const host = context?.options?.host || devDefaults.host
  const port = context?.options?.port || devDefaults.port

  const customBabelConfig= {
    exclude: 'node_modules/**',
    /*https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers*/
    babelHelpers: 'bundled',

    presets: [
      ["@babel/preset-env", { 
        bugfixes: true,
        loose: true 
      }],
      ... context.usesReact
        ? ['@babel/preset-react']
        : []
    ]
  }

  const mergedBabelConfig= await getBabelConfig(context, input, customBabelConfig)

  const polyfill = context.polyfillNode
    ? [polyfillNode()]
    : []

  const inputOptions= {
    input: input,
    plugins: [
      replace({
        preventAssignment: true,
        'global.process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      babel(mergedBabelConfig),
      commonjs({
        esmExternals: true
      }),
      ...getRollupPluginForResolvingAliases(context.pkgPath),
      json(),
      ...polyfill,
      //externals({
      //  packagePath: pkgJsonPath,
      //  deps: !bundleDeps,
      //  peerDeps: !bundleDeps
      //}),
      nodeResolve({
        rootDir: context.pkgPath,
        exportConditions: ['node'],
      }),
      scss({
        extract: true,
        plugins: [
          autoprefixer()
        ],
        use: {
          sass: {
            silenceDeprecations: ['legacy-js-api'],
          }
        },        
      }),
      serve({
        contentBase: contentBase,
        host: host,
        port: port,
        verbose: context.beVerbose(),  
        historyApiFallback: devDefaults.historyApiFallback,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        // execute function after server has begun listening
        onListening: function (server) {
          const address = server.address()
          const ahost = address.address === '::' ? host : address.address
          // by using a bound function, we can access options as `this`
          const protocol = this.https ? 'https' : 'http'
          context.log_always('dev', `Server listening at ${cfilename(`${protocol}://${ahost}:${address.port}/`)}`)

          if (callback) {
            callback(server)
          }
        }        
      }),
      livereload({
        watch: contentBase,
        port: 35729,
        verbose: context.beVerbose(),
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