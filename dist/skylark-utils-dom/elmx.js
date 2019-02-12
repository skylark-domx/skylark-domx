/**
 * skylark-utils-dom - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./dom","./langx","./datax","./eventer","./finder","./fx","./geom","./noder","./styler","./query"],function(e,t,n,o,r,i,a,s,l,c){var d=Array.prototype.map,p=Array.prototype.slice,f=t.klass({klassName:"VisualElement",_construct:function(e){t.isString(e)&&(e="<"===e.charAt(0)?s.createFragment(e)[0]:document.getElementById(e)),this._elm=e}});f.prototype.$=f.prototype.query=function(e){return c(e,this._elm)},f.prototype.elm=function(){return this._elm};var g=new f(document.body),u=function(e){return e?new f(e):g};t.mixin(u,{batch:function(e,t,n){return e.forEach(function(e){var o=e instanceof f?e:u(e);o[t].apply(o,n)}),this},root:new f(document.body),VisualElement:f,partial:function(e,t){var n={};n[e]=t,f.partial(n)},delegate:function(e,n){var o={};e.forEach(function(e){o[e]=function(e,n){return function(){var o=this._elm,r=e.apply(n,[o].concat(p.call(arguments)));if(r){if(r===n)return this;r instanceof HTMLElement?r=new f(r):t.isArrayLike(r)&&(r=d.call(r,function(e){return e instanceof HTMLElement?new f(e):e}))}return r}}(n[e],n)}),f.partial(o)}}),u.delegate(["attr","data","prop","removeAttr","removeData","text","val"],n),u.delegate(["off","on","one","shortcuts","trigger"],o),u.delegate(["ancestor","ancestors","children","descendant","find","findAll","firstChild","lastChild","matches","nextSibling","nextSiblings","parent","previousSibling","previousSiblings","siblings"],r),u.find=function(e){return"body"===e?this.root:this.root.descendant(e)},u.delegate(["animate","fadeIn","fadeOut","fadeTo","fadeToggle","hide","scrollToTop","show","toggle"],i),u.delegate(["borderExtents","boundingPosition","boundingRect","clientHeight","clientSize","clientWidth","contentRect","height","marginExtents","offsetParent","paddingExtents","pagePosition","pageRect","relativePosition","relativeRect","scrollIntoView","scrollLeft","scrollTop","size","width"],a),u.delegate(["after","append","before","clone","contains","contents","empty","html","isChildOf","ownerDoc","prepend","remove","removeChild","replace","reverse","throb","traverse","wrapper","wrapperInner","unwrap"],s),u.delegate(["addClass","className","css","hasClass","hide","isInvisible","removeClass","show","toggleClass"],l);["position","left","top","right","bottom","width","height","border","borderLeft","borderTop","borderRight","borderBottom","borderColor","display","overflow","margin","marginLeft","marginTop","marginRight","marginBottom","padding","paddingLeft","paddingTop","paddingRight","paddingBottom","color","background","backgroundColor","opacity","fontSize","fontWeight","textAlign","textDecoration","textTransform","cursor","zIndex"].forEach(function(e){var t=e;f.prototype[t]=function(t){return this.css(e,t),this}});return["keyUp","keyDown","mouseOver","mouseOut","click","dblClick","change"].forEach(function(e){var t=e;f.prototype[t]=function(t){return this.on(e.toLowerCase(),t),this}}),e.elmx=u});
//# sourceMappingURL=sourcemaps/elmx.js.map
