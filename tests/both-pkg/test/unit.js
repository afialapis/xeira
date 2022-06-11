import React from 'react'

const expect= global.expect
const mount= global.mount

describe('both-pkg: Some foo tests', function () {
  this.timeout(100)


  it("should be ok", () => {   
    const Unit = () => 
      <div id="hey">HEY</div>

    const wrapper= mount(<Unit/>)

    const theDiv= wrapper.find('div#hey')
    expect(theDiv.length).to.equal(1)

    wrapper.unmount()
  })
})