// const UGLIFY_PREAMBLE= `/** 
// * uglified by xeira using uglify-js
// */`

export default {
  toplevel: true,
  compress: {
    passes: 2
  },
  output: {
    beautify: false,
    // preamble: UGLIFY_PREAMBLE
  }    
}