//import { mount, configure} from 'enzyme';
import pkg from 'enzyme';
const { configure, mount, shallow } = pkg;


import chai from 'chai'
// import chaiAsPromised from 'chai-as-promised'
// import * as td from 'testdouble'
// 
// chai.use(chaiAsPromised)


import Adapter from 'enzyme-adapter-react-16';
//import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


let container;

before(function(){
  container = document.createElement("div")
  container.id = "react"
  // Append container to the body is needed to avoid the error: 
  //   Error: The target 'rdp-form-control-1' could not be identified in the dom, 
  //     tip: check spelling at tests.bundle.js:82798:13
  // See: https://github.com/reactstrap/reactstrap/issues/773    
  document.body.appendChild(container)
})

after(function(){
  document.body.removeChild(container)
}) 

const mount_wrap = (component) => {
  const wrapper= mount(component, {
    attachTo: container
  })
  return wrapper  
}

const shallow_wrap = (component) => {
  const wrapper= shallow(component, {
    attachTo: container
  })
  return wrapper  
}

global.expect= chai.expect
global.mount= mount_wrap
global.shallow = shallow_wrap
// global.td = td;
// 
// export const mochaHooks = {
//   afterEach() {
//     td.reset();
//   }
// };


//  "test-command": "mocha --exit --timeout 500 --slow 300 --require @babel/register --require ./test/dom.js --require ignore-styles ./test/helpers.js ",
//  "test-file": "npm run test-command --bail ",
//  "test-r17": "npm run test-command --paralell $(find ./test -name '*.js' ! -path '**/_*.js')",
//  "test":     "npm run test-command --bail $(find ./test -name '*.js' ! -path '**/_*.js')",
