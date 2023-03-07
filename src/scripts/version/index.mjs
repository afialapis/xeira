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

async function xeiraVersion(context, versionType, versionNumber) 
{
  const pkgJson = await pkgJsonRead(context.pkgPath)
  const newVersion= _updateVersionValue(pkgJson.version, versionNumber, versionType)
  if (pkgJson.version != newVersion) {
    const changes= {
      version: newVersion
    }
    await pkgJsonUpdate (context.pkgPath, changes, true)
  }
}

export default xeiraVersion
