import {diffLines} from 'diff'
import fs from 'fs'
import path from 'path'
import {red, green, gray, cyan} from 'farrapa-colors'

function _parseDiff (diff) {
  let ok= true
  let msg= ''

  diff.map(part => {
    const color = 
      part.added 
      ? green 
      : part.removed 
        ? red
        : gray

    if (part.added || part.removed) {
      ok= false
      msg+= color(part.value)
    }
  })

  return [ok, msg]
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
  const [ok, msg]= _parseDiff(diff)
  return [ok, msg]
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

      const [ok, msg]= _compareTwoFiles(path_a, path_b)

      if (debug) {
        console.log(`[xeira][diff] Compared file ${cyan(aRelativeName)}: ${ok ? green('Ok!') : red('ko :(')}`)
      }
      
      if (! ok) {
        filesWithDiff[aRelativeName]= msg
      } else {
        filesOk.push(aRelativeName)
      }
      
    }
    
  }

  return [filesOk, filesWithDiff, filesOmitted, filesUnwanted]
}


function _compareTwoBuilds (pkgPath, distFolder, truthFolder, debug= false)
 {
  

  const [filesOk, filesWithDiff, filesOmitted, filesUnwanted]= _compareTwoFolders(pkgPath, truthFolder, distFolder, debug)

  const all_ok = (Object.keys(filesWithDiff).length + filesOmitted.length + filesUnwanted.length) == 0

  if (all_ok) {
    //if (debug) {
      console.log(`[xeira][diff] ${green('All files are ok!')}`)
    //}
    return true
  }

  filesOmitted.map(f => 
    console.log(`[xeira][diff] ${cyan(f)} ${red('is not present in')} ${cyan(distFolder)}`))

    filesUnwanted.map(f => 
    console.log(`[xeira][diff] ${cyan(f)} ${red('is present in')} ${cyan(distFolder)} ${red('but it should not')}`))
  
  Object.entries(filesWithDiff).map(([f, msg]) => {
    console.log(`[xeira][diff]`)
    console.log(`[xeira][diff] Differences:`)
    console.log(`[xeira][diff]`)
    console.log(`[xeira][diff] ${cyan(f)}:`)
    console.log(msg)
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
  console.error(err)
  throw new Error(err)
}

const truthPath = path.join(pkgPath, truthFolder)
if (! fs.existsSync(truthPath)) {
  let err= `Folder ${truthPath} does not exist`
  console.error(err)
  throw new Error(err)
}

const ok= _compareTwoBuilds (pkgPath, distFolder, truthFolder, debug)

process.exit(parseInt(ok))
