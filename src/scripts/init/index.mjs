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

import {makeXeiraConfigObj} from '../../config/xeira.mjs'
import configQuestions from './questions/index.mjs'
import {makePkgJsonValues} from './pkgJsonValues.mjs'
import { blue } from '../../utils/colors.mjs'

async function xeiraInit(xeiraConfig, flyOptions, force) {
  const xeiraConfigName = path.join(xeiraConfig.pkgPath, 'xeira.json')

  // xeiraConfig comes as a merged config from
  //  -- default values
  //  -- values in pkgPath/xeira.json (if any)
  //  -- values passed as args (if any)
  
  // Lets check what values are already saved on xeira.json
  const savedConfig= readJsonFileSync(xeiraConfigName, true)
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
    log_info(xeiraConfig, 'init', 'All options are already set up!')
  }

  // Prepare xeira config data
  const xeiraConfigData = {
    ...xeiraConfig.config,
    ...configAnswers
  }

  // Save xeira.json
  if (askForQuestions.length>0) {
    await saveObjectToJsonWithConfirm(xeiraConfigName, xeiraConfigData, true)
  }

  log_info(xeiraConfig, 'init', `Keeping ${blue('package.json')} is updated`)

  // Prepare xeira config object
  const defXeiraConfig = await makeXeiraConfigObj(xeiraConfigData, xeiraConfig.pkgPath, xeiraConfig.pkgName)

  // Update package.json
  const pkgJsonValues= makePkgJsonValues(defXeiraConfig)
  await pkgJsonUpdate (xeiraConfig.pkgPath, pkgJsonValues)
}

export default xeiraInit
