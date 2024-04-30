function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var React = require('react');
var PropTypes = require('prop-types');
var {
  getMoney
} = require('./getMoney.cjs');
class MoneyDiv extends React.Component {
  render() {
    var {
      collections
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      id: "money-div"
    }, getMoney(collections));
  }
}
_defineProperty(MoneyDiv, "propTypes", {
  collections: PropTypes.arrayOf(PropTypes.object)
});
module.exports = {
  MoneyDiv
};