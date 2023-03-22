const React = require('react')
const {MoneyDiv} = require('../src/index')

const expect= global.expect
const mount= global.mount
const shallow= global.shallow

describe('t-c-test-common-react', function () {
  // this.timeout(100)

  it("mount should be ok", () => {   
    const Unit = () => 
       <div id="hey">HEY</div>

    const wrapper= mount(<Unit/>)

    const theDiv= wrapper.find('div#hey')
    expect(theDiv.length).to.equal(1)

    wrapper.unmount()
  }) 


  it("shallow should be ok", () => {   
    const Unit = () => 
       <div id="hey">HEY</div>

    const wrapper= shallow(<Unit/>)

    const theDiv= wrapper.find('div#hey')
    expect(theDiv.length).to.equal(1)

    wrapper.unmount()
  })   

  it("test MoneyDiv", () => {
    const wrapper= mount(<MoneyDiv/>)

    const theDiv= wrapper.find('div#money-div')
    const theDivNode= theDiv.getDOMNode()
    
    expect(theDiv.length).to.equal(1)
    expect(theDivNode.innerHTML).to.equal( '133.32' )

    wrapper.unmount()
  })  

  

})