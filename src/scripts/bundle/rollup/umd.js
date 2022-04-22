const {externals} = require('rollup-plugin-node-externals')
const replace = require('@rollup/plugin-replace')
const {babel} = require('@rollup/plugin-babel')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const { terser } = require('rollup-plugin-terser')
const NODE_ENV = 'production'
const {rollupBanner} = require('./banner')

const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');

function toTitleCase(str) {
  let s= str.replace(
    /\w*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  )
  s= s.charAt(0).toLowerCase() + s.substr(1);
  s= s.replace(/-/g,'')
  return s
}


const makeGlobals = (pkgJson) => {
  const pkgs= Object.keys(pkgJson.dependencies)
  const globals= {}
  pkgs.map((n) => {
    globals[n]= toTitleCase(n)
  })
  return globals
}


function rollupModulesForUmd(xeiraConfig, pkgPath, pkgJsonPath, pkgJson, input, output, bundleDeps= false) {

  const inputOptions= {
    input,
    plugins: [
      externals({
        packagePath: pkgJsonPath,
        deps: !bundleDeps,
        peerDeps: !bundleDeps
      }),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      nodeResolve({
        rootDir: pkgPath,
        exportConditions: ['node'],
      }),
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
          ["@babel/preset-env", { 
            bugfixes: true,
            loose: true 
          }],
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
      format: 'umd',
      exports: 'named',
      banner: rollupBanner(pkgJson),
      sourcemap: true,
      name: toTitleCase(pkgJson.name),
      globals: makeGlobals(pkgJson)      
    },
    {
      file: minifyExtension(output),
      format: 'umd',
      exports: 'named',
      banner: rollupBanner(pkgJson),
      plugins: [
        terser({ ecma: 8, safari10: true })
      ],
      name: toTitleCase(pkgJson.name),
      globals: makeGlobals(pkgJson)   
    }    
  ]

  return[inputOptions, outputs]
}


module.exports= {
  rollupModulesForUmd
}