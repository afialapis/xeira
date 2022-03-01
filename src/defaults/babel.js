function getBabelConfig (xeiraConfig) { 
  let presets= [
    ["@babel/preset-env", {"targets": {"esmodules": true}}]
  ]
  if (xeiraConfig.usesReact) {
    presets.append("@babel/preset-react")
  }
  return {
    presets,
    plugins: []
  }
}

module.exports= {
  getBabelConfig
}