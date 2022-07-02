/**
 * t-bundle-common v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import*as e from"farrapa-collections";function t(e){var t=e.default;if("function"==typeof t){var o=function(){return t.apply(this,arguments)};o.prototype=t.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(o,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),o}var o=t(e);var r={fooit:function(e){return e.foo="bar",e}},{collTotalBy:n}=o,{fooit:a}=r,f=[a({id:1,name:"Max Power",age:37,money:99.99}),a({id:2,name:"Min Weak",age:25,money:33.33})],i={getMoney:()=>n(f,"money")};export{i as default};
