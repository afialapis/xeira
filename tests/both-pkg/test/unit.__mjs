import React from 'react'

const expect= global.expect
const mount= global.mount
const shallow= global.shallow

describe('both-pkg: Some foo tests', function () {
  this.timeout(100)

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
})