/**
 * skylark-utils-dom - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./dom","./langx","./finder"],function(t,e,r){function n(t,e,r){null==r?t.removeAttribute(e):t.setAttribute(e,r)}function i(t,e,r){return this.attr(t,"aria-"+e,r)}function a(t,e,r){if(void 0!==r)return t.setAttribute(e,r),this;if("object"==typeof e){for(var n in e)a(t,n,e[n]);return this}return t.hasAttribute&&t.hasAttribute(e)?t.getAttribute(e):void 0}function o(t){var r={};return e.each(t.attributes||[],function(t,e){0==e.name.indexOf("data-")&&(r[_(e.name.replace("data-",""))]=$(e.value))}),r}function u(t,e){var r=t._$_store;return!r&&e&&(r=t._$_store=o(t)),r}function c(t,e){if(void 0===e)return u(t,!0);var r=u(t);if(r){if(e in r)return r[e];var n=_(e);if(n in r)return r[n]}var i="data-"+e.replace(C,"-$1").toLowerCase();return a(t,i)}function f(t,e,r){var n=u(t,!0);n[_(e)]=r}function l(t,e,r){if(void 0===r){if("object"==typeof e){for(var n in e)f(t,n,e[n]);return this}return c(t,e)}return f(t,e,r),this}function s(t){t._$_store&&delete t._$_store}function d(t,r){e.isString(r)&&(r=r.split(/\s+/));var n=u(t,!0);return r.forEach(function(t){delete n[t]}),this}function p(t,e){return A.call(t,function(t){return t[e]})}function v(t,e,r){return e=E[e]||e,void 0===r?t[e]:(t[e]=r,this)}function h(t,e){return e.split(" ").forEach(function(e){n(t,e)}),this}function m(t,e){return e.split(" ").forEach(function(e){delete t[e]}),this}function b(t,e){return void 0===e?t.textContent:(t.textContent=null==e?"":""+e,this)}function x(t,e){if(void 0===e){if(t.multiple){var n=y.call(r.find(t,"option"),function(t){return t.selected});return p(n,"value")}return t.value}return t.value=e,this}function g(){return g}var A=Array.prototype.map,y=Array.prototype.filter,_=e.camelCase,$=e.deserializeValue,C=/([A-Z])/g,E={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"};return r.pseudos.data=function(t,e,r,n){return!!l(t,n||r[3])},e.mixin(g,{aria:i,attr:a,cleanData:s,data:l,pluck:p,prop:v,removeAttr:h,removeData:d,removeProp:m,text:b,val:x}),t.datax=g});
//# sourceMappingURL=sourcemaps/datax.js.map
