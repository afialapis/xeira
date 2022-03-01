import {YELLOW} from 'farrapa-colors'

const bothPkg = (foo) => {
  console.log(YELLOW(`Calling both-pkg's bothPkg(${foo})`))
}

export {bothPkg}