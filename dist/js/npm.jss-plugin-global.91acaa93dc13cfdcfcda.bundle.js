(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[5458],{58220:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var n=s(61416),r=s(41214),i="@global",o="@global ",u=function(){function t(t,e,s){for(var o in this.type="global",this.at=i,this.rules=void 0,this.options=void 0,this.key=void 0,this.isProcessed=!1,this.key=t,this.options=s,this.rules=new r.RB((0,n.Z)({},s,{parent:this})),e)this.rules.add(o,e[o]);this.rules.process()}var e=t.prototype;return e.getRule=function(t){return this.rules.get(t)},e.addRule=function(t,e,s){var n=this.rules.add(t,e,s);return n&&this.options.jss.plugins.onProcessRule(n),n},e.indexOf=function(t){return this.rules.indexOf(t)},e.toString=function(){return this.rules.toString()},t}(),l=function(){function t(t,e,s){this.type="global",this.at=i,this.options=void 0,this.rule=void 0,this.isProcessed=!1,this.key=void 0,this.key=t,this.options=s;var r=t.substr(o.length);this.rule=s.jss.createRule(r,e,(0,n.Z)({},s,{parent:this}))}return t.prototype.toString=function(t){return this.rule?this.rule.toString(t):""},t}(),h=/\s*,\s*/g;function a(t,e){for(var s=t.split(h),n="",r=0;r<s.length;r++)n+=e+" "+s[r].trim(),s[r+1]&&(n+=", ");return n}const c=function(){return{onCreateRule:function(t,e,s){if(!t)return null;if(t===i)return new u(t,e,s);if("@"===t[0]&&t.substr(0,o.length)===o)return new l(t,e,s);var n=s.parent;return n&&("global"===n.type||n.options.parent&&"global"===n.options.parent.type)&&(s.scoped=!1),!1===s.scoped&&(s.selector=t),null},onProcessRule:function(t,e){"style"===t.type&&e&&(function(t,e){var s=t.options,r=t.style,o=r?r[i]:null;if(o){for(var u in o)e.addRule(u,o[u],(0,n.Z)({},s,{selector:a(u,t.selector)}));delete r[i]}}(t,e),function(t,e){var s=t.options,r=t.style;for(var o in r)if("@"===o[0]&&o.substr(0,i.length)===i){var u=a(o.substr(i.length),t.selector);e.addRule(u,r[o],(0,n.Z)({},s,{selector:u})),delete r[o]}}(t,e))}}}}}]);