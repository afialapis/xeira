module.exports [
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
      { title: '/src/index.js', value: '/src/index.js' },
      { title: 'index.js', value: 'index.js'},
    ],
    initial: 0
  },  

  // linter
  {
    type: 'select',
    name: 'linter',
    message: 'Which linter will you use?',
    choices: [
      { title: 'eslint', value: 'eslint' },
      { title: 'none', value: 'none', disabled: true},
    ],
    initial: 0
  },

  // transpiling
  {
    type: 'select',
    name: 'transpile_folder',
    message: 'Which folder do you want your transpiled code in?',
    choices: [
      { title: 'none', value: 'none', message: 'I need no transpilation'},
      { title: '/lib', value: '/lib' },
    ],
    initial: 0
  },  


  {
    type: prev => prev !== 'none' ? 'select' : null,
    name: 'transpiler',
    message: 'Pick a transpiler',
    choices: [
      { title: 'none', value: 'none'},
      { title: 'babel', value: 'babel' },
    ],
    initial: 0
  },  

  // bundling
  {
    type: 'select',
    name: 'bundle_folder',
    message: 'Pick a folder for your bundles',
    choices: [
      { title: '/dist', value: '/dist' },
      { title: '/build', value: '/build' },
      { title: '/lib', value: '/lib' },
      { title: 'none', value: 'none', disabled: true},
    ],
    initial: 0
  },  

  {
    type: prev => prev !== 'none' ? 'select' : null,
    name: 'bundler',
    message: 'Pick the bundler',
    choices: [
      { title: 'rollup', value: 'rollup' },
      { title: 'none', value: 'none', disabled: true},
    ],
    initial: 0
  },    

  {
    type: 'confirm',
    name: 'react',
    message: 'Are you going to work with React?',
    initial: false
  },

  {
    type: 'confirm',
    name: 'monorepo',
    message: 'Are you starting a monorepo?',
    initial: false
  }
]
