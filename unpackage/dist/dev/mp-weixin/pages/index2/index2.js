(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index2/index2"],{0:function(e,t,n){"use strict";(function(e){n(5);var t=u(n(6)),o=u(n(4)),r=u(n(21)),i=u(n(15));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}wx.__webpack_require_UNI_MP_PLUGIN__=n,o.default.use(r.default),o.default.prototype.$store=i.default,o.default.config.productionTip=!1,t.default.mpType="app";var l=new o.default(s({store:i.default},t.default));e(l).$mount()}).call(this,n(1)["createApp"])},18:function(e,t,n){"use strict";n.r(t);var o=n(19),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},19:function(e,t,n){},219:function(e,t,n){"use strict";(function(e){n(5);o(n(4));var t=o(n(220));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},220:function(e,t,n){"use strict";n.r(t);var o=n(221),r=n(223);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(225);var u,a=n(20),s=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"214b4c74",null,!1,o["components"],u);s.options.__file="pages/index2/index2.vue",t["default"]=s.exports},221:function(e,t,n){"use strict";n.r(t);var o=n(222);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},222:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return u})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return o}));try{o={uSwiper:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-swiper/u-swiper")]).then(n.bind(null,403))},uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,502))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement;e._self._c},i=!1,u=[];r._withStripped=!0},223:function(e,t,n){"use strict";n.r(t);var o=n(224),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},224:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(10)),r=n(157),i=n(16),u=n(13);function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,o,r,i,u){try{var a=e[i](u),s=a.value}catch(c){return void n(c)}a.done?t(s):Promise.resolve(s).then(o,r)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function u(e){s(i,o,r,u,a,"next",e)}function a(e){s(i,o,r,u,a,"throw",e)}u(void 0)}))}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){Promise.all([n.e("common/vendor"),n.e("components/takeLook/takeLook")]).then(function(){return resolve(n(511))}.bind(null,n)).catch(n.oe)},h=getApp(),g={computed:f({},(0,i.mapState)(["uid","house"])),components:{takeLooks:p},data:function(){return{list1:[],messageDot:!1}},watch:{myWs:{immediate:!0,handler:function(e,t){var n=this;console.log("index2开启侦听"),this.ws=h.globalData.ws,this.ws.onMessage((function(e){if(console.log(e),"active"!==e.data){var t=JSON.parse(e.data);console.log(t),"follow"!==t.type&&"comment"!==t.type&&"collection"!==t.type&&"silver"!==t.type&&"flower"!==t.type&&"shit"!==t.type||(n.messageDot=!0)}}))}}},onLoad:function(){this.getBanner(),this.getMessRedDot(this.uid)},onReachBottom:function(){this.$refs.takeLookComponent.getTakeLook()},methods:f(f({toMessage:function(){this.messageDot=!1,e.navigateTo({url:"../../pages_userActivity/messageList/messageList"})},getMessRedDot:function(t){var n=this;return c(o.default.mark((function r(){var i;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,(0,u.redDot)({uid:t,type:2,t:Date.parse(new Date)});case 2:if(i=o.sent,console.log("请求消息红点"),console.log(i),0===i.code){o.next=8;break}return e.showToast({title:i.msg,icon:"none"}),o.abrupt("return");case 8:!0===i.result?n.messageDot=!0:n.messageDot=!1;case 9:case"end":return o.stop()}}),r)})))()}},(0,i.mapMutations)(["updateUid"])),{},{getBanner:function(){var t=this;return c(o.default.mark((function n(){var i;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,r.banner)({type:2});case 2:if(i=n.sent,console.log("请求banner图"),0===i.code){n.next=7;break}return e.showToast({title:i.msg,icon:"none"}),n.abrupt("return");case 7:t.list1=i.result;case 8:case"end":return n.stop()}}),n)})))()},toTop:function(){wx.pageScrollTo({scrollTop:0})},reloadTake:function(){this.$refs.takeLookComponent.getTakeLook(1)},goOwnPageOrThirdParty:function(t){if(1===this.list1[t].linkType)wx.navigateToMiniProgram({appId:this.list1[t].appId,path:this.list1[t].url,envVersion:"release",success:function(e){console.log("跳转小程序成功！",e)}});else{if(0!==this.list1[t].linkType)return;"../pages/user/user"===this.list1[t].url||"../pages/index/index"===this.list1[t].url||"../pages/index2/index2"===this.list1[t].url||"../pages/index3/index3"===this.list1[t].url?e.switchTab({url:"this.list1[index].url"}):e.navigateTo({url:this.list1[t].url})}}})};t.default=g}).call(this,n(1)["default"])},225:function(e,t,n){"use strict";n.r(t);var o=n(226),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},226:function(e,t,n){},6:function(e,t,n){"use strict";n.r(t);var o=n(7);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n(18);var i,u,a,s,c=n(20),l=Object(c["default"])(o["default"],i,u,!1,null,null,null,!1,a,s);l.options.__file="App.vue",t["default"]=l.exports},7:function(e,t,n){"use strict";n.r(t);var o=n(8),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},8:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(9),r={data:function(){return{globalData:{ws:{}}}},onLaunch:function(){},onLoad:function(){},onShow:function(){if(wx.canIUse("getUpdateManager")){var e=wx.getUpdateManager();e.onCheckForUpdate((function(t){t.hasUpdate&&(e.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(t){t.confirm&&e.applyUpdate()}})})),e.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})})))}))}else wx.showModal({title:"提示",content:"当前微信版本过低，可能无法使用某些功能，请升级到最新微信版本后重试。"});this.lookAllNetwork()},onHide:function(){},onUnload:function(){},methods:{lookAllNetwork:function(){var t=this;e.onNetworkStatusChange((function(n){console.log(n),n.isConnected?(e.showLoading({title:"网络重启中！"}),t.updateWs(),e.hideLoading()):e.showToast({title:"网络断开！",icon:"none",duration:2e3})}))},updateWs:function(){var e=this;this.globalData.ws?o.init(1):o.init(),o.on("onOpen",(function(){e.globalData.ws=o.ws}))}}};t.default=r}).call(this,n(1)["default"])}},[[219,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index2/index2.js.map