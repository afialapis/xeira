import mainQuestions from './main.mjs'
import lintQuestions from './lint.mjs'
import transpileQuestions from './transpile.mjs'
import bundleQuestions from './bundle.mjs'
import testQuestions from './test.mjs'
import devQuestions from './dev.mjs'
import demoQuestions from './demo.mjs'

export default [
  ...mainQuestions,
  ...lintQuestions,
  ...transpileQuestions,
  ...bundleQuestions,
  ...testQuestions,
  ...devQuestions,
  ...demoQuestions,
]