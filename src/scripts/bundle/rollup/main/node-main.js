module.exports = (pkgJson) => {
  return `
    /* eslint-env node */

    if (process.env.NODE_ENV === "production") {
      module.exports = require("./${pkgJson.name}.cjs.min.js");
    } else {
      module.exports = require("./${pkgJson.name}.cjs.js");
    }  
  `
}