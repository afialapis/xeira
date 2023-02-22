const {collTotalBy} = require('trangallada')

const getMoney = (collections) => {
  const total= collTotalBy(collections, 'money')
  return total
};

module.exports= {
  getMoney
}