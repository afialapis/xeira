const React = require('react')

const expect= global.expect
const render= global.render

describe('t-c-test-esm-react-with-import-patch', function () {
  // this.timeout(100)

  it("test MoneyDiv", () => {
    // Access it now, not at top-level (it would be undefined there)
    const {MoneyDiv} = global.moneyPkg

    const {getByTestId} = render(<MoneyDiv/>)
    const div = getByTestId('money-div')
    expect(div.innerHTML).to.equal( '133.32' )
  })  

  

})