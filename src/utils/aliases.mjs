import path from 'path'
import { existsSync } from 'node:fs';
import {readJsonFileSync} from './json.mjs'
import { resolvePath } from 'babel-plugin-module-resolver'
import alias_plugin from '@rollup/plugin-alias';
import {red} from 'farrapa-colors'

/*
const _parseExport = (o) => {
  if (Object.keys(o).length==0) {
    return undefined
  }


  if (o?.default != undefined) {
    return o.default
  }
  return o
}

const _loadFromJs = async (pkgPath, ext= '.js') => {
  const jsFile = path.join(pkgPath, 'aliases'+ext)
  if (existsSync(jsFile)) {
    const aliases = await import(jsFile)
    return _parseExport(aliases)
  }
  return undefined
}


async function _aliasesRead (pkgPath) {
  try {
    for (const ext of ['.js', '.mjs', '.cjs']) {
      const aliases= await _loadFromJs(pkgPath, ext)
      if (aliases!=undefined) {
        return aliases
      }
    }

    const jsonFile = path.join(pkgPath, 'aliases.json')
    if (existsSync(jsonFile)) {
      const aliases = await readJsonFile(jsonFile)
      return _parseExport(aliases)
    }
  } catch(e) {
    console.error(`[xeira] Error searching aliases:`)
    console.error(e)
  }
  return undefined
}
*/

function _aliasesRead (pkgPath) {
  try {

    const jsonFile = path.join(pkgPath, 'jsconfig.json')
    if (! existsSync(jsonFile)) {
      return undefined
    }
    const jsConf = readJsonFileSync(jsonFile)
    const rpaths = jsConf?.compilerOptions?.paths
    if (rpaths==undefined) {
      return undefined
    }
    const baseUrl= jsConf?.compilerOptions?.baseUrl || '.'
    let aliases= {}
    Object.keys(rpaths).map(alias => {
      const rpath= rpaths[alias][0]
      aliases[alias]= path.join(pkgPath, baseUrl, rpath)

      if (alias.indexOf('*')>=0) {
        console.error(`[xeira] Aliases error: ${red("don't use wildcards on aliases, it may not work here")}.`)
      }
    })
    return aliases
  } catch(e) {
    console.error(`[xeira] Error searching aliases:`)
    console.error(red(e))
  }
  return undefined
}




function getBabelPluginForResolvingAliases (xeiraConfig, pkgPath) { 
  const aliases = _aliasesRead(pkgPath)
  if (!aliases) {
    return undefined
  }

  const aliasNames= Object.keys(aliases)

  // console.log(`Adding aliases. Root ${path.join(pkgPath, path.dirname(xeiraConfig.sourceIndex))}. Aliases ${JSON.stringify(aliases)}`)
  const plugin=
    ['babel-plugin-module-resolver', {
      "root": [path.join(pkgPath, path.dirname(xeiraConfig.sourceIndex))],
      "alias": aliases,
      resolvePath: (sourcePath, currentFile, opts) => {
        /**
         * The `opts` argument is the options object that is passed through the Babel config.
         * opts = {
         *   extensions: [".js"],
         *   resolvePath: ...,
         * }
         */
        let rPath= resolvePath(sourcePath, currentFile, opts)

        // relativize paths
        for (const alias of aliasNames) {
          if (sourcePath.indexOf(alias)==0) {
            rPath= rPath.replace(opts.root, '.')
          }
        }
        
        // console.log(`resolving ${sourcePath} ${currentFile} ${JSON.stringify(opts) }==> ${rPath}`)
        return rPath
      }

    }]
  
  return plugin
}


function getRollupPluginForResolvingAliases (pkgPath) { 
  const aliases = _aliasesRead(pkgPath)
  if (!aliases) {
    return []
  }

  let entries= []

  Object.keys(aliases).map(alias => {
    const fullPath= aliases[alias]
    const relPath= path.relative(pkgPath, fullPath)
    entries.push({
      find: alias, replacement: relPath
    })
  })

  const plugin= alias_plugin({
    entries
  })

  return [plugin]
}


export {getBabelPluginForResolvingAliases, getRollupPluginForResolvingAliases}