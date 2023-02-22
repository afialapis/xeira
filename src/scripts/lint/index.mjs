/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'
import { blue, cyan } from '../../utils/colors.mjs'
import { log_info, log_warn } from '../../utils/log.mjs'
import {lintWithEslint} from './eslint.mjs'

async function xeiraLint(xeiraConfig, folder) {
  
  if (xeiraConfig.lintWithEslint) {
    
    log_info(xeiraConfig, 'lint', `Linting folder ${blue(folder)} with ${cyan('eslint')}`)

    await lintWithEslint(xeiraConfig, folder )
  } else {
    log_warn('lint', 'Nothing to lint: no linter specified in xeira settings')
  }

}

export default xeiraLint
