const {collTotalBy} = require('farrapa-collections')
const {fooit} = require('./foo.cjs')

const collections= [
  fooit({
    'id': 1,
    'name': 'Max Power',
    'age': 37,
    'money': 99.99
  }),
  fooit({
    'id': 2,
    'name': 'Min Weak',
    'age': 25,
    'money': 33.33
  })  
]

const bothPkg = (f) => {
  const total= collTotalBy(collections, 'money')
  console.log(`Total money => ${total}`);
};


module.exports = {
  bothPkg
}