import {watch} from 'rollup'
import {cfilename, cok} from '../../../../utils/colors.mjs'
import { log_info } from '../../../../utils/log.mjs'

const rollupWatch = (options) => {


  const watcher = watch(options);
  
  // watcher.on('event', event => {
  //   event.code can be one of:
  //     START        — the watcher is (re)starting
  //     BUNDLE_START — building an individual bundle
  //                    * event.input will be the input options object if present
  //                    * event.output contains an array of the "file" or
  //                      "dir" option values of the generated outputs
  //     BUNDLE_END   — finished building a bundle
  //                    * event.input will be the input options object if present
  //                    * event.output contains an array of the "file" or
  //                      "dir" option values of the generated outputs
  //                    * event.duration is the build duration in milliseconds
  //                    * event.result contains the bundle object that can be
  //                      used to generate additional outputs by calling
  //                      bundle.generate or bundle.write. This is especially
  //                      important when the watch.skipWrite option is used.
  //                    You should call "event.result.close()" once you are done
  //                    generating outputs, or if you do not generate outputs.
  //                    This will allow plugins to clean up resources via the
  //                    "closeBundle" hook.
  //     END          — finished building all bundles
  //     ERROR        — encountered an error while bundling
  //                    * event.error contains the error that was thrown
  //                    * event.result is null for build errors and contains the
  //                      bundle object for output generation errors. As with
  //                      "BUNDLE_END", you should call "event.result.close()" if
  //                      present once you are done.
  // });
  
  // This will make sure that bundles are properly closed after each run
  watcher.on('event', (event) => {
    if (event.result) {
      event.result.close();
    } else if (event.code=='END') {
      log_info('demo', `[watch] Rebundled ${cfilename(options.output[0].file)} ${cok('successfully!')}`)
    }
  });
  
  // stop watching
  //watcher.close();
}

export {rollupWatch}