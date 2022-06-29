async function getUglifyConfig (_xeiraConfig) {
  const config = await import('../../configs/uglify.mjs')
  return config.default
}

export {
  getUglifyConfig
}