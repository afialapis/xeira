module.exports = (pkgJson) => {
  return `
    /* eslint-env node */

    if (process.env.NODE_ENV === "production") {
      module.exports = require("./${pkgJson.name}.esm.min.js");
    } else {
      module.exports = require("./${pkgJson.name}.esm.js");
    }  
  `
}