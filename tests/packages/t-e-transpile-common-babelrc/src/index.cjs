const React = require('react')
const {MoneyDiv} = require('./MoneyDiv')
const {fooit} = require('./foo')

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

const App = () => {
  return <MoneyDiv collections={collections}/>
}

console.log('Here something will be added on my left, thanks to babel-plugin-meaningful-logs')

module.exports = {
  App
}
