import path from 'path'
import fs from 'fs'
import {cok, cerror, cfilename} from '../../../../utils/colors.mjs'
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

async function initDemoFolderForRollup(context, force) {
  const pkgJson = await readJsonFile(path.join(context.pkgPath ,'package.json'))
  const pkgName= pkgJson.name
  const replaceValues= {
    'APPNAME': pkgName
  }
  
  context.log_info('demo', `Initing demo...`)
  
  const sourceFolder= path.join(__dirname, 'tmpl')
  const destFolder = path.join(context.pkgPath, 'demo')

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
      context.log_info('demo', `Cannot init ${cfilename(name)}: it already exists...`)
    } else {    
      if (ftype=='f') {
        _copyFileReplacingContent(sourcePath, destPath, replaceValues)
      } else {
        fs.mkdirSync(destPath)
      }
      
      if (fs.existsSync(destPath)) {
        context.log_info('demo', `Init ${cfilename(name)} ${cok('done!')}`)
      } else {
        context.log_info('demo', `Init ${cfilename(name)} ${cerror('error :(')}`)
      }
    }
  }
}


export {initDemoFolderForRollup}