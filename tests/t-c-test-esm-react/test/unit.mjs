import React from 'react'
import {MoneyDiv} from '../src/index.mjs'

const expect= global.expect
const mount= global.mount

describe('t-c-test-esm-react', function () {
  // this.timeout(100)

  it("test MoneyDiv", () => {
    // Access it now, not at top-level (it would be undefined there)
    const wrapper= mount(<MoneyDiv/>)

    const theDiv= wrapper.find('div#money-div')
    const theDivNode= theDiv.getDOMNode()
    
    expect(theDiv.length).to.equal(1)
    expect(theDivNode.innerHTML).to.equal( '133.32' )

    wrapper.unmount()
  })  

  

})