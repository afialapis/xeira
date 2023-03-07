import { XeiraContextConfig } from "./XeiraContextConfig.mjs"

export class XeiraContext extends XeiraContextConfig {
  constructor(config, pkgPath, pkgJson) {
    super(config, pkgJson.name)
    this.pkgPath= pkgPath
    this.pkgJson= pkgJson
  }
}