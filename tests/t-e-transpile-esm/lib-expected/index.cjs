"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoneyDiv = void 0;
var _react = _interopRequireDefault(require("react"));
var _trangallada = require("trangallada");
var _foo = require("./foo.cjs");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var collections = [(0, _foo.fooit)({
  'id': 1,
  'name': 'Max Power',
  'age': 37,
  'money': 99.99
}), (0, _foo.fooit)({
  'id': 2,
  'name': 'Min Weak',
  'age': 25,
  'money': 33.33
})];
var getMoney = () => {
  var total = (0, _trangallada.collTotalBy)(collections, 'money');
  return total;
};
var MoneyDiv = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": "money-div"
  }, getMoney());
};
exports.MoneyDiv = MoneyDiv;