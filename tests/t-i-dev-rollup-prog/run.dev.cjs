async function testRollupDev () {
  //const {xeiraBundle} = await import('xeira')
  const {xeiraDev} = await import('xeira')
  
  process.env.NODE_ENV = 'development'
    
  console.log('[t-i-dev-rollup-prog] Running DEV mode. Building client')

  //await xeiraBundle({
  //  source_index: './src/cli/index.mjs',
  //  target: 'browser',
  //  bundle_folder: './build',
  //  bundle_name: 'fcic',
  //  bundle_extension: 'iife.bundle',
  //  bundler: 'rollup',
  //  bundle_node_polyfill: true,
  //  watch: true
  //}, async () => {

  await xeiraDev({
    source_index: './src/index.js',
    dev_server: 'rollup',
    bundle_node_polyfill: true,
    host: '0.0.0.0',
    port: 8000
  }, async (server) => {    
    
    console.log('[t-i-dev-rollup-prog] Done')

    setTimeout(() => {
      process.exit(1)
    }, 4000)

  })
}

testRollupDev ()