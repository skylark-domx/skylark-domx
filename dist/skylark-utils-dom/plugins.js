/**
 * skylark-utils-dom - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/klass","./langx","./noder","./datax","./eventer","./finder","./geom","./styler","./fx","./query","./velm"],function(t,i,n,e,s,o,r,a,l,h,u,p){"use strict";function c(t,i){var n=t.prototype.pluginName;g[n]=t,i&&p.partial(i,u.fn[i]=function(t){var i=m.call(arguments,0);return i.unshift(n),this.plugin.apply(this,i)})}function f(t,i,e){var o=s.data(t,i);if("instance"===e)return o;var r="string"==typeof e,a=m.call(arguments,2),l=this;if(r){var h=e;return o?n.isFunction(o[h])&&"_"!==h.charAt(0)?o[h].apply(o,a):n.error("no such method '"+h+"' for "+i+" plugin instance"):n.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+h+"'")}if(a.length&&(e=n.mixin.apply(n,[{},e].concat(a))),o)o.option(e||{});else{var u=g[i];s.data(t,i,new u(e,t))}return l}function d(){return d}var m=Array.prototype.slice,g=(Array.prototype.concat,{}),v=0,y=n.Evented.inherit({klassName:"Plugin",pluginEventPrefix:"",options:{create:null},_construct:function(t,i){i=u(i||this.defaultElement||this)[0],this.element=u(i),this.uuid=v++,this.eventNamespace="."+this.pluginName+this.uuid,this.bindings=u(),this.classesElementLookup={},i!==this&&(s.data(i,this.pluginName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=u(i.style?i.ownerDocument:i.document||i),this.window=u(this.document[0].defaultView||this.document[0].parentWindow)),this._initOptions(t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_initOptions:function(t){var i=this.constructor,e=i.cache=i.cache||{},s=e.defaults;if(!s){var o=[];do{if(o.unshift(i),i===y)break;i=i.superclass}while(i);s=e.defaults={};for(var r=0;r<o.length;r++)i=o[r],i.prototype.hasOwnProperty("options")&&n.mixin(s,i.prototype.options)}return this.options=n.mixin(s,t)},_getCreateEventData:n.noop,_create:n.noop,_init:n.noop,destroy:function(){this._destroy(),this.element.off(this.eventNamespace).removeData(this.pluginName),this.plugin().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:n.noop,_delay:function(t,i){function n(){return("string"==typeof t?e[t]:t).apply(e,arguments)}var e=this;return setTimeout(n,i||0)},option:function(t,i){var e,s,o,r=t;if(0===arguments.length)return n.mixin({},this.options);if("string"==typeof t)if(r={},e=t.split("."),t=e.shift(),e.length){for(s=r[t]=n.mixin({},this.options[t]),o=0;o<e.length-1;o++)s[e[o]]=s[e[o]]||{},s=s[e[o]];if(t=e.pop(),1===arguments.length)return void 0===s[t]?null:s[t];s[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];r[t]=i}return this._setOptions(r),this},_setOptions:function(t){var i;for(i in t)this._setOption(i,t[i]);return this},_setOption:function(t,i){return this.options[t]=i,this}});return u.fn.plugin=function(t,i){var n=m.call(arguments,1),e=this,s=this;return this.each(function(){s=f.apply(e,[this,t].concat(n))}),s},p.partial("plugin",function(t,i){var n=m.call(arguments,1);return f.apply(this,[this,t].concat(n))}),n.mixin(d,{instantiate:f,Plugin:y,register:c}),d});
//# sourceMappingURL=sourcemaps/plugins.js.map
