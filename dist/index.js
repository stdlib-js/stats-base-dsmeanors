"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=s(function(g,n){
var f=require('@stdlib/blas-ext-base-dssumors/dist');function p(r,e,a){return r<=0?NaN:r===1||a===0?e[0]:f(r,e,a)/r}n.exports=p
});var v=s(function(h,o){
var y=require('@stdlib/blas-ext-base-dssumors/dist').ndarray;function j(r,e,a,u){return r<=0?NaN:r===1||a===0?e[u]:y(r,e,a,u)/r}o.exports=j
});var m=s(function(k,d){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=t(),x=v();l(q,"ndarray",x);d.exports=q
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=m(),i,c=_(R(__dirname,"./native.js"));E(c)?i=O:i=c;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
