const {getMoney} = require('./esm_pkg.cjs')
const expect= global.expect

describe('t-test-common-consuming-esm', function () {
  // this.timeout(100)

  it("check getMoney", async () => {   
    const total = await getMoney()
    expect(total).to.equal(133.32)
  }) 
})