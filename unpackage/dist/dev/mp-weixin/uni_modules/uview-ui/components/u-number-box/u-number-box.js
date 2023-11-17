(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-number-box/u-number-box"],{501:function(t,n,e){"use strict";e.r(n);var i=e(502),r=e(504);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e(507);var s,o=e(21),c=Object(o["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"6cbf39ee",null,!1,i["components"],s);c.options.__file="uni_modules/uview-ui/components/u-number-box/u-number-box.vue",n["default"]=c.exports},502:function(t,n,e){"use strict";e.r(n);var i=e(503);e.d(n,"render",(function(){return i["render"]})),e.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(n,"components",(function(){return i["components"]}))},503:function(t,n,e){"use strict";var i;e.r(n),e.d(n,"render",(function(){return r})),e.d(n,"staticRenderFns",(function(){return s})),e.d(n,"recyclableRender",(function(){return u})),e.d(n,"components",(function(){return i}));try{i={uIcon:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(e.bind(null,407))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.showMinus&&t.$slots.minus||!t.showMinus?null:t.__get_style([t.buttonStyle("minus")])),i=t.showMinus&&t.$slots.minus||!t.showMinus?null:t.isDisabled("minus"),r=t.showMinus&&t.$slots.minus||!t.showMinus?null:t.isDisabled("minus"),u=t.__get_style([t.inputStyle]),s=t.showPlus&&t.$slots.plus||!t.showPlus?null:t.__get_style([t.buttonStyle("plus")]),o=t.showPlus&&t.$slots.plus||!t.showPlus?null:t.isDisabled("plus"),c=t.showPlus&&t.$slots.plus||!t.showPlus?null:t.isDisabled("plus");t.$mp.data=Object.assign({},{$root:{s0:e,m0:i,m1:r,s1:u,s2:s,m2:o,m3:c}})},u=!1,s=[];r._withStripped=!0},504:function(t,n,e){"use strict";e.r(n);var i=e(505),r=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=r.a},505:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e(506));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c={name:"u-number-box",mixins:[t.$u.mpMixin,t.$u.mixin,i.default],data:function(){return{currentValue:"",longPressTimer:null}},watch:{watchChange:function(t){this.check()},value:function(t){t!==this.currentValue&&(this.currentValue=this.format(this.value))}},computed:{getCursorSpacing:function(){return t.$u.getPx(this.cursorSpacing)},buttonStyle:function(){var n=this;return function(e){var i={backgroundColor:n.bgColor,height:t.$u.addUnit(n.buttonSize),color:n.color};return n.isDisabled(e)&&(i.backgroundColor="#f7f8fa"),i}},inputStyle:function(){this.disabled||this.disabledInput;var n={color:this.color,backgroundColor:this.bgColor,height:t.$u.addUnit(this.buttonSize),width:t.$u.addUnit(this.inputWidth)};return n},watchChange:function(){return[this.integer,this.decimalLength,this.min,this.max]},isDisabled:function(){var t=this;return function(n){return"plus"===n?t.disabled||t.disablePlus||t.currentValue>=t.max:t.disabled||t.disableMinus||t.currentValue<=t.min}}},mounted:function(){this.init()},methods:{init:function(){this.currentValue=this.format(this.value)},format:function(t){return t=this.filter(t),t=""===t?0:+t,t=Math.max(Math.min(this.max,t),this.min),null!==this.decimalLength&&(t=t.toFixed(this.decimalLength)),t},filter:function(t){return t=String(t).replace(/[^0-9.-]/g,""),this.integer&&-1!==t.indexOf(".")&&(t=t.split(".")[0]),t},check:function(){var t=this.format(this.currentValue);t!==this.currentValue&&(this.currentValue=t)},onFocus:function(t){this.$emit("focus",s(s({},t.detail),{},{name:this.name}))},onBlur:function(t){this.format(t.detail.value);this.$emit("blur",s(s({},t.detail),{},{name:this.name}))},onInput:function(t){var n=t.detail||{},e=n.value,i=void 0===e?"":e;if(""!==i){var r=this.filter(i);if(null!==this.decimalLength&&-1!==r.indexOf(".")){var u=r.split(".");r="".concat(u[0],".").concat(u[1].slice(0,this.decimalLength))}r=this.format(r),this.emitChange(r)}},emitChange:function(t){var n=this;this.asyncChange||this.$nextTick((function(){n.$emit("input",t),n.currentValue=t,n.$forceUpdate()})),this.$emit("change",{value:t,name:this.name})},onChange:function(){var t=this.type;if(this.isDisabled(t))return this.$emit("overlimit",t);var n="minus"===t?-this.step:+this.step,e=this.format(this.add(+this.currentValue,n));this.emitChange(e),this.$emit(t)},add:function(t,n){var e=Math.pow(10,10);return Math.round((t+n)*e)/e},clickHandler:function(t){this.type=t,this.onChange()},longPressStep:function(){var t=this;this.clearTimeout(),this.longPressTimer=setTimeout((function(){t.onChange(),t.longPressStep()}),250)},onTouchStart:function(t){var n=this;this.longPress&&(this.clearTimeout(),this.type=t,this.longPressTimer=setTimeout((function(){n.onChange(),n.longPressStep()}),600))},onTouchEnd:function(){this.longPress&&this.clearTimeout()},clearTimeout:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){clearTimeout(this.longPressTimer),this.longPressTimer=null}))}};n.default=c}).call(this,e(1)["default"])},507:function(t,n,e){"use strict";e.r(n);var i=e(508),r=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=r.a},508:function(t,n,e){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-number-box/u-number-box.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-number-box/u-number-box-create-component',
    {
        'uni_modules/uview-ui/components/u-number-box/u-number-box-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(501))
        })
    },
    [['uni_modules/uview-ui/components/u-number-box/u-number-box-create-component']]
]);
