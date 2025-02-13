/**
 * t-f-bundle-common-aliases v0.0.1
 *
 * 
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import*as e from"trangallada";function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})})),r}var o,n,a=r(e);var u,f,i=r(Object.freeze({__proto__:null,barit:function(e){return e.bar="foo",e}}));var c=function(){if(f)return u;f=1;var{collTotalBy:e}=a,{fooit:t}=n?o:(n=1,o={fooit:function(e){return e.foo="bar",e}}),{barit:r}=i,c=[t({id:1,name:"Max Power",age:37,money:99.99}),r({id:2,name:"Min Weak",age:25,money:33.33})];return u={getMoney:()=>e(c,"money")}}(),l=t(c);export{l as default};
