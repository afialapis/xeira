
/* eslint-env node */

if (process.env.NODE_ENV === "production") {
  module.exports = require("./t-f-bundle-common-react.umd.min.js");
} else {
  module.exports = require("./t-f-bundle-common-react.umd.js");
}  
  