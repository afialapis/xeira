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
const UglifyJS = require("uglify-js");

const { getXeiraConfig } = require('../../utils/config');
const pkgPath= process.env.PWD;

function removeTopParent(fpath) {
  const startsWithDel= fpath.indexOf('/')==0
  const index = startsWithDel ? 2 : 1
  const parts = fpath.split('/').slice(index)
  return path.join(...parts);
}


async function compileFile (basePath, filePath, destPath, callback) {
  const realSourcePath = path.join(basePath, filePath)
  const withouParent = removeTopParent(filePath);
  const realDestPath = path.join(basePath, destPath, withouParent);
  
  const destFileFolder = path.dirname(realDestPath)
  
  try {
    await access(destFileFolder)
  } catch(e) {
    await mkdir(destFileFolder, { recursive: true })
  }

  console.log(`[xeira] compiling ${filePath} ==> ${path.join(destPath, withouParent)}...`);
  
  return await callback(realSourcePath, realDestPath)
}

async function compileDirectory (basePath, sourcePath, destPath, callback) {
  let files= []
  try {
    files = await readdir(path.join(basePath, sourcePath))
  } catch(e) {
    console.error(`[xeira] compile: Folder ${path.join(basePath, sourcePath)} does not exist`)
    return
  }

  return Promise.all(
    files.map(async (file) => {
      const filePath= path.join(sourcePath, file)
      const stats= await stat(filePath)
      if (stats.isDirectory()) {
        return await compileDirectory(basePath, filePath, destPath, callback)
      } else if (stats.isFile()) {
        if (file.endsWith('.js')) {
          return await compileFile(basePath, filePath, destPath, callback)
        }
      }
  }))
}


(async function main() {
  
  // get xeira config
  const xeiraConfig = getXeiraConfig(pkgPath);
  
  // prepae babel options
  const getBabelConfig = require('./babel.config');
  const babelConfig = getBabelConfig(xeiraConfig);
  
  const getUglifyConfig = require('./uglify.config');
  const uglifyCfg = getUglifyConfig(xeiraConfig);

  const args = process.argv.slice(2);
  let sourcePath= 'src'
  let destPath = 'lib'
  if (args.length==2) {
    sourcePath = args[0] || 'src'
    destPath = args[1] || 'lib'
  } else {
    console.warn(`[xeira] compile: no params passed, so taking defaults. npx xeira compile [src] [lib].`)
  }
  

  await compileDirectory(pkgPath, sourcePath, destPath, async (filepath, destpath) => {
    if (xeiraConfig.compileWithBabel) {
      let { code } = await transformFileAsync(filepath, babelConfig);
      if (xeiraConfig.minifyWithUglify) {
        const result= UglifyJS.minify(code, uglifyCfg);
        code= result.code
      }
      return await writeFile(destpath, code);
    }
  })

})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
