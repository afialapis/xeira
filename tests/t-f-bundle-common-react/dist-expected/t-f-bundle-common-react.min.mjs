/**
 * t-f-bundle-common-react v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import*as e from"react";import*as t from"trangallada";function r(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];return r.push.apply(r,arguments),new(Function.bind.apply(t,r))}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})})),r}var o=r(e),n=r(t);var a=r(Object.freeze({__proto__:null,fooit:function(e){return e.foo="bar",e}})),i=o,{collTotalBy:f}=n,{fooit:u}=a,l=[u({id:1,name:"Max Power",age:37,money:99.99}),u({id:2,name:"Min Weak",age:25,money:33.33})],p={MoneyDiv:()=>i.createElement("div",{id:"money-div"},f(l,"money"))};export{p as default};
