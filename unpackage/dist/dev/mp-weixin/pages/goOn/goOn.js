(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goOn/goOn"],{0:function(t,n,e){"use strict";(function(t){e(5);var n=i(e(6)),r=i(e(4)),o=i(e(21)),u=i(e(15));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){f(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}wx.__webpack_require_UNI_MP_PLUGIN__=e,r.default.use(o.default),r.default.prototype.$store=u.default,r.default.config.productionTip=!1,n.default.mpType="app";var l=new r.default(c({store:u.default},n.default));t(l).$mount()}).call(this,e(1)["createApp"])},142:function(t,n,e){"use strict";(function(t){e(5);r(e(4));var n=r(e(143));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e(1)["createPage"])},143:function(t,n,e){"use strict";e.r(n);var r=e(144),o=e(146);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e(149);var i,a=e(20),c=Object(a["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"51537d66",null,!1,r["components"],i);c.options.__file="pages/goOn/goOn.vue",n["default"]=c.exports},144:function(t,n,e){"use strict";e.r(n);var r=e(145);e.d(n,"render",(function(){return r["render"]})),e.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(n,"components",(function(){return r["components"]}))},145:function(t,n,e){"use strict";var r;e.r(n),e.d(n,"render",(function(){return o})),e.d(n,"staticRenderFns",(function(){return i})),e.d(n,"recyclableRender",(function(){return u})),e.d(n,"components",(function(){return r}));var o=function(){var t=this,n=t.$createElement;t._self._c},u=!1,i=[];o._withStripped=!0},146:function(t,n,e){"use strict";e.r(n);var r=e(147),o=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=o.a},147:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e(10)),o=e(148);function u(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,r,o,u,i){try{var a=t[u](i),c=a.value}catch(f){return void e(f)}a.done?n(c):Promise.resolve(c).then(r,o)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var u=t.apply(n,e);function a(t){i(u,r,o,a,c,"next",t)}function c(t){i(u,r,o,a,c,"throw",t)}a(void 0)}))}}var c={data:function(){return{urls:""}},onLoad:function(){this.getList(),setTimeout((function(){t.reLaunch({url:"../loginSelect/loginSelect"})}),1500)},methods:{getList:function(){var n=this;return a(r.default.mark((function e(){var u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.list)();case 2:if(u=e.sent,0===u.code){e.next=6;break}return t.showToast({title:"获取开屏失败",icon:"none"}),e.abrupt("return");case 6:n.urls=u.result.url;case 7:case"end":return e.stop()}}),e)})))()},goLoginSelect:function(){t.reLaunch({url:"../loginSelect/loginSelect"})}}};n.default=c}).call(this,e(1)["default"])},149:function(t,n,e){"use strict";e.r(n);var r=e(150),o=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=o.a},150:function(t,n,e){},18:function(t,n,e){"use strict";e.r(n);var r=e(19),o=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=o.a},19:function(t,n,e){},6:function(t,n,e){"use strict";e.r(n);var r=e(7);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);e(18);var u,i,a,c,f=e(20),l=Object(f["default"])(r["default"],u,i,!1,null,null,null,!1,a,c);l.options.__file="App.vue",n["default"]=l.exports},7:function(t,n,e){"use strict";e.r(n);var r=e(8),o=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=o.a},8:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e(9),o={data:function(){return{globalData:{ws:{}}}},onLaunch:function(){},onLoad:function(){},onShow:function(){if(wx.canIUse("getUpdateManager")){var t=wx.getUpdateManager();t.onCheckForUpdate((function(n){n.hasUpdate&&(t.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(n){n.confirm&&t.applyUpdate()}})})),t.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})})))}))}else wx.showModal({title:"提示",content:"当前微信版本过低，可能无法使用某些功能，请升级到最新微信版本后重试。"});this.lookAllNetwork()},onHide:function(){},onUnload:function(){},methods:{lookAllNetwork:function(){var n=this;t.onNetworkStatusChange((function(e){console.log(e),e.isConnected?(t.showLoading({title:"网络重启中！"}),n.updateWs(),t.hideLoading()):t.showToast({title:"网络断开！",icon:"none",duration:2e3})}))},updateWs:function(){var t=this;this.globalData.ws?r.init(1):r.init(),r.on("onOpen",(function(){t.globalData.ws=r.ws}))}}};n.default=o}).call(this,e(1)["default"])}},[[142,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goOn/goOn.js.map