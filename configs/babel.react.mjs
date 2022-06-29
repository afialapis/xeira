import base from './babel.mjs'

export default {
  presets: [
    ...base.presets,
    "@babel/preset-react"
  ],
  plugins: [
    ...base.plugins
  ]
}
