(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3/ER":function(t,e,r){"use strict";(function(t){var n=r("Ju5/"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o?n.a.Buffer:void 0,s=a?a.allocUnsafe:void 0;e.a=function(t,e){if(e)return t.slice();var r=t.length,n=s?s(r):new t.constructor(r);return t.copy(n),n}}).call(this,r("3UD+")(t))},"3UD+":function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},"Ju5/":function(t,e,r){"use strict";var n=r("XqMk"),o="object"==typeof self&&self&&self.Object===Object&&self,i=n.a||o||Function("return this")();e.a=i},L3Qv:function(t,e,r){"use strict";e.a=function(){return!1}},WOAq:function(t,e,r){"use strict";(function(t){var n=r("Ju5/"),o=r("L3Qv"),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=a&&a.exports===i?n.a.Buffer:void 0,c=(s?s.isBuffer:void 0)||o.a;e.a=c}).call(this,r("3UD+")(t))},XqMk:function(t,e,r){"use strict";var n="object"==typeof global&&global&&global.Object===Object&&global;e.a=n},xutz:function(t,e,r){"use strict";(function(t){var n=r("XqMk"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&n.a.process,s=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(e){}}();e.a=s}).call(this,r("3UD+")(t))},zioG:function(t,e,r){"use strict";r.d(e,"a",(function(){return Ar}));var n=r("mrSG");var o=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},i=r("Ju5/"),a=function(){return i.a.Date.now()},s=i.a.Symbol,c=Object.prototype,u=c.hasOwnProperty,h=c.toString,f=s?s.toStringTag:void 0;var d=function(t){var e=u.call(t,f),r=t[f];try{t[f]=void 0;var n=!0}catch(i){}var o=h.call(t);return n&&(e?t[f]=r:delete t[f]),o},l=Object.prototype.toString;var p=function(t){return l.call(t)},v=s?s.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?d(t):p(t)};var y=function(t){return null!=t&&"object"==typeof t};var g=function(t){return"symbol"==typeof t||y(t)&&"[object Symbol]"==b(t)},_=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,w=/^0o[0-7]+$/i,O=parseInt;var E=function(t){if("number"==typeof t)return t;if(g(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(_,"");var r=j.test(t);return r||w.test(t)?O(t.slice(2),r?2:8):m.test(t)?NaN:+t},x=Math.max,A=Math.min;var D=function(t,e,r){var n,i,s,c,u,h,f=0,d=!1,l=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var r=n,o=i;return n=i=void 0,f=e,c=t.apply(o,r)}function b(t){return f=t,u=setTimeout(g,e),d?v(t):c}function y(t){var r=t-h;return void 0===h||r>=e||r<0||l&&t-f>=s}function g(){var t=a();if(y(t))return _(t);u=setTimeout(g,function(t){var r=e-(t-h);return l?A(r,s-(t-f)):r}(t))}function _(t){return u=void 0,p&&n?v(t):(n=i=void 0,c)}function m(){var t=a(),r=y(t);if(n=arguments,i=this,h=t,r){if(void 0===u)return b(h);if(l)return clearTimeout(u),u=setTimeout(g,e),v(h)}return void 0===u&&(u=setTimeout(g,e)),c}return e=E(e)||0,o(r)&&(d=!!r.leading,s=(l="maxWait"in r)?x(E(r.maxWait)||0,e):s,p="trailing"in r?!!r.trailing:p),m.cancel=function(){void 0!==u&&clearTimeout(u),f=0,n=h=i=u=void 0},m.flush=function(){return void 0===u?c:_(a())},m};var S=function(t,e,r){var n=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),D(t,e,{leading:n,maxWait:e,trailing:i})};var P=function(){this.__data__=[],this.size=0};var I=function(t,e){return t===e||t!=t&&e!=e};var T=function(t,e){for(var r=t.length;r--;)if(I(t[r][0],e))return r;return-1},C=Array.prototype.splice;var M=function(t){var e=this.__data__,r=T(e,t);return!(r<0)&&(r==e.length-1?e.pop():C.call(e,r,1),--this.size,!0)};var N=function(t){var e=this.__data__,r=T(e,t);return r<0?void 0:e[r][1]};var W=function(t){return T(this.__data__,t)>-1};var z=function(t,e){var r=this.__data__,n=T(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function R(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}R.prototype.clear=P,R.prototype.delete=M,R.prototype.get=N,R.prototype.has=W,R.prototype.set=z;var U=R;var F=function(){this.__data__=new U,this.size=0};var k=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var L=function(t){return this.__data__.get(t)};var V=function(t){return this.__data__.has(t)};var $,B=function(t){if(!o(t))return!1;var e=b(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},H=i.a["__core-js_shared__"],Z=($=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||""))?"Symbol(src)_1."+$:"";var J=function(t){return!!Z&&Z in t},q=Function.prototype.toString;var X=function(t){if(null!=t){try{return q.call(t)}catch(e){}try{return t+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,Y=K.toString,tt=Q.hasOwnProperty,et=RegExp("^"+Y.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var rt=function(t){return!(!o(t)||J(t))&&(B(t)?et:G).test(X(t))};var nt=function(t,e){return null==t?void 0:t[e]};var ot=function(t,e){var r=nt(t,e);return rt(r)?r:void 0},it=ot(i.a,"Map"),at=ot(Object,"create");var st=function(){this.__data__=at?at(null):{},this.size=0};var ct=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ut=Object.prototype.hasOwnProperty;var ht=function(t){var e=this.__data__;if(at){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return ut.call(e,t)?e[t]:void 0},ft=Object.prototype.hasOwnProperty;var dt=function(t){var e=this.__data__;return at?void 0!==e[t]:ft.call(e,t)};var lt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=at&&void 0===e?"__lodash_hash_undefined__":e,this};function pt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}pt.prototype.clear=st,pt.prototype.delete=ct,pt.prototype.get=ht,pt.prototype.has=dt,pt.prototype.set=lt;var vt=pt;var bt=function(){this.size=0,this.__data__={hash:new vt,map:new(it||U),string:new vt}};var yt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var gt=function(t,e){var r=t.__data__;return yt(e)?r["string"==typeof e?"string":"hash"]:r.map};var _t=function(t){var e=gt(this,t).delete(t);return this.size-=e?1:0,e};var mt=function(t){return gt(this,t).get(t)};var jt=function(t){return gt(this,t).has(t)};var wt=function(t,e){var r=gt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function Ot(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ot.prototype.clear=bt,Ot.prototype.delete=_t,Ot.prototype.get=mt,Ot.prototype.has=jt,Ot.prototype.set=wt;var Et=Ot;var xt=function(t,e){var r=this.__data__;if(r instanceof U){var n=r.__data__;if(!it||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Et(n)}return r.set(t,e),this.size=r.size,this};function At(t){var e=this.__data__=new U(t);this.size=e.size}At.prototype.clear=F,At.prototype.delete=k,At.prototype.get=L,At.prototype.has=V,At.prototype.set=xt;var Dt=At;var St=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},Pt=function(){try{var t=ot(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();var It=function(t,e,r){"__proto__"==e&&Pt?Pt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},Tt=Object.prototype.hasOwnProperty;var Ct=function(t,e,r){var n=t[e];Tt.call(t,e)&&I(n,r)&&(void 0!==r||e in t)||It(t,e,r)};var Mt=function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var s=e[i],c=n?n(r[s],t[s],s,r,t):void 0;void 0===c&&(c=t[s]),o?It(r,s,c):Ct(r,s,c)}return r};var Nt=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var Wt=function(t){return y(t)&&"[object Arguments]"==b(t)},zt=Object.prototype,Rt=zt.hasOwnProperty,Ut=zt.propertyIsEnumerable,Ft=Wt(function(){return arguments}())?Wt:function(t){return y(t)&&Rt.call(t,"callee")&&!Ut.call(t,"callee")},kt=Array.isArray,Lt=r("WOAq"),Vt=/^(?:0|[1-9]\d*)$/;var $t=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&Vt.test(t))&&t>-1&&t%1==0&&t<e};var Bt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Ht={};Ht["[object Float32Array]"]=Ht["[object Float64Array]"]=Ht["[object Int8Array]"]=Ht["[object Int16Array]"]=Ht["[object Int32Array]"]=Ht["[object Uint8Array]"]=Ht["[object Uint8ClampedArray]"]=Ht["[object Uint16Array]"]=Ht["[object Uint32Array]"]=!0,Ht["[object Arguments]"]=Ht["[object Array]"]=Ht["[object ArrayBuffer]"]=Ht["[object Boolean]"]=Ht["[object DataView]"]=Ht["[object Date]"]=Ht["[object Error]"]=Ht["[object Function]"]=Ht["[object Map]"]=Ht["[object Number]"]=Ht["[object Object]"]=Ht["[object RegExp]"]=Ht["[object Set]"]=Ht["[object String]"]=Ht["[object WeakMap]"]=!1;var Zt=function(t){return y(t)&&Bt(t.length)&&!!Ht[b(t)]};var Jt=function(t){return function(e){return t(e)}},qt=r("xutz"),Xt=qt.a&&qt.a.isTypedArray,Gt=Xt?Jt(Xt):Zt,Kt=Object.prototype.hasOwnProperty;var Qt=function(t,e){var r=kt(t),n=!r&&Ft(t),o=!r&&!n&&Object(Lt.a)(t),i=!r&&!n&&!o&&Gt(t),a=r||n||o||i,s=a?Nt(t.length,String):[],c=s.length;for(var u in t)!e&&!Kt.call(t,u)||a&&("length"==u||o&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||$t(u,c))||s.push(u);return s},Yt=Object.prototype;var te=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Yt)};var ee=function(t,e){return function(r){return t(e(r))}},re=ee(Object.keys,Object),ne=Object.prototype.hasOwnProperty;var oe=function(t){if(!te(t))return re(t);var e=[];for(var r in Object(t))ne.call(t,r)&&"constructor"!=r&&e.push(r);return e};var ie=function(t){return null!=t&&Bt(t.length)&&!B(t)};var ae=function(t){return ie(t)?Qt(t):oe(t)};var se=function(t,e){return t&&Mt(e,ae(e),t)};var ce=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},ue=Object.prototype.hasOwnProperty;var he=function(t){if(!o(t))return ce(t);var e=te(t),r=[];for(var n in t)("constructor"!=n||!e&&ue.call(t,n))&&r.push(n);return r};var fe=function(t){return ie(t)?Qt(t,!0):he(t)};var de=function(t,e){return t&&Mt(e,fe(e),t)},le=r("3/ER");var pe=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e};var ve=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i};var be=function(){return[]},ye=Object.prototype.propertyIsEnumerable,ge=Object.getOwnPropertySymbols,_e=ge?function(t){return null==t?[]:(t=Object(t),ve(ge(t),(function(e){return ye.call(t,e)})))}:be;var me=function(t,e){return Mt(t,_e(t),e)};var je=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},we=ee(Object.getPrototypeOf,Object),Oe=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)je(e,_e(t)),t=we(t);return e}:be;var Ee=function(t,e){return Mt(t,Oe(t),e)};var xe=function(t,e,r){var n=e(t);return kt(t)?n:je(n,r(t))};var Ae=function(t){return xe(t,ae,_e)};var De=function(t){return xe(t,fe,Oe)},Se=ot(i.a,"DataView"),Pe=ot(i.a,"Promise"),Ie=ot(i.a,"Set"),Te=ot(i.a,"WeakMap"),Ce=X(Se),Me=X(it),Ne=X(Pe),We=X(Ie),ze=X(Te),Re=b;(Se&&"[object DataView]"!=Re(new Se(new ArrayBuffer(1)))||it&&"[object Map]"!=Re(new it)||Pe&&"[object Promise]"!=Re(Pe.resolve())||Ie&&"[object Set]"!=Re(new Ie)||Te&&"[object WeakMap]"!=Re(new Te))&&(Re=function(t){var e=b(t),r="[object Object]"==e?t.constructor:void 0,n=r?X(r):"";if(n)switch(n){case Ce:return"[object DataView]";case Me:return"[object Map]";case Ne:return"[object Promise]";case We:return"[object Set]";case ze:return"[object WeakMap]"}return e});var Ue=Re,Fe=Object.prototype.hasOwnProperty;var ke=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Fe.call(t,"index")&&(r.index=t.index,r.input=t.input),r},Le=i.a.Uint8Array;var Ve=function(t){var e=new t.constructor(t.byteLength);return new Le(e).set(new Le(t)),e};var $e=function(t,e){var r=e?Ve(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)},Be=/\w*$/;var He=function(t){var e=new t.constructor(t.source,Be.exec(t));return e.lastIndex=t.lastIndex,e},Ze=s?s.prototype:void 0,Je=Ze?Ze.valueOf:void 0;var qe=function(t){return Je?Object(Je.call(t)):{}};var Xe=function(t,e){var r=e?Ve(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var Ge=function(t,e,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return Ve(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return $e(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Xe(t,r);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return He(t);case"[object Set]":return new n;case"[object Symbol]":return qe(t)}},Ke=Object.create,Qe=function(){function t(){}return function(e){if(!o(e))return{};if(Ke)return Ke(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var Ye=function(t){return"function"!=typeof t.constructor||te(t)?{}:Qe(we(t))};var tr=function(t){return y(t)&&"[object Map]"==Ue(t)},er=qt.a&&qt.a.isMap,rr=er?Jt(er):tr;var nr=function(t){return y(t)&&"[object Set]"==Ue(t)},or=qt.a&&qt.a.isSet,ir=or?Jt(or):nr,ar={};ar["[object Arguments]"]=ar["[object Array]"]=ar["[object ArrayBuffer]"]=ar["[object DataView]"]=ar["[object Boolean]"]=ar["[object Date]"]=ar["[object Float32Array]"]=ar["[object Float64Array]"]=ar["[object Int8Array]"]=ar["[object Int16Array]"]=ar["[object Int32Array]"]=ar["[object Map]"]=ar["[object Number]"]=ar["[object Object]"]=ar["[object RegExp]"]=ar["[object Set]"]=ar["[object String]"]=ar["[object Symbol]"]=ar["[object Uint8Array]"]=ar["[object Uint8ClampedArray]"]=ar["[object Uint16Array]"]=ar["[object Uint32Array]"]=!0,ar["[object Error]"]=ar["[object Function]"]=ar["[object WeakMap]"]=!1;var sr=function t(e,r,n,i,a,s){var c,u=1&r,h=2&r,f=4&r;if(n&&(c=a?n(e,i,a,s):n(e)),void 0!==c)return c;if(!o(e))return e;var d=kt(e);if(d){if(c=ke(e),!u)return pe(e,c)}else{var l=Ue(e),p="[object Function]"==l||"[object GeneratorFunction]"==l;if(Object(Lt.a)(e))return Object(le.a)(e,u);if("[object Object]"==l||"[object Arguments]"==l||p&&!a){if(c=h||p?{}:Ye(e),!u)return h?Ee(e,de(c,e)):me(e,se(c,e))}else{if(!ar[l])return a?e:{};c=Ge(e,l,u)}}s||(s=new Dt);var v=s.get(e);if(v)return v;s.set(e,c),ir(e)?e.forEach((function(o){c.add(t(o,r,n,o,e,s))})):rr(e)&&e.forEach((function(o,i){c.set(i,t(o,r,n,i,e,s))}));var b=f?h?De:Ae:h?keysIn:ae,y=d?void 0:b(e);return St(y||e,(function(o,i){y&&(o=e[i=o]),Ct(c,i,t(o,r,n,i,e,s))})),c};var cr=function(t,e){return sr(t,5,e="function"==typeof e?e:void 0)},ur=Function.prototype,hr=Object.prototype,fr=ur.toString,dr=hr.hasOwnProperty,lr=fr.call(Object);var pr=function(t){if(!y(t)||"[object Object]"!=b(t))return!1;var e=we(t);if(null===e)return!0;var r=dr.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&fr.call(r)==lr};var vr=function(t){return y(t)&&1===t.nodeType&&!pr(t)};function br(t,e=new Set){const r=[t],n=new Set;for(;r.length>0;){const t=r.shift();if(!(n.has(t)||yr(t)||e.has(t)))if(n.add(t),t[Symbol.iterator])try{for(const e of t)r.push(e)}catch(o){}else for(const e in t)"defaultValue"!==e&&r.push(t[e])}return n}function yr(t){const e=Object.prototype.toString.call(t),r=typeof t;return"number"===r||"boolean"===r||"string"===r||"symbol"===r||"function"===r||"[object Date]"===e||"[object RegExp]"===e||"[object Module]"===e||null==t||t instanceof EventTarget||t instanceof Event}class gr extends class{constructor(t){if(this.crashes=[],this.state="initializing",this._crashNumberLimit="number"==typeof t.crashNumberLimit?t.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod="number"==typeof t.minimumNonErrorTimePeriod?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const e=t.error||t.reason;e instanceof Error&&this._handleError(e,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter(t=>t!==e)}_fire(t,...e){const r=this._listeners[t]||[];for(const n of r)n.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e.filename,lineno:e.lineno,colno:e.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&void 0!==t.context&&null!==t.context&&"ready"===this.state&&this._isErrorComingFromThisItem(t)}_shouldRestart(){if(this.crashes.length<=this._crashNumberLimit)return!0;return(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}{constructor(t,e={}){super(e),this._editor=null,this._throttledSave=S(this._save.bind(this),"number"==typeof e.saveInterval?e.saveInterval:5e3),this._creator=(e,r)=>t.create(e,r),this._destructor=t=>t.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(t=>{console.error("An error happened during the editor destroying.",t)}).then(()=>{if("string"==typeof this._elementOrData)return this.create(this._data,this._config,this._config.context);{const t=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,t,t.context)}}).then(()=>{this._fire("restart")})}create(t=this._elementOrData,e=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=t,this._config=this._cloneEditorConfiguration(e)||{},this._config.context=r,this._creator(t,this._config))).then(t=>{this._editor=t,t.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=t.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const t=this._editor;return this._editor=null,this._destructor(t)})}_save(){const t=this._editor.model.document.version;if(t!==this._lastDocumentVersion)try{this._data=this._getData(),this._lastDocumentVersion=t}catch(e){console.error(e,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t={};for(const e of this._editor.model.document.getRootNames())t[e]=this._editor.data.get({rootName:e});return t}_isErrorComingFromThisItem(t){return function(t,e,r=new Set){if(t===e&&("object"==typeof(n=t)&&null!==n))return!0;var n;const o=br(t,r),i=br(e,r);for(const a of o)if(i.has(a))return!0;return!1}(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return cr(t,(t,e)=>vr(t)||"context"===e?t:void 0)}}var _r,mr=r("fXoL"),jr=r("ofXK"),wr=r("3Pt+");function Or(t,e){}!function(t){t.EditorConstructor=function(){},t.Config=function(){},t.EventInfo=function(){},t.BaseEditor=function(){},t.DataApi=function(){},t.Editor=function(){},t.ContextWatchdog=function(){},t.EditorWatchdog=function(){},t.Watchdog=function(){}}(_r||(_r={}));const Er=new Array(256).fill(0).map((t,e)=>("0"+e.toString(16)).slice(-2));class xr{constructor(t,e){this.config={},this.data="",this.tagName="div",this.ready=new mr.EventEmitter,this.change=new mr.EventEmitter,this.blur=new mr.EventEmitter,this.focus=new mr.EventEmitter,this.error=new mr.EventEmitter,this.initiallyDisabled=!1,this.isEditorSettingData=!1,this.id=function(){const t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+Er[t>>0&255]+Er[t>>8&255]+Er[t>>16&255]+Er[t>>24&255]+Er[e>>0&255]+Er[e>>8&255]+Er[e>>16&255]+Er[e>>24&255]+Er[r>>0&255]+Er[r>>8&255]+Er[r>>16&255]+Er[r>>24&255]+Er[n>>0&255]+Er[n>>8&255]+Er[n>>16&255]+Er[n>>24&255]}(),this.ngZone=e,this.elementRef=t}set disabled(t){this.setDisabledState(t)}get disabled(){return this.editorInstance?this.editorInstance.isReadOnly:this.initiallyDisabled}get editorInstance(){let t=this.editorWatchdog;return this.watchdog&&(t=this.watchdog._watchdogs.get(this.id)),t?t.editor:null}ngAfterViewInit(){this.attachToWatchdog()}ngOnDestroy(){return Object(n.__awaiter)(this,void 0,void 0,(function*(){this.watchdog?yield this.watchdog.remove(this.id):this.editorWatchdog&&this.editorWatchdog.editor&&(yield this.editorWatchdog.destroy(),this.editorWatchdog=void 0)}))}writeValue(t){null===t&&(t=""),this.editorInstance?(this.isEditorSettingData=!0,this.editorInstance.setData(t),this.isEditorSettingData=!1):(this.data=t,this.editorElement&&(this.editorElement.innerHTML=this.data))}registerOnChange(t){this.cvaOnChange=t}registerOnTouched(t){this.cvaOnTouched=t}setDisabledState(t){this.editorInstance&&(this.editorInstance.isReadOnly=t),this.initiallyDisabled=t}attachToWatchdog(){const t=(t,e)=>Object(n.__awaiter)(this,void 0,void 0,(function*(){return this.ngZone.runOutsideAngular(()=>Object(n.__awaiter)(this,void 0,void 0,(function*(){this.elementRef.nativeElement.appendChild(t);const r=yield this.editor.create(t,e);return this.initiallyDisabled&&(r.isReadOnly=this.initiallyDisabled),this.ngZone.run(()=>{this.ready.emit(r)}),this.setUpEditorEvents(r),r})))})),e=t=>Object(n.__awaiter)(this,void 0,void 0,(function*(){yield t.destroy(),this.elementRef.nativeElement.removeChild(this.editorElement)})),r=()=>{this.ngZone.run(()=>{this.error.emit()})},o=document.createElement(this.tagName),i=this.getConfig();if(this.editorElement=o,this.watchdog)this.watchdog.add({id:this.id,type:"editor",creator:t,destructor:e,sourceElementOrData:o,config:i}),this.watchdog.on("itemError",(t,{itemId:e})=>{e===this.id&&r()});else{const n=new gr(this.editor);n.setCreator(t),n.setDestructor(e),n.on("error",r),this.editorWatchdog=n,this.editorWatchdog.create(o,i)}}getConfig(){if(this.data&&this.config.initialData)throw new Error("Editor data should be provided either using `config.initialData` or `data` properties.");return Object.assign({},this.config,{initialData:this.config.initialData||this.data||""})}setUpEditorEvents(t){const e=t.model.document,r=t.editing.view.document;e.on("change:data",e=>{this.ngZone.run(()=>{if(this.cvaOnChange&&!this.isEditorSettingData){const e=t.getData();this.cvaOnChange(e)}this.change.emit({event:e,editor:t})})}),r.on("focus",e=>{this.ngZone.run(()=>{this.focus.emit({event:e,editor:t})})}),r.on("blur",e=>{this.ngZone.run(()=>{this.cvaOnTouched&&this.cvaOnTouched(),this.blur.emit({event:e,editor:t})})})}}xr.\u0275fac=function(t){return new(t||xr)(mr["\u0275\u0275directiveInject"](mr.ElementRef),mr["\u0275\u0275directiveInject"](mr.NgZone))},xr.\u0275cmp=mr["\u0275\u0275defineComponent"]({type:xr,selectors:[["ckeditor"]],inputs:{config:"config",data:"data",tagName:"tagName",disabled:"disabled",editor:"editor",watchdog:"watchdog"},outputs:{ready:"ready",change:"change",blur:"blur",focus:"focus",error:"error"},features:[mr["\u0275\u0275ProvidersFeature"]([{provide:wr.h,useExisting:Object(mr.forwardRef)(()=>xr),multi:!0}])],decls:1,vars:0,template:function(t,e){1&t&&mr["\u0275\u0275template"](0,Or,0,0,"ng-template")},encapsulation:2}),xr.ctorParameters=()=>[{type:mr.ElementRef},{type:mr.NgZone}],xr.propDecorators={editor:[{type:mr.Input}],config:[{type:mr.Input}],data:[{type:mr.Input}],tagName:[{type:mr.Input}],watchdog:[{type:mr.Input}],disabled:[{type:mr.Input}],ready:[{type:mr.Output}],change:[{type:mr.Output}],blur:[{type:mr.Output}],focus:[{type:mr.Output}],error:[{type:mr.Output}]};class Ar{}Ar.\u0275mod=mr["\u0275\u0275defineNgModule"]({type:Ar}),Ar.\u0275inj=mr["\u0275\u0275defineInjector"]({factory:function(t){return new(t||Ar)},imports:[[wr.f,jr.CommonModule]]}),("undefined"==typeof ngJitMode||ngJitMode)&&mr["\u0275\u0275setNgModuleScope"](Ar,{declarations:function(){return[xr]},imports:function(){return[wr.f,jr.CommonModule]},exports:function(){return[xr]}})}}]);