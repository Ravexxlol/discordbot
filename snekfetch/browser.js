!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Snekfetch=e():t.Snekfetch=e()}(window,function(){return function(t){var e={};function o(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=2)}([function(t,e){},function(t,e,o){"use strict";t.exports={request:function(t){t.options.body=t.options.data;const e="arraybuffer"===t.options.responseType?"arrayBuffer":"text";return window.fetch(t.options.url,t.options).then(t=>t[e]().then(e=>{const o={};for(const[e,s]of t.headers.entries())o[e.toLowerCase()]=s;return{raw:e,headers:o,statusCode:t.status,statusText:t.statusText}}))},shouldSendRaw:()=>!1,METHODS:["GET","HEAD","POST","PUT","DELETE","CONNECT","OPTIONS","PATCH"],Parent:Object,FormData:window.FormData,querystring:{parse:t=>{const e={};for(const[o,s]of new window.URLSearchParams(t).entries())e[o]=s;return e},stringify:t=>new window.URLSearchParams(t).toString()}}},function(t,e,o){"use strict";const s=o("undefined"!=typeof window?1:0);class n extends s.Parent{constructor(t,e,o={}){super(),this.options=Object.assign({qs:s.querystring,method:t,url:e,redirect:"follow"},o,{headers:{},query:void 0,data:void 0}),o.headers&&this.set(o.headers),o.query&&this.query(o.query),o.data&&this.send(o.data)}query(t,e){return void 0===this.options.query&&(this.options.query={}),"object"==typeof t?Object.assign(this.options.query,t):this.options.query[t]=e,this}set(t,e){if("object"==typeof t)for(const[e,o]of Object.entries(t))this.options.headers[e.toLowerCase()]=o;else this.options.headers[t.toLowerCase()]=e;return this}attach(...t){const e=this.options.data instanceof s.FormData?this.options.data:this.options.data=new s.FormData;if("object"==typeof t[0])for(const[e,o]of Object.entries(t[0]))this.attach(e,o);else e.append(...t);return this}send(t){if(t instanceof s.FormData||s.shouldSendRaw(t))this.options.data=t;else if(null!==t&&"object"==typeof t){const e=this.options.headers["content-type"];let o;e?e.includes("application/json")?o=JSON.stringify:e.includes("urlencoded")&&(o=this.options.qs.stringify):(this.set("Content-Type","application/json"),o=JSON.stringify),this.options.data=o(t)}else this.options.data=t;return this}then(t,e){return this._response?this._response.then(t,e):(this._finalizeRequest(),this._response=s.request(this).then(({raw:t,headers:e,statusCode:o,statusText:s})=>{const n=this,r={request:this.request,get body(){delete r.body;const e=r.headers["content-type"];if(t instanceof ArrayBuffer&&(t=new window.TextDecoder("utf8").decode(t)),/application\/json/.test(e))try{r.body=JSON.parse(t)}catch(e){r.body=String(t)}else/application\/x-www-form-urlencoded/.test(e)?r.body=n.options.qs.parse(String(t)):r.body=t;return r.body},raw:t,ok:o>=200&&o<400,headers:e,statusCode:o,statusText:s};if(r.ok)return r;const i=new Error(`${o} ${s}`.trim());return Object.assign(i,r),Promise.reject(i)}).then(t,e))}catch(t){return this.then(null,t)}end(t){return this.then(e=>t?t(null,e):e,e=>t?t(e,e.statusCode?e:null):Promise.reject(e))}_finalizeRequest(){if("HEAD"!==this.options.method&&this.set("Accept-Encoding","gzip, deflate"),this.options.data&&this.options.data.getBoundary&&this.set("Content-Type",`multipart/form-data; boundary=${this.options.data.getBoundary()}`),this.options.query){const[t,e]=this.options.url.split("?");this.options.url=`${t}?${this.options.qs.stringify(this.options.query)}${e?`&${e}`:""}`}}_read(){this.resume(),this._response||this.catch(t=>this.emit("error",t))}}n.METHODS=s.METHODS.filter(t=>"M-SEARCH"!==t);for(const t of n.METHODS)n[t.toLowerCase()]=function(e,o){return new(this&&this.prototype instanceof n?this:n)(t,e,o)};t.exports=n}])});