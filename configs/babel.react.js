const base = require('./babel')

module.exports= {
  presets: [
    ...base.presets,
    "@babel/preset-react"
  ],
  plugins: [
    ...base.plugins
  ]
}
