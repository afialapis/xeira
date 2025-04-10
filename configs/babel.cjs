module.exports= { 
  presets: [
    ["@babel/preset-env", {"targets": {"esmodules": true}}]
  ],
  plugins: [
    // "babel-plugin-transform-import-meta"
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ]
}
