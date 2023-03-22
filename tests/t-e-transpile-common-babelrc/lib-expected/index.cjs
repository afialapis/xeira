var React = require('react');
var {
  MoneyDiv
} = require('./MoneyDiv');
var {
  fooit
} = require('./foo');
var collections = [fooit({
  'id': 1,
  'name': 'Max Power',
  'age': 37,
  'money': 99.99
}), fooit({
  'id': 2,
  'name': 'Min Weak',
  'age': 25,
  'money': 33.33
})];
var App = () => {
  return /*#__PURE__*/React.createElement(MoneyDiv, {
    collections: collections
  });
};
console.log("src/index.cjs:24:12:'Here something will be added on my left, thanks to babel-plugin-meaningful-logs'", 'Here something will be added on my left, thanks to babel-plugin-meaningful-logs');
module.exports = {
  App
};