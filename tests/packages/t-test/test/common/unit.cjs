const {getMoney} = require('../../src/cjs/index')

const expect= global.expect
describe('t-test-common', function () {
  this.timeout(100)

  it("check getMoney", () => {   
    const total = getMoney()
    expect(total).to.equal(133.32)
  }) 
})