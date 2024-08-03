"use strict";var m=function(r,s){return function(){return s||r((s={exports:{}}).exports,s),s.exports}};var x=m(function(A,h){
var t=require('@stdlib/number-float64-base-to-float32/dist');function _(r,s,f,v){var q,n,a,e,i,u,c;if(u=r-s,r<=0||u<=0)return NaN;if(r===1||v===0)return 0;for(v<0?n=(1-r)*v:n=0,q=f[n],n+=v,a=0,e=0,c=1;c<r;c++)i=t(f[n]-q),a=t(a+t(i*i)),e=t(e+i),n+=v;return t(t(a/u)-t(t(e/r)*t(e/u)))}h.exports=_
});var M=m(function(B,y){
var o=require('@stdlib/number-float64-base-to-float32/dist');function E(r,s,f,v,q){var n,a,e,i,u,c,l;if(c=r-s,r<=0||c<=0)return NaN;if(r===1||v===0)return 0;for(a=q,n=f[a],a+=v,e=0,i=0,l=1;l<r;l++)u=o(f[a]-n),e=o(e+o(u*u)),i=o(i+u),a+=v;return o(o(e/c)-o(o(i/r)*o(i/c)))}y.exports=E
});var R=m(function(C,F){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),b=M();O(j,"ndarray",b);F.exports=j
});var d=require("path").join,g=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=R(),p,T=g(d(__dirname,"./native.js"));k(T)?p=w:p=T;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
