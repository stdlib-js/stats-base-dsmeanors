"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=s(function(h,t){
var y=require('@stdlib/blas-ext-base-dssumors/dist').ndarray;function f(r,e,a,u){return r<=0?NaN:r===1||a===0?e[u]:y(r,e,a,u)/r}t.exports=f
});var v=s(function(k,o){
var p=require('@stdlib/strided-base-stride2offset/dist'),j=i();function x(r,e,a){return j(r,e,a,p(r,a))}o.exports=x
});var m=s(function(w,d){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=i();l(q,"ndarray",R);d.exports=q
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=m(),n,c=E(_(__dirname,"./native.js"));O(c)?n=b:n=c;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
