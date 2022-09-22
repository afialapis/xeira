export default [
  // demoing
  {
    type: 'select',
    name: 'demo_mode',
    message: 'Do you have a demo app?',
    choices: [
      { title: 'none', value: undefined, message: 'I have no demo'},
      { title: 'auto', value: 'auto', message: 'Let xeira init a basic ./demo folder for me' }   
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
    name: 'demo_demoer',
    message: 'Pick a `demon`',
    choices: [
      { title: 'rollup', value: 'rollup'},
      { title: 'nollup', value: 'nollup' },
    ],
    initial: 0
  }
  
]
