
require("@babel/register")({
  presets: [
    ["@babel/preset-env", {
      "targets": {"esmodules": true}
    }],
    "@babel/preset-react"
  ],
  plugins: []  
});
