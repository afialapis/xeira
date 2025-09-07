const register = require("@babel/register");

register({
  presets: [
    ["@babel/preset-env", {
      "targets": {"esmodules": true}
    }],
    "@babel/preset-react"
  ],
  plugins: []
})

