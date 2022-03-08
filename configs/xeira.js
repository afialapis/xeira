module.exports= {

  product: 'package', // 'app',
  target: 'node', // 'browser', 'all',

  source_index: './src/index.js', // 'index.js'

  // Probably offering alternatives some day
  linter: 'eslint', // 'none'
  
  transpile_folder: 'none', // './lib
  transpiler: 'babel', // 'none'
  minifier: 'uglify', // 'none'

  bundle_folder: './dist', // './build', './lib'
  bundler: 'rollup', // 'webpack', 'esbuild'

  react: false,

  // This can be previously tried to be guessed (/packages or .pnpm-workspace.yaml),
  // if not, ask anyway
  monorepo: false
}
