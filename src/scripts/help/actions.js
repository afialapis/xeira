const {blue_bold, 
       blue_light, 
       red_light, 
       red_bold,
       yellow_italic}= require('farrapa-colors')

// const {getXeiraConfigObj} = require('../../config/xeira')

const _bl= blue_light 
const _bb= blue_bold

function _prepare_text(text) {
  return text
    .split('\n')
    .map(line => line.replace(/^ +/,"")) // remove left spaces
    .join('\n')
    .replace(/\n\n\n/g, '\n\n') // remove doubled empty lines
}

function _log_text(text) {
  console.log(_prepare_text(text))
}

function _log_err(error= undefined) {
  if (error!=undefined) {
    const eprefix= red_bold('Error')
    const emsg= red_light(error?.message || '')
    console.log(`${eprefix}: ${emsg}`)
  }  
}

function _log_help(action, usage, extra, error= undefined) {
  const prefix= _bl('xeira')
  const saction = _bb(action)

  let text= `
    ${prefix} ${saction} 
    
    Usage:
    
    ${usage}
  `
  if (extra) {
    text+= `
    ${extra}
    `
  }
  
  _log_text(text)
  _log_err(error)
}

const _initUsage = `\t${_bl('npx xeira')} ${_bb('init')}`
const _lintUsage =  `\t${_bl('npx xeira')} ${_bb('lint')}`
const _transpileUsage = `  \t${_bl('npx xeira')} ${_bb('transpile')}`
const _bundleUsage = `\t${_bl('npx xeira')} ${_bb('bundle')}`
const _testUsage = `\t${_bl('npx xeira')} ${_bb('test')}`
const _versionUsage = `\t${_bl('npx xeira')} ${_bb('version')} patch|minor|major|0.1.2 [-filter <pattern>]`
const _helpUsage = `\t${_bl('npx xeira')} ${_bb('help')}`

function initHelp(pkgPath, error= undefined) {
  const usage= _initUsage
  const extra = `
  Run this command as the first xeira step.

  It will guide you to create ${yellow_italic('xeira.json')}, the
  xeira's configuration file.`
  _log_help('init', usage, extra)
  _log_err(error)
}

function lintHelp(pkgPath, error= undefined) {
  const usage= _lintUsage
  _log_help('lint', usage, '')
  _log_err(error)   
}

function transpileHelp(pkgPath, error= undefined) {
  const usage= _transpileUsage
  _log_help('transpile', usage, '')
  _log_err(error)   
}

function bundleHelp(pkgPath, error= undefined) {
  const usage= _bundleUsage
  _log_help('bundle', usage, '')
  _log_err(error) 
}

function testHelp(pkgPath, error= undefined) {
  const usage= _testUsage
  _log_help('test', usage, '')
  _log_err(error) 
}

function versionHelp(pkgPath, error= undefined) {
  const usage= _versionUsage
  const extra = `
  If you are in a monorepo, <filter> will filter out packages`
  _log_help('version', usage, extra)
  _log_err(error)
}

function helpHelp(pkgPath, error= undefined) {
  const usage= _helpUsage
  _log_help('help', usage, '')
  _log_err(error)  
}

function globalHelp(error= undefined, extra= undefined) {
  if (error) {
    _log_err(error)

    if (extra) {
      _log_text(extra)
    }
  }

  const text= [
    "xeira's available commands",
    '\n',
    _initUsage,
    '\n',
    _lintUsage,
    '\n',
    _transpileUsage,
    '\n',
    _bundleUsage,
    '\n',
    _testUsage,
    '\n',
    _versionUsage,
    '\n',
    _helpUsage
  ].join('\n')

  _log_text(text)


}


module.exports= {
  initHelp,
  lintHelp,
  transpileHelp,
  bundleHelp,
  testHelp,
  versionHelp,
  helpHelp,
  globalHelp
}