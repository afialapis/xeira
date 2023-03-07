/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import arredemo from 'arredemo/cli'

async function xeiraSite (context) {

  await arredemo(context.pkgPath)

}

export default xeiraSite
