import {collTotalBy} from 'trangallada'


const makeCollections = async () => {
  const {fooit} = await import('./foo.mjs')

  return [
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
}

const getMoney = async () => {
  const collections = await makeCollections()
  const total= collTotalBy(collections, 'money')
  return total
};


export {
  getMoney
}
