const {externals} = require('rollup-plugin-node-externals')
const replace = require('@rollup/plugin-replace')
const {babel} = require('@rollup/plugin-babel')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const NODE_ENV = 'production'

const {rollupBanner} = require('./banner')

function rollupModulesForEsmNode(xeiraConfig, pkgJson, input, output) {
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
      commonjs({
        esmExternals: true
      }),
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
      file: output,
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
