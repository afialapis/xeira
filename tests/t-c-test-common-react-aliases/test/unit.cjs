const {getMoney} = require('../src/index')

const expect= global.expect
describe('t-c-test-common-react', function () {
  this.timeout(100)

  it("check getMoney", () => {   
    const total = getMoney()
    expect(total).to.equal(133.32)
  }) 
})