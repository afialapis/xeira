import {externals} from 'rollup-plugin-node-externals'
import replace from '@rollup/plugin-replace'
import {babel} from '@rollup/plugin-babel'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-postcss'
import {rollupBanner} from './banner.mjs'
import { getRollupPluginForResolvingAliases } from '../../../utils/aliases.mjs'
const NODE_ENV = 'production'


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
      ...getRollupPluginForResolvingAliases(pkgPath),
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
      }),      
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
      scss()
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


export {
  rollupModulesForUmd
}