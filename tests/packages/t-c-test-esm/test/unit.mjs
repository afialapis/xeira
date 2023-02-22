import {getMoney} from '../src/index.mjs'
const expect= global.expect

describe('t-c-test-esm', function () {
  // this.timeout(100)

  it("check getMoney", async () => {   
    const total = getMoney()
    expect(total).to.equal(133.32)
  }) 
})