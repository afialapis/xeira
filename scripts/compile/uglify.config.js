module.exports= function getUglifyConfig (xeiraConfig) {
  return {
    toplevel: true,
    compress: {
      passes: 2
    },
    output: {
      beautify: false,
      preamble: 
  `/** 
  * uglified by xeira using uglify-js
  */`
    }    
  }
}
