const path = require('path')
const { readdirSync } = require('fs')
const {pkgJsonRead, pkgJsonUpdate} = require('../../utils/pkgJson')

function _updateVersionValue(version, versionType) {
  if (versionType.indexOf('.')>0) {
    return versionType
  }

  let [major, minor, patch]= version.split('.').map(v => parseInt(v))
  
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
  
  return  readdirSync(pkgPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .filter(dirname => dirname.toLowerCase().indexOf(filterPattern.toLowerCase())>=0)
}


async function versioning(pkgPath, xeiraConfig, versionType, filterPattern) 
{
  let pkgJsonPaths= []

  if (xeiraConfig.isAMonoRepo) {
    const pkgList= _getMonorepoPackageList(pkgPath, filterPattern)
    pkgJsonPaths= pkgList.map(pkgName => path.join(pkgPath, 'packages', pkgName, 'package.json'))
  } else {
    const pkgJsonPath = path.join(pkgPath, 'package.json')
    pkgJsonPaths.push(pkgJsonPath)
  }

  let promises= []
  for (const pkgJsonPath of pkgJsonPaths) {
    const pkgJson = pkgJsonRead(pkgJsonPath)
    const newVersion= _updateVersionValue(pkgJson.version, versionType)
    if (pkgJson.version != newVersion) {
      const changes= {
        version: newVersion
      }
      const promise= pkgJsonUpdate (pkgPath, changes)
      promises.push(promise)
    }
  }
  
  await Promise.all(promises)
}

module.exports= versioning