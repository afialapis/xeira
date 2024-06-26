import {diffLines} from 'diff'
import fs from 'fs'
import path from 'path'
import {cerror, cok, cwarn, cfilename} from '../utils/colors.mjs'
import { log_info, log_error } from '../utils/log.mjs'

function _parseDiff (diff) {
  let ok= true
  let msgs= []

  diff.map(part => {
    const color = 
      part.added 
      ? cok 
      : part.removed 
        ? cerror
        : cwarn

    if (part.added || part.removed) {
      ok= false
      let msg = ''
      if (part.value.length>100) {
        msg= color(part.value.substr(0,97) + '...')
      } else {
        msg= color(part.value)
      }
      msgs.push(msg)
    }
  })

  return [ok, msgs]
}

function _getFolderFiles (dir, files = []) {
  const dirFiles = fs.readdirSync(dir)
  for (const f of dirFiles) {
    const fPath= path.join(dir, f)
      const stat = fs.lstatSync(fPath)
      if (stat.isDirectory()) {
        _getFolderFiles(fPath, files)
      } else {
          files.push(fPath)
      }
  }
  return files
}

function _getRelativeBasename (pkgPath, filePath) {
  let relPath= filePath.replace(pkgPath, '')
  if (relPath.indexOf(path.sep)==0) {
    relPath= relPath.slice(1)
  }
  return relPath
}

function _compareTwoFiles (a, b) {
  const buff_a = fs.readFileSync(a, {encoding: 'utf-8'})
  const buff_b = fs.readFileSync(b, {encoding: 'utf-8'})
  
  const diff = diffLines(buff_a, buff_b);
  const [ok, msgs]= _parseDiff(diff)
  return [ok, msgs]
}

function _compareTwoFolders (pkgPath, aFolder, bFolder, debug= false) {
  const a= path.join(pkgPath, aFolder)
  const b= path.join(pkgPath, bFolder)

  const aFilenames = _getFolderFiles(a)
  const bFilenames = _getFolderFiles(b)
  
  const aRelativeNames = aFilenames.map(n => _getRelativeBasename(a, n))
  const bRelativeNames = bFilenames.map(n => _getRelativeBasename(b, n))

  let filesUnwanted = bRelativeNames.filter(n => aRelativeNames.indexOf(n)<0)
  let filesOmitted = aRelativeNames.filter(n => bRelativeNames.indexOf(n)<0)
  let filesOk= []
  let filesWithDiff= {}

  for (const aRelativeName of aRelativeNames) {
    if (bRelativeNames.indexOf(aRelativeName)>=0) {
      const path_a= path.join(a, aRelativeName)
      const path_b= path.join(b, aRelativeName)

      const [ok, msgs]= _compareTwoFiles(path_a, path_b)

      if (debug) {
        log_info('diff', `Compared file ${cfilename(aRelativeName)}: ${ok ? cok('Ok!') : cerror('ko :(')}`)
      }
      
      if (! ok) {
        filesWithDiff[aRelativeName]= msgs
      } else {
        filesOk.push(aRelativeName)
      }
      
    }
    
  }

  return [filesOk, filesWithDiff, filesOmitted, filesUnwanted]
}


function _compareTwoBuilds (pkgPath, distFolder, truthFolder, debug= false)
{
  

  const [_filesOk, filesWithDiff, filesOmitted, filesUnwanted]= _compareTwoFolders(pkgPath, truthFolder, distFolder, debug)

  const all_ok = (Object.keys(filesWithDiff).length + filesOmitted.length + filesUnwanted.length) == 0

  if (all_ok) {
    //if (debug) {
      log_info('diff', `${cok('All files are ok!')}`)
    //}
    return true
  }

  filesOmitted.map(f => 
    log_info('diff', `${cfilename(f)} ${cerror('is not present in')} ${cfilename(distFolder)}`))

    filesUnwanted.map(f => 
    log_info('diff', `${cfilename(f)} ${cerror('is present in')} ${cfilename(distFolder)} ${cerror('but it should not')}`))
  
  Object.entries(filesWithDiff).map(([f, msgs]) => {
    log_info('diff', ` `)
    log_info('diff', `Differences:`)
    log_info('diff', ` `)
    log_info('diff', `${cfilename(f)}:`)
    msgs.map(msg => console.log(msg))
  })

  return false
}

const pkgPath= process.env.PWD

const args = process.argv.slice(2)

const distFolder = args[0]
const truthFolder = args[1]
const debug = args[2] || false

const distPath = path.join(pkgPath, distFolder)
if (! fs.existsSync(distPath)) {
  let err= `Folder ${distPath} does not exist`
  log_error('diff', err)
  throw new Error(err)
}

const truthPath = path.join(pkgPath, truthFolder)
if (! fs.existsSync(truthPath)) {
  let err= `Folder ${truthPath} does not exist`
  log_error('diff', err)
  throw new Error(err)
}

const ok= _compareTwoBuilds (pkgPath, distFolder, truthFolder, debug)

process.exit(ok===true ? 1 : 0)
