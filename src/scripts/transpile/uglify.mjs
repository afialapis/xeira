import UglifyJS from 'uglify-js'
import {getUglifyConfig} from '../../config/uglify.mjs'

async function minimifyWithUglify(context, code) {
  const uglifyCfg = await getUglifyConfig(context);
  try {
    
    const result= UglifyJS.minify(code, uglifyCfg);
    return result.code

  } catch(e) {
    context.log_error('transpile', `Error uglyfying`)
    context.log_error('transpile', `Uglify config is: ${JSON.stringify(uglifyCfg)}`)
    context.log_error('transpile', `Error trace:`)
    console.error(e)  
    return code  
  }
}


export {
  minimifyWithUglify
}
 
 