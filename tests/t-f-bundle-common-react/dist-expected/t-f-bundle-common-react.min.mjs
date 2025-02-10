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
import*as e from"react";import*as t from"trangallada";function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var o=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};o.prototype=t.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(o,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),o}var n=r(e),a=r(t);var i=r(Object.freeze({__proto__:null,fooit:function(e){return e.foo="bar",e}})),c=n,{collTotalBy:f}=a,{fooit:u}=i,l=[u({id:1,name:"Max Power",age:37,money:99.99}),u({id:2,name:"Min Weak",age:25,money:33.33})],p=o({MoneyDiv:()=>c.createElement("div",{"data-testid":"money-div"},f(l,"money"))});export{p as default};
