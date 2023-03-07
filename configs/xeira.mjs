export default {

  product: 'package', // 'app',
  target: 'node', // 'browser', 'both',

  source_index: './src/index.js', // 'index.js',

  react: false,

  // Probably offering alternatives some day
  linter: 'eslint', // undefined
  
  transpile_folder: undefined, // './lib
  transpiler: 'babel', // undefined
  minifier: 'uglify', // undefined

  bundle_folder: './dist', // './build', './lib'
  bundler: 'rollup', // 'webpack', 'esbuild'

  test_folder: './test', // './tests'

  demo_mode: 'auto',
  demo_demoer: 'rollup',

  verbose: true
}
