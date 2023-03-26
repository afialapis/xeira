/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'
import { cfilename, ccmd } from '../../utils/colors.mjs'
import { log_info, log_warn } from '../../utils/log.mjs'
import {lintWithEslint} from './eslint.mjs'

async function xeiraLint(context) {

  const folder = context?.options?.folder || '.'
  
  if (context.lintWithEslint) {
    
    log_info(context, 'lint', `Linting folder ${cfilename(folder)} with ${ccmd('eslint')}`)

    await lintWithEslint(context, folder )
  } else {
    log_warn('lint', 'Nothing to lint: no linter specified in xeira settings')
  }

}

export default xeiraLint
