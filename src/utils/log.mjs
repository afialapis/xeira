import {cyan_light, yellow_light, blue_light, red_light} from './colors.mjs'

function log_info(xeiraConfig, cmd, s) {
  if (xeiraConfig.beVerbose()) {
    console.log(`${cyan_light('xeira')} [${blue_light(cmd)}] ${s}`)
  }
}

function log_warn(cmd, s) {
    console.log(`${cyan_light('xeira')} [${blue_light(cmd)}] ${yellow_light(s)}`)
}

function log_error(cmd, s) {
  console.log(`${cyan_light('xeira')} [${blue_light(cmd)}] ${red_light(s)}`)
}

function log_always(cmd, s) {
  console.log(`${cyan_light('xeira')} [${blue_light(cmd)}] ${s}`)
}


export {log_info, log_warn, log_error, log_always}