module.exports= {

  product: 'package', // 'app',
  target: 'node', // 'browser', 'both',

  source_index: './src/index.js', // 'index.js'

  // Probably offering alternatives some day
  linter: 'eslint', // undefined
  
  transpile_folder: undefined, // './lib
  transpiler: 'babel', // undefined
  minifier: 'uglify', // undefined

  bundle_folder: './dist', // './build', './lib'
  bundler: 'rollup', // 'webpack', 'esbuild'

  test_folder: './test', // './tests'

  react: false,

  // This can be previously tried to be guessed (/packages or .pnpm-workspace.yaml),
  // if not, ask anyway
  monorepo: false
}
