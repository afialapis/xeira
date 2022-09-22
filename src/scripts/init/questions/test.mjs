export default [
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
  }
]
