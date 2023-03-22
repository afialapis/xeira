"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = require("../src/index.mjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = global.expect;
var mount = global.mount;
describe('t-c-test-common-consuming-esm-react', function () {
  // this.timeout(100)
  it("test MoneyDiv", () => {
    // Access it now, not at top-level (it would be undefined there)
    var wrapper = mount( /*#__PURE__*/_react.default.createElement(_index.MoneyDiv, null));
    var theDiv = wrapper.find('div#money-div');
    var theDivNode = theDiv.getDOMNode();
    expect(theDiv.length).to.equal(1);
    expect(theDivNode.innerHTML).to.equal('133.32');
    wrapper.unmount();
  });
});