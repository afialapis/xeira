const {collTotalBy} = require('farrapa-collections')
const {fooit} = require('@here/foo.cjs')
const {barit} = require('@deep/bar.cjs')

const collections= [
  fooit({
    'id': 1,
    'name': 'Max Power',
    'age': 37,
    'money': 99.99
  }),
  barit({
    'id': 2,
    'name': 'Min Weak',
    'age': 25,
    'money': 33.33
  })  
]

const getMoney = () => {
  const total= collTotalBy(collections, 'money')
  return total
};


module.exports = {
  getMoney
}
