export default [
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

]
