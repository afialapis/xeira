const {rollupInputPlugins} = require('./plugins')


const rollupInput = (pkgPath, pkgJson, xeiraConfig) => {
  const _inputPlugins= rollupInputPlugins(xeiraConfig)

  return {
    input: pkgJson.main,
    plugins: _inputPlugins
  }
}


module.exports = {
  rollupInput
}