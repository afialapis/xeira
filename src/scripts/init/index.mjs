/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

import path from 'path'
import prompts from 'prompts'
import {log_info} from '../../utils/log.mjs'
import {saveObjectToJsonWithConfirm} from '../../utils/io.mjs'
import {pkgJsonUpdate} from '../../utils/pkgJson.mjs'
import {readJsonFileSync} from '../../utils/json.mjs'
import configQuestions from './questions/index.mjs'
import {makePkgJsonValues} from './pkgJsonValues.mjs'
import { cfilename } from '../../utils/colors.mjs'
import { makeXeiraContext } from '../../context/index.mjs'

async function xeiraInit(context, flyOptions, force) {
  const xeiraConfigPath = path.join(context.pkgPath, 'xeira.json')

  // context comes as a merged config from
  //  -- default values
  //  -- values in pkgPath/xeira.json (if any)
  //  -- values passed as args (if any)
  
  // Lets check what values are already saved on xeira.json
  const savedConfig= readJsonFileSync(xeiraConfigPath, true)
  const savedOptions= Object.keys(savedConfig)
  
  // We will ask just for the options which
  // -- are yet not saved 
  // -- were not passed by argument
  const askForQuestions = force
    ? configQuestions
    : configQuestions
    .filter(q => savedOptions.indexOf(q.name)<0)
    .filter(q => flyOptions.indexOf(q.name)<0)
  
  // Prompt questions
  let configAnswers = {}
  if (askForQuestions.length>0) {
    configAnswers = await prompts(askForQuestions)
  } else {
    log_info(context, 'init', 'All options are already set up!')
  }

  // Prepare xeira config data
  const contextData = {
    ...context.config,
    ...configAnswers
  }

  // Save xeira.json
  if (askForQuestions.length>0) {
    await saveObjectToJsonWithConfirm(xeiraConfigPath, contextData, true)
  }

  log_info(context, 'init', `Keeping ${cfilename('package.json')} is updated`)

  // Prepare xeira config object
  const defXeiraContext = makeXeiraContext(contextData, context.pkgPath, context.pkgName)

  // Update package.json
  const pkgJsonValues= makePkgJsonValues(defXeiraContext)
  await pkgJsonUpdate (context.pkgPath, pkgJsonValues)
}

export default xeiraInit
