//import { mount, configure} from 'enzyme';
import pkg from 'enzyme';
const { configure, mount, shallow } = pkg;


import Adapter from 'enzyme-adapter-react-16';
//import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


let container;

before(function(){
  if (typeof document == 'object') {
    container = document.createElement("div")
    container.id = "react"
    // Append container to the body is needed to avoid the error: 
    //   Error: The target 'rdp-form-control-1' could not be identified in the dom, 
    //     tip: check spelling at tests.bundle.js:82798:13
    // See: https://github.com/reactstrap/reactstrap/issues/773    
    document.body.appendChild(container)
  }
})

after(function() {
  if (typeof document == 'object') {
    document.body.removeChild(container)
  }
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

global.mount= mount_wrap
global.shallow = shallow_wrap
