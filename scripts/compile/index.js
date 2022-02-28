/**
 * Copyright (c) 2022-present, afialapis.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});


const path = require('path');
const {readdir, stat, writeFile, mkdir, access} = require('fs/promises');
const {transformFileAsync} = require("@babel/core");

const { getXeiraConfig } = require('../../utils/config');
const pkgPath= process.env.PWD;

function removeTopParent(fpath) {
  const startsWithDel= fpath.indexOf('/')==0
  const index = startsWithDel ? 2 : 1
  const parts = fpath.split('/').slice(index)
  return path.join(...parts);
}


async function compileFile (basePath, filePath, destPath, babelCfg) {
  const withouParent = removeTopParent(filePath);
  const realDestPath = path.join(basePath, destPath, withouParent);
  console.log(`[xeira] compiling ${path.join(basePath, filePath)} ==> ${realDestPath}...`);

  const { code } = await transformFileAsync(path.join(basePath, filePath), babelCfg);

  const destFileFolder = path.dirname(realDestPath)
  console.log(destFileFolder)
  
  try {
    await access(destFileFolder)
  } catch(e) {
    await mkdir(destFileFolder)
  }
  return await writeFile(realDestPath, code);
}

async function compileDirectory (basePath, sourcePath, destPath, babelCfg) {
  const files = await readdir(path.join(basePath, sourcePath))

  return Promise.all(
    files.map(async (file) => {
      const filePath= path.join(sourcePath, file)
      const stats= await stat(filePath)
      if (stats.isDirectory()) {
        return await compileDirectory(basePath, filePath, destPath, babelCfg)
      } else if (stats.isFile()) {
        if (file.endsWith('.js')) {
          return await compileFile(basePath, filePath, destPath, babelCfg)
        }
      }
  }))
}


(async function main() {
  
  // get xeira config
  const xeiraConfig = getXeiraConfig(pkgPath);
  
  // prepae eslint options
  const babelCfgName = xeiraConfig.usesReact
    ? './babel.react.config'
    : './babel.config';
  
  const babelCfg = require(babelCfgName);
  

  await compileDirectory(pkgPath, 'scripts', 'lib', babelCfg)

})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
