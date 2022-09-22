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
