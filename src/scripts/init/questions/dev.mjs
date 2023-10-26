export default [
  // dev server
  {
    type: 'select',
    name: 'dev_server',
    message: 'Pick a dev server',
    choices: [
      { title: 'rollup', value: 'rollup'},
      { title: 'nollup', value: 'nollup' },
    ],
    initial: 0
  }
  
]
