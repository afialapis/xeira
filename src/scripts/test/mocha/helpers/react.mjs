// import React from 'react'
// import pkg, { render } from 'enzyme';
// const { /*configure,*/ mount, shallow } = pkg;

import {render, cleanup, configure} from '@testing-library/react'

//import Adapter from 'enzyme-adapter-react-16';
//import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//configure({ adapter: new Adapter() });


// let container;
// 
// before(function(){
//   if (typeof document == 'object') {
//     container = document.createElement("div")
//     container.id = "react"
//     // Append container to the body is needed to avoid the error: 
//     //   Error: The target 'rdp-form-control-1' could not be identified in the dom, 
//     //     tip: check spelling at tests.bundle.js:82798:13
//     // See: https://github.com/reactstrap/reactstrap/issues/773    
//     document.body.appendChild(container)
//   }
// })
// 
// after(function() {
//   if (typeof document == 'object') {
//     document.body.removeChild(container)
//   }
// }) 

// const mount_wrap = (Component) => {
//   const wrapper= mount(<Component/>, {
//     attachTo: container
//   })
//   return wrapper  
// }
// 
// const shallow_wrap = (Component) => {
//   const wrapper= shallow(<Component/>, {
//     attachTo: container
//   })
//   return wrapper  
// }

// global.mount= mount // mount_wrap
// global.shallow = shallow // shallow_wrap

global.render = render
global.cleanup = cleanup
global.configure = configure


