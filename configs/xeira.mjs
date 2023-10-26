export default {

  product: 'package', // 'app',
  target: 'node', // 'browser', 'both',

  source_index: './src/index.js', // 'index.js',

  // Probably offering alternatives some day
  linter: 'eslint', // undefined
  
  transpile_folder: undefined, // './lib
  transpiler: 'babel', // undefined
  minifier: 'uglify', // undefined

  bundle_folder: './dist', // './build', './lib'
  bundle_name: undefined, // package.json.name by default
  bundle_extension: undefined, 
  bundle_inline_dynamic_imports: true, // true / false
  bundle_node_polyfill: false, // true / false
  bundler: 'rollup', // 'webpack', 'esbuild'

  test_folder: './test', // './tests'
  
  dev_server: 'rollup',
  
  demo_mode: 'auto',
  demo_demoer: 'rollup',

  verbose: false
}
