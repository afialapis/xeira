import { XeiraContextConfig } from "./XeiraContextConfig.mjs"

export class XeiraContext extends XeiraContextConfig {
  constructor(config, pkgPath, pkgJson) {
    super(config, pkgJson.name)
    this.pkgPath= pkgPath
    this.pkgJson= pkgJson
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
    
    
    return false
  }
}