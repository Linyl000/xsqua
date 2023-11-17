require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_userActivity/adminLogin/adminLogin"],{0:function(e,t,n){"use strict";(function(e){n(5);var t=a(n(6)),o=a(n(4)),r=a(n(22)),u=a(n(15));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}wx.__webpack_require_UNI_MP_PLUGIN__=n,o.default.use(r.default),o.default.prototype.$store=u.default,o.default.config.productionTip=!1,t.default.mpType="app";var l=new o.default(c({store:u.default},t.default));e(l).$mount()}).call(this,n(1)["createApp"])},19:function(e,t,n){"use strict";n.r(t);var o=n(20),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},20:function(e,t,n){},262:function(e,t,n){"use strict";(function(e){n(5);o(n(4));var t=o(n(263));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},263:function(e,t,n){"use strict";n.r(t);var o=n(264),r=n(266);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n(269);var a,i=n(21),c=Object(i["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"2d62ce43",null,!1,o["components"],a);c.options.__file="pages_userActivity/adminLogin/adminLogin.vue",t["default"]=c.exports},264:function(e,t,n){"use strict";n.r(t);var o=n(265);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},265:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return u})),n.d(t,"components",(function(){return o}));try{o={"u-Input":function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u--input/u--input")]).then(n.bind(null,430))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement;e._self._c},u=!1,a=[];r._withStripped=!0},266:function(e,t,n){"use strict";n.r(t);var o=n(267),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},267:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(10)),r=n(268),u=n(16),a=n(160);function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,o,r,u,a){try{var i=e[u](a),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(o,r)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var u=e.apply(t,n);function a(e){c(u,o,r,a,i,"next",e)}function i(e){c(u,o,r,a,i,"throw",e)}a(void 0)}))}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=getApp(),v={data:function(){return{phone:"",pwd:""}},onLoad:function(){},computed:f({},(0,u.mapState)(["myWs"])),watch:{myWs:{immediate:!1,handler:function(t,n){e.hideLoading(),this.goUserOrAreaSelect()}}},methods:f(f({},(0,u.mapMutations)(["updateToken","logout","updateHouse"])),{},{awaitLogin:function(){e.showLoading({title:"数据加载中...",mask:!0}),this.login()},login:function(){var t=this;return s(o.default.mark((function n(){var u;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,r.phoneLogin)({mobile:t.phone,password:t.pwd});case 2:u=n.sent,console.log("管理员登录"),console.log(u),0===u.code?(t.logout(),e.removeStorageSync("openId"),e.setStorageSync("token",u.token),t.updateToken(),p.updateWs()):(e.hideLoading(),e.showToast({title:"密码错误",icon:"none",duration:2e3}));case 6:case"end":return n.stop()}}),n)})))()},goUserOrAreaSelect:function(){var t=this;return s(o.default.mark((function n(){var r;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,a.myRoom)();case 2:r=n.sent,console.log("请求有没有房间"),console.log(r),500===r.code?e.navigateTo({url:"../../pages/areaSelect/areaSelect"}):0===r.code&&(e.setStorageSync("house",!0),t.updateHouse(),e.switchTab({url:"../../pages/user/user"}));case 6:case"end":return n.stop()}}),n)})))()}})};t.default=v}).call(this,n(1)["default"])},269:function(e,t,n){"use strict";n.r(t);var o=n(270),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},270:function(e,t,n){},6:function(e,t,n){"use strict";n.r(t);var o=n(7);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n(19);var u,a,i,c,s=n(21),l=Object(s["default"])(o["default"],u,a,!1,null,null,null,!1,i,c);l.options.__file="App.vue",t["default"]=l.exports},7:function(e,t,n){"use strict";n.r(t);var o=n(8),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},8:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(9),r={data:function(){return{globalData:{ws:{}}}},onLaunch:function(){},onLoad:function(){},onShow:function(){if(wx.canIUse("getUpdateManager")){var e=wx.getUpdateManager();e.onCheckForUpdate((function(t){t.hasUpdate&&(e.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(t){t.confirm&&e.applyUpdate()}})})),e.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})})))}))}else wx.showModal({title:"提示",content:"当前微信版本过低，可能无法使用某些功能，请升级到最新微信版本后重试。"});this.lookAllNetwork()},onHide:function(){},onUnload:function(){},methods:{lookAllNetwork:function(){var t=this;e.onNetworkStatusChange((function(n){console.log(n),n.isConnected?(e.showLoading({title:"网络重启中！"}),t.updateWs(),e.hideLoading()):e.showToast({title:"网络断开！",icon:"none",duration:2e3})}))},updateWs:function(){var e=this;this.globalData.ws?o.init(1):o.init(),o.on("onOpen",(function(){e.globalData.ws=o.ws}))}}};t.default=r}).call(this,n(1)["default"])}},[[262,"common/runtime","common/vendor","pages_userActivity/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_userActivity/adminLogin/adminLogin.js.map