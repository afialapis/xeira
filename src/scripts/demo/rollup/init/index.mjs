import path from 'path'
import fs from 'fs'
import {red, green, cyan} from '../../../../utils/colors.mjs'
import { readJsonFile } from '../../../../utils/json.mjs'
import { fileURLToPath } from 'url'
import { log_info } from '../../../../utils/log.mjs'

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

async function initDemoFolderForRollup(xeiraConfig, force) {
  const pkgJson = await readJsonFile(path.join(xeiraConfig.pkgPath ,'package.json'))
  const pkgName= pkgJson.name
  const replaceValues= {
    'APPNAME': pkgName
  }
  
  log_info(xeiraConfig, 'demo', `Initing demo...`)
  
  const sourceFolder= path.join(__dirname, 'tmpl')
  const destFolder = path.join(xeiraConfig.pkgPath, 'demo')

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
      log_info(xeiraConfig, 'demo', `Cannot init ${cyan(name)}: it already exists...`)
    } else {    
      if (ftype=='f') {
        _copyFileReplacingContent(sourcePath, destPath, replaceValues)
      } else {
        fs.mkdirSync(destPath)
      }
      
      if (fs.existsSync(destPath)) {
        log_info(xeiraConfig, 'demo', `Init ${cyan(name)} ${green('done!')}`)
      } else {
        log_info(xeiraConfig, 'demo', `Init ${cyan(name)} ${red('error :(')}`)
      }
    }
  }
}


export {initDemoFolderForRollup}