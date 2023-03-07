async function getUglifyConfig (_context) {
  const config = await import('../../configs/uglify.mjs')
  return config.default
}

export {
  getUglifyConfig
}