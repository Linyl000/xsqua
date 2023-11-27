require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_userActivity/chatList/chatList"],{0:function(t,e,n){"use strict";(function(t){n(5);var e=a(n(6)),o=a(n(4)),r=a(n(21)),i=a(n(15));function a(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}wx.__webpack_require_UNI_MP_PLUGIN__=n,o.default.use(r.default),o.default.prototype.$store=i.default,o.default.config.productionTip=!1,e.default.mpType="app";var l=new o.default(u({store:i.default},e.default));t(l).$mount()}).call(this,n(1)["createApp"])},18:function(t,e,n){"use strict";n.r(e);var o=n(19),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},19:function(t,e,n){},261:function(t,e,n){"use strict";(function(t){n(5);o(n(4));var e=o(n(262));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},262:function(t,e,n){"use strict";n.r(e);var o=n(263),r=n(268);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n(271);var a,c=n(20),u=Object(c["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"128c9103",null,!1,o["components"],a);u.options.__file="pages_userActivity/chatList/chatList.vue",e["default"]=u.exports},263:function(t,e,n){"use strict";n.r(e);var o=n(264);n.d(e,"render",(function(){return o["render"]})),n.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(e,"components",(function(){return o["components"]}))},264:function(t,e,n){"use strict";var o;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return a})),n.d(e,"recyclableRender",(function(){return i})),n.d(e,"components",(function(){return o}));try{o={uSearch:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-search/u-search")]).then(n.bind(null,465))},uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,428))},uLoadingIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(n.bind(null,443))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.chatList,(function(e,o){var r=t.__get_orig(e),i=0!==t.chatList.length&&0!==e.relations&&1===e.relations?n(265):null,a=0!==t.chatList.length&&0!==e.relations&&2===e.relations?n(266):null,c=0!==t.chatList.length&&0!==e.relations&&3===e.relations?n(267):null;return{$orig:r,m0:i,m1:a,m2:c}})));t.$mp.data=Object.assign({},{$root:{l0:o}})},i=!1,a=[];r._withStripped=!0},268:function(t,e,n){"use strict";n.r(e);var o=n(269),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},269:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(10)),r=n(270),i=n(16);function a(t){return t&&t.__esModule?t:{default:t}}function c(t){return f(t)||l(t)||s(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function l(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return d(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function p(t,e,n,o,r,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(o,r)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){p(i,o,r,a,c,"next",t)}function c(t){p(i,o,r,a,c,"throw",t)}a(void 0)}))}}function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=getApp(),y={computed:m({},(0,i.mapState)(["ava","myWs","uid"])),data:function(){return{ws:"",chatList:[],limit:12,page:1,lastPage:"",isloading:!1,myAvatar:"",getList:!0,keyword:"",close:!1}},watch:{myWs:{immediate:!0,handler:function(t,e){var n=this;console.log("chatList开启侦听"),this.close=!1,this.ws=b.globalData.ws,this.ws.onMessage((function(t){if(!n.close){if(console.log(t),"active"===t.data)return;var e=JSON.parse(t.data);console.log(e),"chat"!==e.type&&"chat_image"!==e.type&&"chat_video"!==e.type&&e.toUid===n.uid||(n.page=1,n.chatList=[],n.getChatList())}}))}}},onLoad:function(){},onHide:function(){this.getList=!1},onUnload:function(){this.getList=!1,this.close=!0},onShow:function(){console.log("chatList onShow"),this.getList=!0,this.page=1,this.keyword="",this.chatList=[],this.getChatList()},onReachBottom:function(){this.page>=this.lastPage||this.isloading||(this.page+=1,this.getChatList())},methods:{getChatList:function(){var e=this;return h(o.default.mark((function n(){var i;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.getList){n.next=2;break}return n.abrupt("return");case 2:return e.isloading=!0,n.next=5,(0,r.chatList)({page:e.page,limit:e.limit,keyword:e.keyword});case 5:if(i=n.sent,console.log("请求聊天列表"),console.log(i),0===i.code){n.next=11;break}return t.showToast({title:"获取聊天列表失败",icon:"none",duration:2e3}),n.abrupt("return");case 11:e.isloading=!1,e.chatList=[].concat(c(e.chatList),c(i.result.data)),e.lastPage=i.result.last_page;case 14:case"end":return n.stop()}}),n)})))()},goChatWith:function(e){console.log("=========="),console.log(e.uid),t.navigateTo({url:"../chatWith/chatWith?ouid="+e.uid+"&&ocateId="+e.cateId})},peopleSearch:function(){this.page=1,this.chatList=[],this.getChatList()},reloadAll:function(){this.keyword="",this.page=1,this.chatList=[],this.getChatList()}}};e.default=y}).call(this,n(1)["default"])},271:function(t,e,n){"use strict";n.r(e);var o=n(272),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},272:function(t,e,n){},6:function(t,e,n){"use strict";n.r(e);var o=n(7);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n(18);var i,a,c,u,s=n(20),l=Object(s["default"])(o["default"],i,a,!1,null,null,null,!1,c,u);l.options.__file="App.vue",e["default"]=l.exports},7:function(t,e,n){"use strict";n.r(e);var o=n(8),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},8:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(9),r={data:function(){return{globalData:{ws:{}}}},onLaunch:function(){},onLoad:function(){},onShow:function(){if(wx.canIUse("getUpdateManager")){var t=wx.getUpdateManager();t.onCheckForUpdate((function(e){e.hasUpdate&&(t.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&t.applyUpdate()}})})),t.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})})))}))}else wx.showModal({title:"提示",content:"当前微信版本过低，可能无法使用某些功能，请升级到最新微信版本后重试。"});this.lookAllNetwork()},onHide:function(){},onUnload:function(){},methods:{lookAllNetwork:function(){var e=this;t.onNetworkStatusChange((function(n){console.log(n),n.isConnected?(t.showLoading({title:"网络重启中！"}),e.updateWs(),t.hideLoading()):t.showToast({title:"网络断开！",icon:"none",duration:2e3})}))},updateWs:function(){var t=this;this.globalData.ws?o.init(1):o.init(),o.on("onOpen",(function(){t.globalData.ws=o.ws}))}}};e.default=r}).call(this,n(1)["default"])}},[[261,"common/runtime","common/vendor","pages_userActivity/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_userActivity/chatList/chatList.js.map