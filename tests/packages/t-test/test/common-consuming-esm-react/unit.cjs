const React = require('react')

const expect= global.expect
const mount= global.mount

describe('t-test-common-consuming-esm-react', function () {
  // this.timeout(100)

  it("test MoneyDiv", () => {
    // Access it now, not at top-level (it would be undefined there)
    const {MoneyDiv} = global.moneyPkg

    const wrapper= mount(<MoneyDiv/>)

    const theDiv= wrapper.find('div#money-div')
    const theDivNode= theDiv.getDOMNode()
    
    expect(theDiv.length).to.equal(1)
    expect(theDivNode.innerHTML).to.equal( '133.32' )

    wrapper.unmount()
  })  

  

})