export default { 
  presets: [
    ["@babel/preset-env", {"targets": {"esmodules": true}}]
  ],
  plugins: [
    "babel-plugin-transform-import-meta"
  ]
}
