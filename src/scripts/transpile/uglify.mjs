import UglifyJS from 'uglify-js'
import {getUglifyConfig} from '../../config/uglify.mjs'

async function minimifyWithUglify(xeiraConfig, code) {
  const uglifyCfg = await getUglifyConfig(xeiraConfig);

  const result= UglifyJS.minify(code, uglifyCfg);

  return result.code
}


export {
  minimifyWithUglify
}
 
 