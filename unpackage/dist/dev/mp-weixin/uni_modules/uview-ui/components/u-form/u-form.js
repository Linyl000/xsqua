(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-form/u-form"],{649:function(e,n,t){"use strict";t.r(n);var r=t(650),i=t(652);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);var u,a=t(20),l=Object(a["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"786a592e",null,!1,r["components"],u);l.options.__file="uni_modules/uview-ui/components/u-form/u-form.vue",n["default"]=l.exports},650:function(e,n,t){"use strict";t.r(n);var r=t(651);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},651:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return r}));var i=function(){var e=this,n=e.$createElement;e._self._c},o=!1,u=[];i._withStripped=!0},652:function(e,n,t){"use strict";t.r(n);var r=t(653),i=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=i.a},653:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t(10)),i=u(t(494)),o=u(t(654));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return d(e)||s(e)||c(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,n){if(e){if("string"===typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}function s(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function d(e){if(Array.isArray(e))return f(e)}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e,n,t,r,i,o,u){try{var a=e[o](u),l=a.value}catch(c){return void t(c)}a.done?n(l):Promise.resolve(l).then(r,i)}function v(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function u(e){h(o,r,i,u,a,"next",e)}function a(e){h(o,r,i,u,a,"throw",e)}u(void 0)}))}}o.default.warning=function(){};var m={name:"u-form",mixins:[e.$u.mpMixin,e.$u.mixin,i.default],provide:function(){return{uForm:this}},data:function(){return{formRules:{},validator:{},originalModel:null}},watch:{rules:{immediate:!0,handler:function(e){this.setRules(e)}},propsChange:function(e){var n;(null===(n=this.children)||void 0===n?void 0:n.length)&&this.children.map((function(e){"function"==typeof e.updateParentData&&e.updateParentData()}))},model:{immediate:!0,handler:function(n){this.originalModel||(this.originalModel=e.$u.deepClone(n))}}},computed:{propsChange:function(){return[this.errorType,this.borderBottom,this.labelPosition,this.labelWidth,this.labelAlign,this.labelStyle]}},created:function(){this.children=[]},methods:{setRules:function(n){0!==Object.keys(n).length&&(0!==Object.keys(this.model).length?(this.formRules=n,this.validator=new o.default(n)):e.$u.error("设置rules，model必须设置！如果已经设置，请刷新页面。"))},resetFields:function(){this.resetModel()},resetModel:function(n){var t=this;this.children.map((function(n){var r=null===n||void 0===n?void 0:n.prop,i=e.$u.getProperty(t.originalModel,r);e.$u.setProperty(t.model,r,i)}))},clearValidate:function(e){e=[].concat(e),this.children.map((function(n){(void 0===e[0]||e.includes(n.prop))&&(n.message=null)}))},validateField:function(n,t){var i=arguments,u=this;return v(r.default.mark((function l(){var c;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:c=i.length>2&&void 0!==i[2]?i[2]:null,u.$nextTick((function(){var r=[];n=[].concat(n),u.children.map((function(t){var i=[];if(n.includes(t.prop)){var l=e.$u.getProperty(u.model,t.prop),s=t.prop.split("."),d=s[s.length-1],f=u.formRules[t.prop];if(!f)return;for(var h=[].concat(f),v=0;v<h.length;v++){var m=h[v],y=[].concat(null===m||void 0===m?void 0:m.trigger);if(!c||y.includes(c)){var g=new o.default(p({},d,m));g.validate(p({},d,l),(function(n,o){var u,l;e.$u.test.array(n)&&(r.push.apply(r,a(n)),i.push.apply(i,a(n))),t.message=null!==(u=null===(l=i[0])||void 0===l?void 0:l.message)&&void 0!==u?u:null}))}}}})),"function"===typeof t&&t(r)}));case 2:case"end":return r.stop()}}),l)})))()},validate:function(n){var t=this;if(0!==Object.keys(this.formRules).length)return new Promise((function(n,r){t.$nextTick((function(){var i=t.children.map((function(e){return e.prop}));t.validateField(i,(function(i){i.length?("toast"===t.errorType&&e.$u.toast(i[0].message),r(i)):n(!0)}))}))}));e.$u.error("未设置rules，请看文档说明！如果已经设置，请刷新页面。")}}};n.default=m}).call(this,t(1)["default"])}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-form/u-form.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-form/u-form-create-component',
    {
        'uni_modules/uview-ui/components/u-form/u-form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(649))
        })
    },
    [['uni_modules/uview-ui/components/u-form/u-form-create-component']]
]);
