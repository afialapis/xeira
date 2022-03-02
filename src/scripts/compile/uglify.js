 const UglifyJS = require("uglify-js");
 
function minimifyWithUglify(xeiraConfig, code) {
  const {getUglifyConfig} = require('../../config/uglify');
  const uglifyCfg = getUglifyConfig(xeiraConfig);

  const result= UglifyJS.minify(code, uglifyCfg);

  return result.code
}


module.exports = {
  minimifyWithUglify
}
 
 