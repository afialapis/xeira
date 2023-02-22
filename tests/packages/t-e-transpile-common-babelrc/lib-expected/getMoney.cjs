var {
  collTotalBy
} = require('trangallada');
var getMoney = collections => {
  var total = collTotalBy(collections, 'money');
  return total;
};
module.exports = {
  getMoney
};