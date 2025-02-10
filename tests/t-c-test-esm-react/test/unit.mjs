import React from 'react'
import {MoneyDiv} from '../src/index.mjs'

const expect= global.expect
const render= global.render

describe('t-c-test-esm-react', function () {
  // this.timeout(100)

  it("test MoneyDiv", () => {
    // Access it now, not at top-level (it would be undefined there)
    const {getByTestId} = render(<MoneyDiv/>)
    const div = getByTestId('money-div')
    expect(div.innerHTML).to.equal( '133.32' )
  })  
})