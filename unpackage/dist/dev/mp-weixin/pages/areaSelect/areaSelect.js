(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/areaSelect/areaSelect"],{0:function(t,e,n){"use strict";(function(t){n(5);var e=a(n(6)),o=a(n(4)),r=a(n(21)),u=a(n(15));function a(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}wx.__webpack_require_UNI_MP_PLUGIN__=n,o.default.use(r.default),o.default.prototype.$store=u.default,o.default.config.productionTip=!1,e.default.mpType="app";var f=new o.default(i({store:u.default},e.default));t(f).$mount()}).call(this,n(1)["createApp"])},18:function(t,e,n){"use strict";n.r(e);var o=n(19),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a},19:function(t,e,n){},211:function(t,e,n){"use strict";(function(t){n(5);o(n(4));var e=o(n(212));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},212:function(t,e,n){"use strict";n.r(e);var o=n(213),r=n(216);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n(219);var a,c=n(20),i=Object(c["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"113363a6",null,!1,o["components"],a);i.options.__file="pages/areaSelect/areaSelect.vue",e["default"]=i.exports},213:function(t,e,n){"use strict";n.r(e);var o=n(214);n.d(e,"render",(function(){return o["render"]})),n.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(e,"components",(function(){return o["components"]}))},214:function(t,e,n){"use strict";var o;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return a})),n.d(e,"recyclableRender",(function(){return u})),n.d(e,"components",(function(){return o}));var r=function(){var t=this,e=t.$createElement,o=(t._self._c,n(215));t.$mp.data=Object.assign({},{$root:{m0:o}})},u=!1,a=[];r._withStripped=!0},216:function(t,e,n){"use strict";n.r(e);var o=n(217),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a},217:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n(10)),r=n(218);function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,o,r,u,a){try{var c=t[u](a),i=c.value}catch(l){return void n(l)}c.done?e(i):Promise.resolve(i).then(o,r)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var u=t.apply(e,n);function c(t){a(u,o,r,c,i,"next",t)}function i(t){a(u,o,r,c,i,"throw",t)}c(void 0)}))}}var i={data:function(){return{areaList:[],change:"",lookHouse:""}},onLoad:function(t){this.change=t.change,this.lookHouse=t.lookHouse,this.getList()},methods:{goCitySelect:function(e){t.navigateTo({url:"../citySelect/citySelect?cateId="+e+"&change="+this.change+"&lookHouse="+this.lookHouse})},getList:function(){var e=this;return c(o.default.mark((function n(){var u;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,r.list)();case 2:if(u=n.sent,console.log("1.一级居住地"),console.log(u),0===u.code){n.next=8;break}return t.showToast({title:"获取区域列表失败",icon:"none",duration:2e3}),n.abrupt("return");case 8:e.areaList=u.page.list;case 9:case"end":return n.stop()}}),n)})))()}}};e.default=i}).call(this,n(1)["default"])},219:function(t,e,n){"use strict";n.r(e);var o=n(220),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a},220:function(t,e,n){},6:function(t,e,n){"use strict";n.r(e);var o=n(7);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n(18);var u,a,c,i,l=n(20),f=Object(l["default"])(o["default"],u,a,!1,null,null,null,!1,c,i);f.options.__file="App.vue",e["default"]=f.exports},7:function(t,e,n){"use strict";n.r(e);var o=n(8),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a},8:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(9),r={data:function(){return{globalData:{ws:{}}}},onLaunch:function(){},onLoad:function(){},onShow:function(){if(wx.canIUse("getUpdateManager")){var t=wx.getUpdateManager();t.onCheckForUpdate((function(e){e.hasUpdate&&(t.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&t.applyUpdate()}})})),t.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})})))}))}else wx.showModal({title:"提示",content:"当前微信版本过低，可能无法使用某些功能，请升级到最新微信版本后重试。"});this.lookAllNetwork()},onHide:function(){},onUnload:function(){},methods:{lookAllNetwork:function(){var e=this;t.onNetworkStatusChange((function(n){console.log(n),n.isConnected?(t.showLoading({title:"网络重启中！"}),e.updateWs(),t.hideLoading()):t.showToast({title:"网络断开！",icon:"none",duration:2e3})}))},updateWs:function(){var t=this;this.globalData.ws=null,o.init(),o.on("onOpen",(function(){t.globalData.ws=o.ws}))}}};e.default=r}).call(this,n(1)["default"])}},[[211,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/areaSelect/areaSelect.js.map