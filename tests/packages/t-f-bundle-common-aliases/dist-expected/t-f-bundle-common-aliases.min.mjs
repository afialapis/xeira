/**
 * t-f-bundle-common-aliases v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import*as e from"trangallada";function t(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];return r.push.apply(r,arguments),new(Function.bind.apply(t,r))}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var r=t(e);var n={fooit:function(e){return e.foo="bar",e}};var o=t(Object.freeze({__proto__:null,barit:function(e){return e.bar="foo",e}})),{collTotalBy:a}=r,{fooit:i}=n,{barit:u}=o,f=[i({id:1,name:"Max Power",age:37,money:99.99}),u({id:2,name:"Min Weak",age:25,money:33.33})],l={getMoney:()=>a(f,"money")};export{l as default};
