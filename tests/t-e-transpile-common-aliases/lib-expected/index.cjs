var React = require('react');
var {
  collTotalBy
} = require('trangallada');
var {
  fooit
} = require("./foo.cjs");
var {
  barit
} = require("./some/arch/bar.cjs");
var collections = [fooit({
  'id': 1,
  'name': 'Max Power',
  'age': 37,
  'money': 99.99
}), barit({
  'id': 2,
  'name': 'Min Weak',
  'age': 25,
  'money': 33.33
})];
var getMoney = () => {
  var total = collTotalBy(collections, 'money');
  return total;
};
var MoneyDiv = () => {
  return /*#__PURE__*/React.createElement("div", {
    "data-testid": "money-div"
  }, getMoney());
};
module.exports = {
  MoneyDiv
};