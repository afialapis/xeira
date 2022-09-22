export default [
  {
    type: 'select',
    name: 'transpile_folder',
    message: 'Which folder do you want your transpiled code in?',
    choices: [
      { title: 'none', value: undefined, message: 'I need no transpilation'},
      { title: './lib', value: './lib' },
    ],
    initial: 0
  },  

  {
    type: prev => {
      if ((prev == 0) || (prev == 'none') ) {
        return null
      }
      return 'select'
    },
    name: 'transpiler',
    message: 'Pick a transpiler',
    choices: [
      { title: 'none', value: undefined},
      { title: 'babel', value: 'babel' },
    ],
    initial: 0
  }
]
