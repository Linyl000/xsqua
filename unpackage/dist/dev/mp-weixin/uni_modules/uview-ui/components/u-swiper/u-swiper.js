(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-swiper/u-swiper"],{386:function(e,t,n){"use strict";n.r(t);var i=n(387),r=n(389);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n(392);var o,c=n(21),a=Object(c["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"6b019429",null,!1,i["components"],o);a.options.__file="uni_modules/uview-ui/components/u-swiper/u-swiper.vue",t["default"]=a.exports},387:function(e,t,n){"use strict";n.r(t);var i=n(388);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},388:function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return u})),n.d(t,"components",(function(){return i}));try{i={uLoadingIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(n.bind(null,422))},uSwiperIndicator:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-swiper-indicator/u-swiper-indicator")]).then(n.bind(null,577))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$u.addUnit(e.height)),i=e.$u.addUnit(e.radius),r=e.loading?null:e.$u.addUnit(e.height),u=e.loading?null:e.$u.addUnit(e.previousMargin),o=e.loading?null:e.$u.addUnit(e.nextMargin),c=e.loading?null:e.__map(e.list,(function(t,n){var i=e.__get_orig(t),r=e.__get_style([e.itemStyle(n)]),u=e.getItemType(t),o="image"===u?e.$u.addUnit(e.height):null,c="image"===u?e.$u.addUnit(e.radius):null,a="image"===u?e.getSource(t):null,d=e.getItemType(t),s="video"===d?e.$u.addUnit(e.height):null,l="video"===d?e.getSource(t):null,f="video"===d?e.getPoster(t):null,g="video"===d?e.showTitle&&e.$u.test.object(t)&&t.title:null,m=e.showTitle&&e.$u.test.object(t)&&t.title&&e.$u.test.image(e.getSource(t));return{$orig:i,s0:r,m0:u,g5:o,g6:c,m1:a,m2:d,g7:s,m3:l,m4:f,g8:g,g9:m}})),a=e.__get_style([e.$u.addStyle(e.indicatorStyle)]);e.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:r,g3:u,g4:o,l0:c,s1:a}})},u=!1,o=[];r._withStripped=!0},389:function(e,t,n){"use strict";n.r(t);var i=n(390),r=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},390:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(391));function r(e){return e&&e.__esModule?e:{default:e}}var u={name:"u-swiper",mixins:[e.$u.mpMixin,e.$u.mixin,i.default],data:function(){return{currentIndex:0}},watch:{current:function(e,t){e!==t&&(this.currentIndex=e)}},computed:{itemStyle:function(){var t=this;return function(n){var i={};return t.nextMargin&&t.previousMargin&&(i.borderRadius=e.$u.addUnit(t.radius),n!==t.currentIndex&&(i.transform="scale(0.92)")),i}}},methods:{getItemType:function(t){return"string"===typeof t?e.$u.test.video(this.getSource(t))?"video":"image":"object"===typeof t&&this.keyName?t.type?"image"===t.type?"image":"video"===t.type?"video":"image":e.$u.test.video(this.getSource(t))?"video":"image":void 0},getSource:function(t){return"string"===typeof t?t:"object"===typeof t&&this.keyName?t[this.keyName]:(e.$u.error("请按格式传递列表参数"),"")},change:function(e){var t=e.detail.current;this.pauseVideo(this.currentIndex),this.currentIndex=t,this.$emit("change",e.detail)},pauseVideo:function(t){var n=this.getSource(this.list[t]);if(e.$u.test.video(n)){var i=e.createVideoContext("video-".concat(t),this);i.pause()}},getPoster:function(e){return"object"===typeof e&&e.poster?e.poster:""},clickHandler:function(e){this.$emit("click",e)}}};t.default=u}).call(this,n(1)["default"])},392:function(e,t,n){"use strict";n.r(t);var i=n(393),r=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},393:function(e,t,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-swiper/u-swiper.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-swiper/u-swiper-create-component',
    {
        'uni_modules/uview-ui/components/u-swiper/u-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(386))
        })
    },
    [['uni_modules/uview-ui/components/u-swiper/u-swiper-create-component']]
]);
