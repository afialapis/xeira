const {rollupInputPlugins} = require('./plugins')


const rollupInput = (pkgPath, pkgJson) => {
  const _inputPlugins= rollupInputPlugins()

  return {
    input: pkgJson.main,
    plugins: _inputPlugins
  }
}


module.exports = {
  rollupInput
}