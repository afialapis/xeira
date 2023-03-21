import path from 'path'

function getDynamicImportOptions (context, output) {
  if (context.inlineDynamicImports) {
    return {
      file: output,
      inlineDynamicImports: true
    }
  }

  return {
    dir: path.dirname(output),
    inlineDynamicImports: false
  }
}

export {getDynamicImportOptions}