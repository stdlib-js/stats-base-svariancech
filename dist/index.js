"use strict";var q=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var f=q(function(B,d){
var e=require('@stdlib/number-float64-base-to-float32/dist');function _(r,a,n,i,R){var y,v,u,t,s,c,o;if(c=r-a,r<=0||c<=0)return NaN;if(r===1||i===0)return 0;for(v=R,y=n[v],v+=i,u=0,t=0,o=1;o<r;o++)s=e(n[v]-y),u=e(u+e(s*s)),t=e(t+s),v+=i;return e(e(u/c)-e(e(t/r)*e(t/c)))}d.exports=_
});var l=q(function(C,h){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=f();function O(r,a,n,i){return F(r,a,n,i,E(r,i))}h.exports=O
});var j=q(function(D,x){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=l(),b=f();T(m,"ndarray",b);x.exports=m
});var g=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=j(),p,M=k(g(__dirname,"./native.js"));w(M)?p=z:p=M;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
