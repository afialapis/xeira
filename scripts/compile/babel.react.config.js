const config = require('./babel.config')

module.exports= {
  ...config,
  "presets": [
    ...config.presets,
    "@babel/preset-react"
  ]
}