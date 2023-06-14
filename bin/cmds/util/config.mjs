import { /*ctitle, ccmd,*/ cxeira, coption_name, coption_value, cfilename} from '../../../src/utils/colors.mjs'


export function configText (options, customSubTitle) {
  const tab1= '    '
  const tab2= '      '

  const header= `${coption_value('config')} values`
  
  const mainSubTitle = 
    `${tab1}You can specify ${cxeira('xeira')}'s config values as a fly parameter,\n`+
    `${tab1}so it takes preference over the saved value on ${cfilename('xeira.json')}.`
  
  const subtitle = customSubTitle || mainSubTitle

  const optTexts= { 
    product: 
      `${tab1}${coption_name('--product')}\n`+
      `${tab2}Which kind of product are you shipping?\n`+
      `${tab2}Values can be: ${coption_value('package')} (default), ${coption_value('app')} or ${coption_value('other')}.`,
    target:
      `${tab1}${coption_name('--target')}\n`+
      `${tab2}Are you targeting server/Node apps? Is your package running on browser? Both, maybe?\n`+
      `${tab2}Values can be: ${coption_value('node')} (default), ${coption_value('browser')} or ${coption_value('both')}.`,
    source_index:
      `${tab1}${coption_name('--source_index')}\n`+
      `${tab2}Path to your main index file.\n`+
      `${tab2}Default value is ${cfilename('./src/index.js')}.`,
    linter:
      `${tab1}${coption_name('--linter')}\n`+
      `${tab2}Which linter do you wanna use?\n`+
      `${tab2}Values can be: ${coption_value('eslint')} (default), ${coption_value('none')}.`,
    transpile_folder:
      `${tab1}${coption_name('--transpile_folder')}\n`+
      `${tab2}Which folder will be your transpiled files placed in?\n`+
      `${tab2}Default value is ${coption_value('./lib')}. If ${coption_value('none')}, no transpilling will be made.`,
    transpiler:
      `${tab1}${coption_name('--transpiler')}\n`+
      `${tab2}Which transpiler do you wanna use?\n`+
      `${tab2}Values can be: ${coption_value('babel')} (default), ${coption_value('none')}.`,
    minifier:
      `${tab1}${coption_name('--minifier')}\n`+
      `${tab2}Which transpiler do you wanna use?\n`+
      `${tab2}Values can be: ${coption_value('uglify')} (default), ${coption_value('none')}.`,
    bundle_folder:
      `${tab1}${coption_name('--bundle_folder')}\n`+
      `${tab2}Which folder will be your bundled files placed in?\n`+
      `${tab2}Default value is ${coption_value('./dist')}. If ${coption_value('none')}, no bundling will be made.`,
    bundle_name:
      `${tab1}${coption_name('--bundle_name')}\n`+
      `${tab2}Base name for the built bundles.\n`+
      `${tab2}Default value is ${coption_value('package.json name')} field.`,
    bundle_inline_dynamic_imports:
      `${tab1}${coption_name('--bundle_inline_dynamic_imports')}\n`+
      `${tab2}Inline dynamic imports?\n`+
      `${tab2}Default value is ${coption_value('true')}. If ${coption_value('false')}, generated bundle will consist on more than one file.`,
    bundle_node_polyfill:
      `${tab1}${coption_name('--bundle_node_polyfill')}\n`+
      `${tab2}Polyfill Node modules?\n`+
      `${tab2}Default value is ${coption_value('false')}. If ${coption_value('true')}, your bundle will be polyfilled with Node builtin modules.`,
    bundler:
      `${tab1}${coption_name('--bundler')}\n`+
      `${tab2}Which bundler do you wanna use?\n`+
      `${tab2}Values can be: ${coption_value('rollup')} (default), ${coption_value('none')}.`,
    test_folder:
      `${tab1}${coption_name('--test_folder')}\n`+
      `${tab2}Which folder are you test files placed in?\n`+
      `${tab2}Default value is ${coption_value('./test')}. If ${coption_value('none')}, no testing will be made.`,
    demo_mode:
      `${tab1}${coption_name('--demo_mode')}\n`+
      `${tab2}Values can be: ${coption_value('auto')} (default), ${coption_value('none')}.`,
    demo_demoer:
      `${tab1}${coption_name('--demo_demoer')}\n`+
      `${tab2}Which bundler/server do you wanna use for your demo folder?\n`+
      `${tab2}Values can be: ${coption_value('rollup')} (default), ${coption_value('nollup')}, ${coption_value('none')}.`,
    verbose:
      `${tab1}${coption_name('--verbose')}\n`+
      `${tab2}Do you want ${cxeira('xeira')} to show extra amount of log info?\n`+
      `${tab2}Default is ${coption_value('false')}.`
  }

  
  let text= `${header}

${subtitle}
  `

  Object.keys(optTexts).map(k => {
    if (options.indexOf(k)>=0) {
      text+= `\n${optTexts[k]}\n`
    }
  })
  
  // remove last \n
  return text.slice(0, text.length-1)
}