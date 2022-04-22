
/* eslint-env node */

if (process.env.NODE_ENV === "production") {
  module.exports = require("./both-pkg.umd.min.js");
} else {
  module.exports = require("./both-pkg.umd.js");
}  
  