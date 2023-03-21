import { XeiraContextFiles } from "./XeiraContextFiles.mjs"

export class XeiraContext extends XeiraContextFiles {
  constructor(config, pkgPath, pkgJson) {
    super(config, pkgPath, pkgJson)
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