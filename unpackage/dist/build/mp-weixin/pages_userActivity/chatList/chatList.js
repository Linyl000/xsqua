require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_userActivity/chatList/chatList","common/main"],{"0b35":function(t,e,n){"use strict";n.r(e);var r=n("2316"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},"0ea2":function(t,e,n){"use strict";var r=n("80c6"),o=n.n(r);o.a},"0f84":function(t,e,n){"use strict";var r=n("b58a"),o=n.n(r);o.a},2316:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("095e"),o={data:function(){return{globalData:{ws:{}}}},onLaunch:function(){var t=this;r.init(),r.on("onOpen",(function(){t.globalData.ws=r.ws}))},onLoad:function(){console.log("App onLoad")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},onUnload:function(){console.log("App Unload")},methods:{updateWs:function(){var t=this;console.log("updateWs"),r.init(),r.on("onOpen",(function(){t.globalData.ws=r.ws}))}}};e.default=o},4317:function(t,e,n){"use strict";(function(t){n("6090");var e=i(n("9fbb")),r=i(n("66fd")),o=i(n("cc95")),a=i(n("7143"));function i(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}wx.__webpack_require_UNI_MP_PLUGIN__=n,r.default.use(o.default),r.default.prototype.$store=a.default,r.default.config.productionTip=!1,e.default.mpType="app";var f=new r.default(u({store:a.default},e.default));t(f).$mount()}).call(this,n("543d")["createApp"])},"80c6":function(t,e,n){},"9fbb":function(t,e,n){"use strict";n.r(e);var r=n("0b35");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("0f84");var a,i,c,u,l=n("f0c5"),f=Object(l["a"])(r["default"],a,i,!1,null,null,null,!1,c,u);e["default"]=f.exports},a316:function(t,e,n){"use strict";n.r(e);var r=n("b66b"),o=n("cceb");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("0ea2");var i,c=n("f0c5"),u=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"4879f2c8",null,!1,r["a"],i);e["default"]=u.exports},a8cc:function(t,e,n){"use strict";(function(t){n("6090");r(n("66fd"));var e=r(n("a316"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},b58a:function(t,e,n){},b66b:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,r=(t._self._c,t.__map(t.chatList,(function(e,r){var o=t.__get_orig(e),a=0!==t.chatList.length&&0!==e.relations&&1===e.relations?n("cc3b"):null,i=0!==t.chatList.length&&0!==e.relations&&2===e.relations?n("ffa2"):null,c=0!==t.chatList.length&&0!==e.relations&&3===e.relations?n("e653"):null;return{$orig:o,m0:a,m1:i,m2:c}})));t.$mp.data=Object.assign({},{$root:{l0:r}})},a=[]},cceb:function(t,e,n){"use strict";n.r(e);var r=n("f479"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},f479:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a")),o=n("2941"),a=n("26cb");function i(t){return t&&t.__esModule?t:{default:t}}function c(t){return s(t)||f(t)||l(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function f(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return d(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function b(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){p(a,r,o,i,c,"next",t)}function c(t){p(a,r,o,i,c,"throw",t)}i(void 0)}))}}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m={computed:g({},(0,a.mapState)(["ava"])),data:function(){return{chatList:[],limit:20,page:1,lastPage:"",isloading:!1,myAvatar:""}},onShow:function(){this.chatList=[],this.getChatList()},onReachBottom:function(){this.page>=this.lastPage||this.isloading||(this.page+=1,this.getChatList())},methods:{getChatList:function(){var e=this;return b(r.default.mark((function n(){var a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.isloading=!0,n.next=3,(0,o.chatList)({page:e.page,limit:e.limit});case 3:if(a=n.sent,console.log("请求聊天列表"),console.log(a),0===a.code){n.next=9;break}return t.showToast({title:"获取聊天列表失败",icon:"none",duration:2e3}),n.abrupt("return");case 9:e.isloading=!1,e.chatList=[].concat(c(e.chatList),c(a.result.data)),e.lastPage=a.result.last_page;case 12:case"end":return n.stop()}}),n)})))()},goChatWith:function(e){t.navigateTo({url:"../chatWith/chatWith?ouid="+e.uid})}}};e.default=m}).call(this,n("543d")["default"])}},[["a8cc","common/runtime","common/vendor","pages_userActivity/common/vendor"]]]);