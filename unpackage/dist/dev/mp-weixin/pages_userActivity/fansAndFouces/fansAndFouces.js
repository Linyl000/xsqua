require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_userActivity/fansAndFouces/fansAndFouces"],{0:function(e,t,n){"use strict";(function(e){n(5);var t=a(n(6)),r=a(n(4)),o=a(n(22)),i=a(n(15));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}wx.__webpack_require_UNI_MP_PLUGIN__=n,r.default.use(o.default),r.default.prototype.$store=i.default,r.default.config.productionTip=!1,t.default.mpType="app";var f=new r.default(u({store:i.default},t.default));e(f).$mount()}).call(this,n(1)["createApp"])},19:function(e,t,n){"use strict";n.r(t);var r=n(20),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},20:function(e,t,n){},292:function(e,t,n){"use strict";(function(e){n(5);r(n(4));var t=r(n(293));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},293:function(e,t,n){"use strict";n.r(t);var r=n(294),o=n(296);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n(298);var a,s=n(21),u=Object(s["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"5b81a3fd",null,!1,r["components"],a);u.options.__file="pages_userActivity/fansAndFouces/fansAndFouces.vue",t["default"]=u.exports},294:function(e,t,n){"use strict";n.r(t);var r=n(295);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},295:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return r}));try{r={uSearch:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-search/u-search")]).then(n.bind(null,444))},uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,407))},uLoadingIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(n.bind(null,422))},uModal:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-modal/u-modal")]).then(n.bind(null,460))},"u-Form":function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u--form/u--form")]).then(n.bind(null,468))},uFormItem:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-form-item/u-form-item")]).then(n.bind(null,474))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-input/u-input")]).then(n.bind(null,482))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement,r=(e._self._c,e.__map(e.fansList,(function(t,r){var o=e.__get_orig(t),i=e.fansList&&0!==e.fansList.length&&t.remark?n(275):null,a=e.fansList&&0!==e.fansList.length&&!t.remark?n(276):null;return{$orig:o,m0:i,m1:a}}))),o=e.__map(e.focusList,(function(t,r){var o=e.__get_orig(t),i=e.focusList&&0!==e.focusList.length&&t.remark?n(275):null,a=e.focusList&&0!==e.focusList.length&&!t.remark?n(276):null;return{$orig:o,m2:i,m3:a}})),i=e.__map(e.friendList,(function(t,r){var o=e.__get_orig(t),i=e.friendList&&0!==e.friendList.length&&t.remark?n(275):null,a=e.friendList&&0!==e.friendList.length&&!t.remark?n(276):null;return{$orig:o,m4:i,m5:a}}));e._isMounted||(e.e0=function(t,n,r){var o=arguments[arguments.length-1].currentTarget.dataset,i=o.eventParams||o["event-params"];n=i.i,r=i.index;e.changeName=!0,e.fid=n.uid,e.findex=r,e.remark=n.remark},e.e1=function(t,n,r){var o=arguments[arguments.length-1].currentTarget.dataset,i=o.eventParams||o["event-params"];n=i.i,r=i.index;e.changeName=!0,e.fid=n.uid,e.findex=r,e.remark=n.remark},e.e2=function(t,n,r){var o=arguments[arguments.length-1].currentTarget.dataset,i=o.eventParams||o["event-params"];n=i.i,r=i.index;e.changeName=!0,e.fid=n.uid,e.findex=r,e.remark=n.remark},e.e3=function(t){e.changeName=!1,e.remark=""}),e.$mp.data=Object.assign({},{$root:{l0:r,l1:o,l2:i}})},i=!1,a=[];o._withStripped=!0},296:function(e,t,n){"use strict";n.r(t);var r=n(297),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},297:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(10)),o=n(280),i=n(16);function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return l(e)||f(e)||c(e)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function f(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e){if(Array.isArray(e))return d(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){m(i,r,o,a,s,"next",e)}function s(e){m(i,r,o,a,s,"throw",e)}a(void 0)}))}}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b={computed:h({},(0,i.mapState)(["ava"])),data:function(){return{bigLook:0,peopleList:[],searchText:"",fansPage:1,fansLimit:12,fansLastPage:"",fansList:[],focusPage:1,focusLimit:12,focusLastPage:"",focusList:[],friendPage:1,friendLimit:12,friendLastPage:"",friendList:[],isloading:!1,changeName:!1,fid:null,findex:null,remark:"",realRemark:"",keyword:""}},onLoad:function(){this.getFriendList()},onReachBottom:function(){if(0===this.bigLook){if(this.fansPage>=this.fansLastPage)return;if(this.isloading)return;this.fansPage+=1,this.getFriendList()}else if(1===this.bigLook){if(this.focusPage>=this.focusLastPage)return;if(this.isloading)return;this.focusPage+=1,this.getFriendList()}else{if(this.friendPage>=this.friendLastPage)return;if(this.isloading)return;this.friendPage+=1,this.getFriendList()}},methods:{changeLookList:function(e){this.bigLook=e,this.keyword="",this.fansList=[],this.focusList=[],this.friendList=[],this.fansPage=1,this.focusPage=1,this.friendPage=1,this.getFriendList()},peopleSearch:function(){this.fansList=[],this.focusList=[],this.friendList=[],this.fansPage=1,this.focusPage=1,this.friendPage=1,this.getFriendList()},reloadAll:function(){this.keyword="",this.fansList=[],this.focusList=[],this.friendList=[],this.fansPage=1,this.focusPage=1,this.friendPage=1,this.getFriendList()},getFriendList:function(){var t=this;return g(r.default.mark((function n(){var i,a,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!==t.bigLook){n.next=15;break}return t.isloading=!0,n.next=4,(0,o.userFans)({page:t.fansPage,limit:t.fansLimit,keyword:t.keyword});case 4:if(i=n.sent,console.log("请求粉丝列表"),console.log(i),0===i.code){n.next=10;break}return e.showToast({title:"获取粉丝列表失败",icon:"none",duration:2e3}),n.abrupt("return");case 10:t.isloading=!1,t.fansList=[].concat(s(t.fansList),s(i.result.data)),t.fansLastPage=i.result.last_page,n.next=42;break;case 15:if(1!==t.bigLook){n.next=30;break}return t.isloading=!0,n.next=19,(0,o.follow)({page:t.focusPage,limit:t.focusLimit,keyword:t.keyword});case 19:if(a=n.sent,console.log("请求关注列表"),console.log(a),0===a.code){n.next=25;break}return e.showToast({title:"获取关注列表失败",icon:"none",duration:2e3}),n.abrupt("return");case 25:t.isloading=!1,t.focusList=[].concat(s(t.focusList),s(a.result.data)),t.focusLastPage=a.result.last_page,n.next=42;break;case 30:return t.isloading=!0,n.next=33,(0,o.mutualFollow)({page:t.friendPage,limit:t.friendLimit,keyword:t.keyword});case 33:if(u=n.sent,console.log("请求互关列表"),console.log(u),0===u.code){n.next=39;break}return e.showToast({title:"获取互关列表失败",icon:"none",duration:2e3}),n.abrupt("return");case 39:t.isloading=!1,t.friendList=[].concat(s(t.friendList),s(u.result.data)),t.friendLastPage=u.result.last_page;case 42:case"end":return n.stop()}}),n)})))()},toOtherUser:function(t){e.navigateTo({url:"../../pages_userActivity/otherUser/otherUser?ocateId="+t.cateId+"&ouid="+t.uid})},getUserRemarkEdit:function(){var t=this;return g(r.default.mark((function n(){var i,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,o.userRemarkEdit)({fid:t.fid,remark:t.remark});case 2:if(i=n.sent,console.log("请求修改备注"),console.log(i),0===i.code){n.next=8;break}return e.showToast({title:"修改备注失败",icon:"none",duration:2e3}),n.abrupt("return");case 8:e.showToast({title:"修改备注成功",icon:"none",duration:2e3}),a=0===t.bigLook?t.fansList:1===t.bigLook?t.focusList:t.friendList,t.$set(a[t.findex],"remark",t.remark),t.remark="",t.changeName=!1;case 13:case"end":return n.stop()}}),n)})))()}}};t.default=b}).call(this,n(1)["default"])},298:function(e,t,n){"use strict";n.r(t);var r=n(299),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},299:function(e,t,n){},6:function(e,t,n){"use strict";n.r(t);var r=n(7);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n(19);var i,a,s,u,c=n(21),f=Object(c["default"])(r["default"],i,a,!1,null,null,null,!1,s,u);f.options.__file="App.vue",t["default"]=f.exports},7:function(e,t,n){"use strict";n.r(t);var r=n(8),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},8:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(9),o={data:function(){return{globalData:{ws:{}}}},onLaunch:function(){},onLoad:function(){},onShow:function(){if(wx.canIUse("getUpdateManager")){var e=wx.getUpdateManager();e.onCheckForUpdate((function(t){t.hasUpdate&&(e.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(t){t.confirm&&e.applyUpdate()}})})),e.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})})))}))}else wx.showModal({title:"提示",content:"当前微信版本过低，可能无法使用某些功能，请升级到最新微信版本后重试。"});this.lookAllNetwork()},onHide:function(){},onUnload:function(){},methods:{lookAllNetwork:function(){var t=this;e.onNetworkStatusChange((function(n){console.log(n),n.isConnected?(e.showLoading({title:"网络重启中！"}),t.updateWs(),e.hideLoading()):e.showToast({title:"网络断开！",icon:"none",duration:2e3})}))},updateWs:function(){var e=this;this.globalData.ws?r.init(1):r.init(),r.on("onOpen",(function(){e.globalData.ws=r.ws}))}}};t.default=o}).call(this,n(1)["default"])}},[[292,"common/runtime","common/vendor","pages_userActivity/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_userActivity/fansAndFouces/fansAndFouces.js.map