(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[7142],{42759:(r,e,t)=>{"use strict";t.d(e,{if:()=>x,wR:()=>Q,HO:()=>er});var n=t(60307),i=t(25567),o="",u="",l="",p="",s=n.Z&&"ontouchstart"in document.documentElement;if(n.Z){var a={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},f=document.createElement("p").style;for(var c in a)if(c+"Transform"in f){o=c,u=a[c];break}"Webkit"===o&&"msHyphens"in f&&(o="ms",u=a.ms,p="edge"),"Webkit"===o&&"-apple-trailing-word"in f&&(l="apple")}var d=o,m=u,y=l,b=p,k=s;function x(r){return"-"===r[1]||"ms"===d?r:"@"+m+"keyframes"+r.substr(10)}var P={noPrefill:["appearance"],supportedProperty:function(r){return"appearance"===r&&("ms"===d?"-webkit-"+r:m+r)}},g={noPrefill:["color-adjust"],supportedProperty:function(r){return"color-adjust"===r&&("Webkit"===d?m+"print-"+r:r)}},v=/[-\s]+(.)?/g;function w(r,e){return e?e.toUpperCase():""}function h(r){return r.replace(v,w)}function W(r){return h("-"+r)}var z,E={noPrefill:["mask"],supportedProperty:function(r,e){if(!/^mask/.test(r))return!1;if("Webkit"===d){var t="mask-image";if(h(t)in e)return r;if(d+W(t)in e)return m+r}return r}},j={noPrefill:["text-orientation"],supportedProperty:function(r){return"text-orientation"===r&&("apple"!==y||k?r:m+r)}},C={noPrefill:["transform"],supportedProperty:function(r,e,t){return"transform"===r&&(t.transform?r:m+r)}},Z={noPrefill:["transition"],supportedProperty:function(r,e,t){return"transition"===r&&(t.transition?r:m+r)}},M={noPrefill:["writing-mode"],supportedProperty:function(r){return"writing-mode"===r&&("Webkit"===d||"ms"===d&&"edge"!==b?m+r:r)}},N={noPrefill:["user-select"],supportedProperty:function(r){return"user-select"===r&&("Moz"===d||"ms"===d||"apple"===y?m+r:r)}},O={supportedProperty:function(r,e){return!!/^break-/.test(r)&&("Webkit"===d?"WebkitColumn"+W(r)in e&&m+"column-"+r:"Moz"===d&&("page"+W(r)in e&&"page-"+r))}},A={supportedProperty:function(r,e){if(!/^(border|margin|padding)-inline/.test(r))return!1;if("Moz"===d)return r;var t=r.replace("-inline","");return d+W(t)in e&&m+t}},H={supportedProperty:function(r,e){return h(r)in e&&r}},_={supportedProperty:function(r,e){var t=W(r);return"-"===r[0]||"-"===r[0]&&"-"===r[1]?r:d+t in e?m+r:"Webkit"!==d&&"Webkit"+t in e&&"-webkit-"+r}},I={supportedProperty:function(r){return"scroll-snap"===r.substring(0,11)&&("ms"===d?""+m+r:r)}},R={supportedProperty:function(r){return"overscroll-behavior"===r&&("ms"===d?m+"scroll-chaining":r)}},S={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},T={supportedProperty:function(r,e){var t=S[r];return!!t&&(d+W(t)in e&&m+t)}},U={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},q=Object.keys(U),B=function(r){return m+r},D=[P,g,E,j,C,Z,M,N,O,A,H,_,I,R,T,{supportedProperty:function(r,e,t){var n=t.multiple;if(q.indexOf(r)>-1){var i=U[r];if(!Array.isArray(i))return d+W(i)in e&&m+i;if(!n)return!1;for(var o=0;o<i.length;o++)if(!(d+W(i[0])in e))return!1;return i.map(B)}return!1}}],F=D.filter((function(r){return r.supportedProperty})).map((function(r){return r.supportedProperty})),G=D.filter((function(r){return r.noPrefill})).reduce((function(r,e){return r.push.apply(r,(0,i.Z)(e.noPrefill)),r}),[]),J={};if(n.Z){z=document.createElement("p");var K=window.getComputedStyle(document.documentElement,"");for(var L in K)isNaN(L)||(J[K[L]]=K[L]);G.forEach((function(r){return delete J[r]}))}function Q(r,e){if(void 0===e&&(e={}),!z)return r;if(null!=J[r])return J[r];"transition"!==r&&"transform"!==r||(e[r]=r in z.style);for(var t=0;t<F.length&&(J[r]=F[t](r,z.style,e),!J[r]);t++);try{z.style[r]=""}catch(r){return!1}return J[r]}var V,X={},Y={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},$=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;function rr(r,e,t){if("var"===e)return"var";if("all"===e)return"all";if("all"===t)return", all";var n=e?Q(e):", "+Q(t);return n||(e||t)}function er(r,e){var t=e;if(!V||"content"===r)return e;if("string"!=typeof t||!isNaN(parseInt(t,10)))return t;var n=r+t;if(null!=X[n])return X[n];try{V.style[r]=t}catch(r){return X[n]=!1,!1}if(Y[r])t=t.replace($,rr);else if(""===V.style[r]&&("-ms-flex"===(t=m+t)&&(V.style[r]="-ms-flexbox"),V.style[r]=t,""===V.style[r]))return X[n]=!1,!1;return V.style[r]="",X[n]=t,X[n]}n.Z&&(V=document.createElement("p"))}}]);