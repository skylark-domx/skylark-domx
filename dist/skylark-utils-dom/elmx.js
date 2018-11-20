/**
 * skylark-utils-dom - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./dom","./langx","./datax","./eventer","./finder","./fx","./geom","./noder","./styler"],function(e,t,n,o,r,i,a,s,l){function d(e,n){return function(){var o=this,r=o.domNode,i=e.apply(n,[r].concat(g.call(arguments)));if(i){if(i===n)return o;i instanceof HTMLElement?i=new f(i):t.isArrayLike(i)&&(i=c.call(i,function(e){return e instanceof HTMLElement?new f(i):e}))}return i}}var c=Array.prototype.map,g=Array.prototype.slice,f=t.klass({klassName:"VisualElement",init:function(e){t.isString(e)&&(e=document.getElementById(e)),this.domNode=e}}),p=new f(document.body),u=function(e){return e?new f(e):p};t.mixin(u,{batch:function(e,t,n){return e.forEach(function(e){var o=e instanceof f?e:u(e);o[t].apply(o,n)}),this},root:new f(document.body),VisualElement:f,partial:function(e,t){var n={};n[e]=t,f.partial(n)},delegate:function(e,t){var n={};e.forEach(function(e){n[e]=d(t[e],t)}),f.partial(n)}}),u.delegate(["attr","data","prop","removeAttr","removeData","text","val"],n),u.delegate(["off","on","one","shortcuts","trigger"],o),u.delegate(["ancestor","ancestors","children","descendant","find","findAll","firstChild","lastChild","matches","nextSibling","nextSiblings","parent","previousSibling","previousSiblings","siblings"],r),u.find=function(e){return"body"===e?this.root:this.root.descendant(e)},u.delegate(["animate","fadeIn","fadeOut","fadeTo","fadeToggle","hide","scrollToTop","show","toggle"],i),u.delegate(["borderExtents","boundingPosition","boundingRect","clientHeight","clientSize","clientWidth","contentRect","height","marginExtents","offsetParent","paddingExtents","pagePosition","pageRect","relativePosition","relativeRect","scrollIntoView","scrollLeft","scrollTop","size","width"],a),u.delegate(["after","append","before","clone","contains","contents","empty","html","isChildOf","ownerDoc","prepend","remove","removeChild","replace","reverse","throb","traverse","wrapper","wrapperInner","unwrap"],s),u.delegate(["addClass","className","css","hasClass","hide","isInvisible","removeClass","show","toggleClass"],l);var h=["position","left","top","right","bottom","width","height","border","borderLeft","borderTop","borderRight","borderBottom","borderColor","display","overflow","margin","marginLeft","marginTop","marginRight","marginBottom","padding","paddingLeft","paddingTop","paddingRight","paddingBottom","color","background","backgroundColor","opacity","fontSize","fontWeight","textAlign","textDecoration","textTransform","cursor","zIndex"];h.forEach(function(e){var t=e;f.prototype[t]=function(t){return this.css(e,t),this}});var m=["keyUp","keyDown","mouseOver","mouseOut","click","dblClick","change"];return m.forEach(function(e){var t=e;f.prototype[t]=function(t){return this.on(e.toLowerCase(),t),this}}),e.elmx=u});
//# sourceMappingURL=sourcemaps/elmx.js.map