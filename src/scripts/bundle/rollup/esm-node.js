const path = require('path')
const {externals} = require('rollup-plugin-node-externals')
const replace = require('@rollup/plugin-replace')
const {babel} = require('@rollup/plugin-babel')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
//const { terser } = require('rollup-plugin-terser')
const NODE_ENV = 'production'

const addSuffix = pathToFile => pathToFile.replace(/\.js$/, '.node.js');
const {rollupBanner} = require('./banner')

function rollupModulesForEsmNode(xeiraConfig, pkgPath, pkgJson, input) {
  const module_file = path.join(pkgPath, pkgJson.module)

  const inputOptions= {
    input,
    plugins: [
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
        exclude: /node_modules/,
        /*https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers*/
        
        // TODO
        //  xeiraConfig.isAnApp()
        //  ? 'runtime' https://github.com/rollup/plugins/tree/master/packages/babel#injected-helpers
        //  : bundled
        
        babelHelpers: 'bundled',

        presets: [
          ["@babel/preset-env", { loose: true }],
          ... xeiraConfig.usesReact
            ? ['@babel/preset-react']
            : []
        ]
      })
    ]
  }

  const outputs= [
    {
      file: addSuffix(module_file),
      format: 'esm',
      exports: 'named',
      banner: rollupBanner(pkgJson)
    }
  ]

  return[inputOptions, outputs]
}


module.exports= {
  rollupModulesForEsmNode
}