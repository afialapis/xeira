import path from 'path'
import fs from 'fs'
import {red, green, cyan} from 'farrapa-colors'
import { readJsonFile } from '../../../../utils/json.mjs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DEMO_INIT_ACTIONS= [
  ['assets',           'd'],
  ['assets/style.scss','f'],
  ['dist',             'd'],
  ['src',              'd'],
  ['src/Demo.js',      'f'],
  ['index.html',       'f'],
  ['index.js',         'f']
]


const _copyFileReplacingContent = (sourcePath, destPath, replaceValues) => {
  let buffer = fs.readFileSync(sourcePath, {encoding: 'utf-8'})
  for (const [search, to] of Object.entries(replaceValues)) {
    buffer= buffer.replaceAll(search, to)
  }
  fs.writeFileSync(destPath, buffer, {encoding: 'utf-8'})
}

async function initDemoFolderForRollup(pkgPath, xeiraConfig, force) {
  const pkgJson = await readJsonFile(path.join(pkgPath ,'package.json'))
  const pkgName= pkgJson.name
  const replaceValues= {
    'APPNAME': pkgName
  }
  
  console.log(`[xeira][demo] Initing demo...`)
  
  const sourceFolder= path.join(__dirname, 'tmpl')
  const destFolder = path.join(pkgPath, 'demo')

  for (const [name, ftype] of DEMO_INIT_ACTIONS) {
    const sourcePath= path.join(sourceFolder, name)
    const destPath= path.join(destFolder, name)

    
    if (fs.existsSync(destPath) && force) {
      if (ftype=='f') {
        fs.unlinkSync(destPath)
      } else {
        fs.rmSync(destPath, {recursive: true, force: true})
      }
    }

    if (fs.existsSync(destPath)) {
      console.log(`[xeira][demo] Cannot init ${cyan(name)}: it already exists...`)
    } else {    
      if (ftype=='f') {
        _copyFileReplacingContent(sourcePath, destPath, replaceValues)
      } else {
        fs.mkdirSync(destPath)
      }
      
      if (fs.existsSync(destPath)) {
        console.log(`[xeira][demo] Init ${cyan(name)} ${green('done!')}`)
      } else {
        console.log(`[xeira][demo] Init ${cyan(name)} ${red('error :(')}`)
      }
    }
  }
}


export {initDemoFolderForRollup}