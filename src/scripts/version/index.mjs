import path from 'path'
import { readdirSync } from 'fs'
import {pkgJsonRead, pkgJsonUpdate} from '../../utils/pkgJson.mjs'

function _updateVersionValue(version, versionNumber, versionType) {
  if (versionNumber && versionNumber.indexOf('.')>0) {
    return versionNumber
  }

  if (versionType && versionType.indexOf('.')>0) {
    return versionType
  }

  let major= 0, minor= 0, patch= 0
  
  if (version != undefined) {
    [major, minor, patch]= version.split('.').map(v => parseInt(v))
  }
  
  const text = versionType || versionNumber 

  if (text=='major') {
    major+= 1
  } else if (text=='minor') {
    minor+= 1
  } else if (text=='patch') {
    patch+= 1
  } else {
    throw Error(`Invalid version type ${text}`)
  }
  
  const newVersion= `${major}.${minor}.${patch}`
  return newVersion
}

function _getMonorepoPackageList(pkgPath, filterPattern) {
  
  let pkgs=  readdirSync(path.join(pkgPath, 'packages'), { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
  if (filterPattern) {
      pkgs= pkgs.filter(dirname => dirname.toLowerCase().indexOf(filterPattern.toLowerCase())>=0)
  }
  return pkgs
}


async function xeiraVersion(xeiraConfig, versionType, versionNumber, filterPattern) 
{
  let pkgJsonPaths= []

  if (xeiraConfig.isAMonoRepo) {
    const pkgList= _getMonorepoPackageList(xeiraConfig.pkgPath, filterPattern)
    pkgJsonPaths= pkgList.map(pkgName => path.join(xeiraConfig.pkgPath, 'packages', pkgName))
  } else {
    pkgJsonPaths.push(xeiraConfig.pkgPath)
  }

  let promises= []
  for (const pkgJsonPath of pkgJsonPaths) {
    const pkgJson = await pkgJsonRead(pkgJsonPath)
    const newVersion= _updateVersionValue(pkgJson.version, versionNumber, versionType)
    if (pkgJson.version != newVersion) {
      const changes= {
        version: newVersion
      }
      const promise= pkgJsonUpdate (pkgJsonPath, changes, true)
      promises.push(promise)
    }
  }
  
  await Promise.all(promises)
}

export default xeiraVersion
