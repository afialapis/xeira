import { XeiraContextFiles } from "./XeiraContextFiles.mjs"
import * as _log from '../utils/log.mjs'

export class XeiraContext extends XeiraContextFiles {
  constructor(config, pkgPath, pkgJson, options) {
    super(config, pkgPath, pkgJson, options)
  }

  get usesReact() {
    try {
      if ('react' in this.pkgJson.dependencies) {
        return true
      }
    } catch (_) {}

    try {
      if ('react' in this.pkgJson.peerDependencies) {
        return true
      }
    } catch (_) {}

    try {
      if ('react' in this.pkgJson.devDependencies) {
        return true
      }
    } catch (_) {}

    try {
      if ('miolo' in this.pkgJson.dependencies) {
        return true
      }
    } catch (_) {}

    try {
      if ('miolo' in this.pkgJson.peerDependencies) {
        return true
      }
    } catch (_) {}

    try {
      if ('miolo' in this.pkgJson.devDependencies) {
        return true
      }
    } catch (_) {}
    
    
    return false
  }

  log_info(cmd, s) {
    if (this.beVerbose()) {
      _log.log_info(cmd, s)
    }
  }
  
  log_warn(cmd, s) {
    _log.log_warn(cmd, s)
  }
  
  log_error(cmd, s) {
    _log.log_error(cmd, s)
  }
  
  log_always(cmd, s) {
    _log.log_info(cmd, s)
  }
}








