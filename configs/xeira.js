module.exports= {
  // Probably offering alternatives some day
  linter: 'eslint', // 'none'
  transpiler: 'babel', // 'none'
  minifier: 'uglify', // 'none'
  bundler: 'rollup', // 'webpack', 'esbuild'

  product: 'package', // 'app',
  target: 'node', // 'browser', 'all',
  react: false,

  // This can be previously tried to be guessed (/packages or .pnpm-workspace.yaml),
  // if not, ask anyway
  monorepo: false
}