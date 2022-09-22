function getJSValidPkgName(pkgName) {
  return pkgName
  // to tile case 
  .replace(
    /\w*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  )
  // remove -_
  .replace(/[-_]/g, '')
}

export {getJSValidPkgName}