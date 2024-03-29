export default [
  // app or package?
  {
    type: 'select',
    name: 'product',
    message: 'What are you shipping?',
    choices: [
      { title: 'package', value: 'package' },
      { title: 'app', value: 'app'},
      { title: 'others', value: 'other', disabled: true },
    ],
    initial: 0
  },
  
  // node, browser or both?
  {
    type: 'select',
    name: 'target',
    message: 'Which is its target environment?',
    choices: [
      { title: 'node', value: 'node' },
      { title: 'browser', value: 'browser'},
      { title: 'both', value: 'both'},
    ],
    initial: 0
  },
  
  // which is your source index
  {
    type: 'select',
    name: 'source_index',
    message: 'Which is your source index',
    choices: [
      { title: './src/index.mjs', value: './src/index.mjs' },
      { title: './src/index.js', value: './src/index.js' },
      { title: './src/index.cjs', value: './src/index.cjs' },
      { title: 'index.js', value: 'index.js'},
    ],
    initial: 0
  }
]
