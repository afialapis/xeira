import {coption_name, ctitle, cfilename, coption_value} from '../../../src/utils/colors.mjs'

const monoText=`Working with ${ctitle('monorepos')} (${coption_name('--filter')})  

    When working with monorepos, you may filter folders to apply the command on.

    By default, ${cfilename('packages')} folder is inspected. So, for example:
      ${coption_name('--filter')}=${coption_value('react-*')}
    will filter all the ${cfilename('./packages/react-*')} folders.

    If you want to search on another folder, just specify it with a relative path. So:
      ${coption_name('--filter')}=${coption_value('./custom_folder/react-*')}
    will filter all the ${cfilename('./custom_folder/react-*')} folders.`

const monoAliases= ['filter']

export {
  monoText,
  monoAliases
}
