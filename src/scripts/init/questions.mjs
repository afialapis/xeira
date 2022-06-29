const configQuestions= [
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
  },  

  // linter
  {
    type: 'select',
    name: 'linter',
    message: 'Which linter will you use?',
    choices: [
      { title: 'eslint', value: 'eslint' },
      { title: 'none', value: undefined, disabled: true},
    ],
    initial: 0
  },

  // transpiling
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
    type: prev => prev !== undefined ? 'select' : null,
    name: 'transpiler',
    message: 'Pick a transpiler',
    choices: [
      { title: 'none', value: undefined},
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
      { title: './dist', value: './dist' },
      { title: './build', value: './build' },
      { title: './lib', value: './lib' },
      { title: 'none', value: undefined, disabled: true},
    ],
    initial: 0
  },  

  {
    type: prev => prev !== undefined ? 'select' : null,
    name: 'bundler',
    message: 'Pick the bundler',
    choices: [
      { title: 'rollup', value: 'rollup' },
      { title: 'none', value: undefined, disabled: true},
    ],
    initial: 0
  }, 

  // testing
  {
    type: 'select',
    name: 'test_folder',
    message: 'Pick a folder for your test files',
    choices: [
      { title: './test', value: './test' },
      { title: './tests', value: './tests' },
      { title: 'none', value: undefined, disabled: false},
    ],
    initial: 0
  },  

  // react
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


export {configQuestions}