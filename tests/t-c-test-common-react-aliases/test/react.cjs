const React = require('react')
const {MoneyDiv} = require('../src/index')

const expect= global.expect
const render = global.render

describe('t-c-test-common-react', function () {
  // this.timeout(100)

  it("render should be ok", () => {   
    const Unit = () => 
       <div id="hey">HEY</div>

    const {getByText} = render(<Unit/>)
    expect(getByText('HEY').innerHTML).to.equal('HEY')

  })   

  it("test MoneyDiv", () => {
    const {getByTestId} = render(<MoneyDiv/>)
    const div = getByTestId('money-div')
    expect(div.innerHTML).to.equal( '133.32' )
  })
})