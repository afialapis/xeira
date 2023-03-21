/**
 * t-f-bundle-esm-dyn-imports-inline v0.0.1
 *
 * Copyright (c) -no-author-
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import{collTotalBy as n}from"trangallada";function r(n,r,t,e,o,i,u){try{var a=n[i](u),f=a.value}catch(c){return void t(c)}a.done?r(f):Promise.resolve(f).then(e,o)}function t(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var u=n.apply(t,e);function a(n){r(u,o,i,a,f,"next",n)}function f(n){r(u,o,i,a,f,"throw",n)}a(void 0)}))}}var e=function(){var n=t((function*(){var{fooit:n}=yield Promise.resolve().then((function(){return i}));return[n({id:1,name:"Max Power",age:37,money:99.99}),n({id:2,name:"Min Weak",age:25,money:33.33})]}));return function(){return n.apply(this,arguments)}}(),o=function(){var r=t((function*(){var r=yield e();return n(r,"money")}));return function(){return r.apply(this,arguments)}}();var i=Object.freeze({__proto__:null,fooit:function(n){return n.foo="bar",n}});export{o as getMoney};
