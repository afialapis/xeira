export default { 
  presets: [
    ["@babel/preset-env", {"targets": {"esmodules": true}}],
    "@babel/preset-react"
  ],
  plugins: [
    // "babel-plugin-transform-import-meta"
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ]
}


