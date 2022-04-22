const {externals} = require('rollup-plugin-node-externals')
const replace = require('@rollup/plugin-replace')
const {babel} = require('@rollup/plugin-babel')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const { terser } = require('rollup-plugin-terser')
const NODE_ENV = 'production'

const minifyExtension = pathToFile => pathToFile.replace(/\.mjs$/, '.min.mjs');
const {rollupBanner} = require('./banner')

function rollupModulesForEsm(xeiraConfig, pkgPath, pkgJsonPath, pkgJson, input, output) {

  const inputOptions= {
    input,
    plugins: [
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      externals({
        packagePath: pkgJsonPath
      }),
      nodeResolve({
        rootDir: pkgPath,
        exportConditions: ['node'],
      }),
      commonjs({
        esmExternals: true
      }),
      babel({
        exclude: 'node_modules/**',
        /*https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers*/
        
        // TODO
        //  xeiraConfig.isAnApp()
        //  ? 'runtime' https://github.com/rollup/plugins/tree/master/packages/babel#injected-helpers
        //  : bundled
        
        babelHelpers: 'bundled',

        presets: [
          [ "@babel/preset-modules",
            {
              // Don't spoof `.name` for Arrow Functions, which breaks when minified anyway.
              loose: true,
            },
          ],
          ... xeiraConfig.usesReact
            ? [ "@babel/preset-react",
                {
                  // Compile JSX Spread to Object.assign(), which is reliable in ESM browsers.
                  useBuiltIns: true,
                },
              ]
            : [],
        ]
      })
    ]
  }

  const outputs= [
    {
      file: output,
      format: 'es',
      exports: 'named',
      banner: rollupBanner(pkgJson),
      sourcemap: true
    },
    {
      file: minifyExtension(output),
      format: 'es',
      exports: 'named',
      banner: rollupBanner(pkgJson),
      plugins: [
        terser({ ecma: 8, safari10: true })
      ]
    }    
  ]

  return[inputOptions, outputs]
}


module.exports= {
  rollupModulesForEsm
}