import { helpAliases } from "./help.mjs"
import { monoAliases } from "./monorepo.mjs"

export function buildChecker(aliases, configOptions) {
  const options = ['watch']
  if (aliases) {
    Object.entries(aliases).map(([k, v]) => {
      options.push(k)
      options.push(v)
    })
  }
  const checker = (argv) => {
    let err= undefined
    Object.keys(argv).map((k) => {
      if ([...options, ...helpAliases, ...configOptions, ...monoAliases].indexOf(k)<0) {
        err= `Invalid option ${k}`
        return
      }
    })
    return err  
  }
  
  return checker
}