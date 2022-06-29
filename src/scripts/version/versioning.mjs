import path from 'path'
import { readdirSync } from 'fs'
import {pkgJsonRead, pkgJsonUpdate} from '../../utils/pkgJson.mjs'

function _updateVersionValue(version, versionType) {
  if (versionType.indexOf('.')>0) {
    return versionType
  }

  let major= 0, minor= 0, patch= 0
  
  if (version != undefined) {
    [major, minor, patch]= version.split('.').map(v => parseInt(v))
  }
  
  if (versionType=='major') {
    major+= 1
  } else if (versionType=='minor') {
    minor+= 1
  } else if (versionType=='patch') {
    patch+= 1
  } else {
    throw Error(`Invalid version type ${versionType}`)
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


async function versioning(pkgPath, xeiraConfig, versionType, filterPattern) 
{
  let pkgJsonPaths= []

  if (xeiraConfig.isAMonoRepo) {
    const pkgList= _getMonorepoPackageList(pkgPath, filterPattern)
    pkgJsonPaths= pkgList.map(pkgName => path.join(pkgPath, 'packages', pkgName))
  } else {
    pkgJsonPaths.push(pkgPath)
  }

  let promises= []
  for (const pkgJsonPath of pkgJsonPaths) {
    const pkgJson = await pkgJsonRead(pkgJsonPath)
    const newVersion= _updateVersionValue(pkgJson.version, versionType)
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

export { versioning }