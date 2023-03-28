import {cxeira, cwarn, ccmd, cerror} from './colors.mjs'

function log_info(cmd, s) {
  console.log(`${cxeira('xeira')} ${ccmd(cmd)} ${s}`)
}

function log_warn(cmd, s) {
    console.log(`${cxeira('xeira')} ${ccmd(cmd)} ${cwarn(s)}`)
}

function log_error(cmd, s) {
  console.log(`${cxeira('xeira')} ${ccmd(cmd)} ${cerror(s)}`)
}

export {log_info, log_warn, log_error}