/**
 * t-f-bundle-esm-dyn-imports-chunk v0.0.1
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
import{collTotalBy as n}from"trangallada";function r(n,r,t,o,e,i,a){try{var u=n[i](a),f=u.value}catch(n){return void t(n)}u.done?r(f):Promise.resolve(f).then(o,e)}function t(n){return function(){var t=this,o=arguments;return new Promise((function(e,i){var a=n.apply(t,o);function u(n){r(a,e,i,u,f,"next",n)}function f(n){r(a,e,i,u,f,"throw",n)}u(void 0)}))}}var o=function(){var n=t((function*(){var{fooit:n}=yield import("./foo-D3nyoF6d.js");return[n({id:1,name:"Max Power",age:37,money:99.99}),n({id:2,name:"Min Weak",age:25,money:33.33})]}));return function(){return n.apply(this,arguments)}}(),e=function(){var r=t((function*(){var r=yield o();return n(r,"money")}));return function(){return r.apply(this,arguments)}}();export{e as getMoney};
