import UglifyJS from 'uglify-js'
import {getUglifyConfig} from '../../config/uglify.mjs'

async function minimifyWithUglify(context, code) {
  const uglifyCfg = await getUglifyConfig(context);

  const result= UglifyJS.minify(code, uglifyCfg);

  return result.code
}


export {
  minimifyWithUglify
}
 
 