/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import path from 'path'
import prompts from 'prompts'
import {initHelp} from '../help/actions.mjs'
import {saveObjectToJsonWithConfirm} from '../../utils/io.mjs'
import {pkgJsonRead, pkgJsonUpdate} from '../../utils/pkgJson.mjs'
import {getXeiraDefaultConfig, getXeiraConfigObj} from '../../config/xeira.mjs'
import {configQuestions} from './questions.mjs'
import {makePkgJsonValues} from './pkgJsonValues.mjs'

/*
 * About monorepos
 *   => If true, then the other options are package-level.
 *   => How to handle that?
 */

async function xeiraInit(pkgPath, injectValues) {
  // Inject values if any
  if ((injectValues!=undefined) && (injectValues.length>0) ) {
    const parsedValues= injectValues.map(v => 
      v=='true'
      ? true
      : v=='false'
        ? false
        : v)
    prompts.inject(parsedValues)
  }

  // Prompt questions
  const configAnswers = await prompts(configQuestions)

  // Prepare xeira config data
  const xeiraConfigData = {
    ...await getXeiraDefaultConfig(),
    ...configAnswers
  }

  // Save xeira config data
  const xeiraConfigName = path.join(pkgPath, 'xeira.json')
  await saveObjectToJsonWithConfirm(xeiraConfigName, xeiraConfigData, true)

  // Prepare xeira config object
  const xeiraConfig = await getXeiraConfigObj(xeiraConfigData)

  // Update package.json
  const pkgJson = await pkgJsonRead(pkgPath)
  const pkgJsonValues= makePkgJsonValues(xeiraConfig, pkgJson.name)
  await pkgJsonUpdate (pkgPath, pkgJsonValues)
}


(async () => {
  const pkgPath= process.env.PWD

  const injectValues = process.argv.slice(2)

  await xeiraInit(pkgPath, injectValues)

})().catch((error) => {
  const pkgPath= process.env.PWD

  process.exitCode = 1
  initHelp(pkgPath, error)
})
