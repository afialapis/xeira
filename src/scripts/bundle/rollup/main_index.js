const {writeFile} = require('fs/promises');

function renderFile (pkgName, suffix) {
  return `
    /* eslint-env node */

    if (process.env.NODE_ENV === "production") {
      module.exports = require("./${pkgName}.${suffix}.min.js");
    } else {
      module.exports = require("./${pkgName}.${suffix}.js");
    }  
  `
}

async function makeMainFile (pkgName, suffix, destpath) {
  const content= renderFile (pkgName, suffix)

  return await writeFile(destpath, content)
}

export {makeMainFile}