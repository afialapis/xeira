export default [

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
    type: 'select',
    name: 'bundle_inline_dynamic_imports',
    message: 'inline dynamic imports?',
    choices: [
      { title: 'yes', value: true },
      { title: 'no', value: false},
    ],
    initial: 0
  },  

  {
    type: 'select',
    name: 'bundle_node_polyfill',
    message: 'polyfill Node modules?',
    choices: [
      { title: 'yes', value: true },
      { title: 'no', value: false},
    ],
    initial: 1
  },   

  {
    type: prev => {
      if ((prev == 3) || (prev == 'none') ) {
        return null
      }
      return 'select'
    },
    name: 'bundler',
    message: 'Pick the bundler',
    choices: [
      { title: 'rollup', value: 'rollup' },
      { title: 'none', value: undefined, disabled: true},
    ],
    initial: 0
  }
]
