/**
 * t-f-bundle-common v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import*as e from"trangallada";function t(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){if(this instanceof e){var n=[null];return n.push.apply(n,arguments),new(Function.bind.apply(t,n))}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})})),n}var n=t(e);var o={fooit:function(e){return e.foo="bar",e}},{collTotalBy:r}=n,{fooit:a}=o,i=[a({id:1,name:"Max Power",age:37,money:99.99}),a({id:2,name:"Min Weak",age:25,money:33.33})],u={getMoney:()=>r(i,"money")};export{u as default};
