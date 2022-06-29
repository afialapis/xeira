const base = require('./babel.cjs')

module.exports = {
  presets: [
    ...base.presets,
    "@babel/preset-react"
  ],
  plugins: [
    ...base.plugins
  ]
}
