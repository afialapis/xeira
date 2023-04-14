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
import*as e from"react";import*as t from"trangallada";function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];return r.push.apply(r,arguments),new(Function.bind.apply(t,r))}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})})),r}var n=o(e),a=o(t);var i=o(Object.freeze({__proto__:null,fooit:function(e){return e.foo="bar",e}})),u=n,{collTotalBy:f}=a,{fooit:l}=i,p=[l({id:1,name:"Max Power",age:37,money:99.99}),l({id:2,name:"Min Weak",age:25,money:33.33})],c=r({MoneyDiv:()=>u.createElement("div",{id:"money-div"},f(p,"money"))});export{c as default};
