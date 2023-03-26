import path from 'path'
import { existsSync, readdirSync } from 'fs'
import defConfig from '../../configs/xeira.mjs'
import { log_error } from '../utils/log.mjs'

function getFilterPatternFromArgv(argv, aliases) {
  if (argv?.filter != undefined) {
    return argv.filter
  }
 
  const alias= aliases?.filter
  if (alias!=undefined) {
    if (alias in argv) {
      return argv[alias]
    }
  }

  return undefined
}

function _compare(str, rule) {
  // https://stackoverflow.com/a/32402438

  // for this solution to work on any string, no matter what characters it has
  const escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"); // eslint-disable-line

  // "."  => Find a single character, except newline or line terminator
  // ".*" => Matches any string that contains zero or more characters
  rule = rule.split("*").map(escapeRegex).join(".*");

  // "^"  => Matches any string with the following at the beginning of it
  // "$"  => Matches any string with that in front at the end of it
  rule = "^" + rule + "$"

  //Create a regular expression object for matching string
  const regex = new RegExp(rule);

  //Returns true if it finds a match, otherwise it returns false
  return regex.test(str);
}


function getContextFolders(folder, filterPattern= undefined) {
  if (!filterPattern) {
    return [folder]
  }

  const filterPatternWithPath = (filterPattern.indexOf('.')==0)
    ? filterPattern
    : path.join(folder, 'packages', filterPattern)
  
  const baseFolder = path.dirname(filterPatternWithPath)

  if (!existsSync(baseFolder)) {
    const msg= `Folder ${baseFolder} does not exist!`
    log_error('context', msg)
    return []
  }

  const matchPattern = path.basename(filterPatternWithPath)
  const folders = 
    readdirSync(baseFolder, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .filter(dirent => _compare(dirent.name, matchPattern))
    .map(dirent => path.join(baseFolder, dirent.name))
    
  return folders
}

function _parseArgvValue (v) {
  return v==='true'
  ? true
  : v==='false'
  ? false
  : ((v=='null') || (v=='undefined') || (v=='none') || (v=='') || (v==undefined))
  ? undefined
  : v   
}


function getConfigFromArgv(argv, aliases) {

  let config= {}

  const valid_keys= Object.keys(defConfig)
  valid_keys.map(k => {
    if (k in argv) {
      config[k]= _parseArgvValue(argv[k])
    }
    if (aliases) {
      const alias = aliases[k]
      if (alias) {
        if (alias in argv) {
          config[k]= _parseArgvValue(argv[alias])
        }
      }
    }
  })

  return config
}

function getFlyOptionsFromArgv(argv, aliases) {
  const valid_keys= Object.keys(defConfig)

  let config= {}

  Object.keys(argv).map(k => {
    if (! (k in valid_keys)) {
      let name= k
      if (aliases) {
        Object.entries(aliases).map( ([ak,av]) => {
          if (k==av) {
            name= ak
          }
        })
      }      
      config[name] = _parseArgvValue(argv[k])
    }
  })

  return config
}






export {
  getFilterPatternFromArgv,
  getContextFolders,
  getConfigFromArgv,
  getFlyOptionsFromArgv
}
