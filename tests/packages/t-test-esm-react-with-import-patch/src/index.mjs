import React from 'react'
import {collTotalBy} from 'farrapa-collections'
import {fooit} from './foo.mjs'

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

const getMoney = () => {
  const total= collTotalBy(collections, 'money')
  return total
};


const MoneyDiv = () => {
  return (
    <div id="money-div">
      {getMoney()}
    </div>
  )
}

export {
  getMoney,
  MoneyDiv
}
