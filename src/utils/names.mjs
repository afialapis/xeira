function getJSValidPkgName(pkgName) {
  return pkgName
  // to tile case 
  .replace(
    /\w*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  )
  // remove -_
  .replace(/[-_]/g, '')
}

const minifyJsExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');

const minifyMjsExtension = pathToFile => pathToFile.replace(/\.mjs$/, '.min.mjs');

function toTitleCase(str) {
  let s= str.replace(
    /\w*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  )
  s= s.charAt(0).toLowerCase() + s.substr(1);
  s= s.replace(/-/g,'')
  return s
}


const GLOBALS_DEFAULT = {
  'react-dom/client': 'ReactDOMClient',
  'react-dom/server': 'ReactDOMServer',

  'farrapa/colors': 'FarrapaColors',
  'farrapa/numbers': 'FarrapaNumbers',
  'farrapa/commons': 'FarrapaCommons',
  'farrapa/checkers': 'FarrapaCheckers',
  'farrapa/collections': 'FarrapaCollections',
  'farrapa/encoding': 'FarrapaEncoding',
  'farrapa/iter': 'FarrapaIter',
  'farrapa/memoize': 'FarrapaMemoize',
  'farrapa/objects': 'FarrapaObjects',
  'farrapa/pretty-console': 'FarrapaPrettyConsole',
  'farrapa/promises': 'FarrapaPromises',
  'farrapa/strings': 'FarrapaStrings',
  'farrapa/url': 'FarrapaURL',

  'miolo/server': 'MioloServer',
  'miolo/cli': 'MioloCli',
  'miolo/cli-react': 'MioloCliReact',

}

const makeGlobals = (pkgJson) => {
  const deps = {
    ...pkgJson?.dependencies || {},
    ...pkgJson?.peerDependencies || {},
  }
  const depNames= Object.keys(deps)
  if (depNames.length < 1) {
    return {}
  }

  const globals= {
    ...GLOBALS_DEFAULT
  }
  depNames.map((n) => {
    globals[n]= toTitleCase(n)
  })
  return globals
}

const addSuffix = (s, suf) => 
  s
  .replace(/\.js$/, `.${suf}.js`)
  .replace(/\.mjs$/, `.${suf}.mjs`)
  .replace(/\.cjs$/, `.${suf}.cjs`)


export {getJSValidPkgName, minifyJsExtension, minifyMjsExtension, toTitleCase, makeGlobals}








