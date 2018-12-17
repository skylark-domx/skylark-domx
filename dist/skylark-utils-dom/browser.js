/**
 * skylark-utils-dom - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./dom","./langx"],function(e,n){"use strict";var t,r,i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},o=null,s="",l="",a={},c={},u=/^(Webkit|webkit|O|Moz|moz|ms)(.*)$/,m=window.document,w=m.createElement("div"),d=w.webkitMatchesSelector||w.mozMatchesSelector||w.oMatchesSelector||w.matchesSelector,F=w.requestFullscreen||w.webkitRequestFullscreen||w.mozRequestFullScreen||w.msRequestFullscreen,f=(m.exitFullscreen||m.webkitCancelFullScreen||m.mozCancelFullScreen||m.msExitFullscreen,w.style);for(var z in f){var S=z.match(r||u);if(S){r||(t=S[1],r=new RegExp("^("+t+")(.*)$"),t,s="-"+t.toLowerCase()+"-",l=t.toLowerCase()),a[n.lowerFirst(S[2])]=z;var b=n.dasherize(S[2]);c[b]=s+b,i[z]&&(o=i[z])}}function p(){return p}return o||void 0!==f.transition&&(o=i.transition),n.mixin(p,{css3PropPrefix:s,isIE:!!/msie/i.exec(window.navigator.userAgent),normalizeStyleProperty:function(e){return a[e]||e},normalizeCssProperty:function(e){return c[e]||e},normalizeCssEvent:function(e){return l?l+e:e.toLowerCase()},matchesSelector:d,requestFullScreen:F,exitFullscreen:F,location:function(){return window.location},support:{}}),o&&(p.support.transition={end:o}),w=null,e.browser=p});
//# sourceMappingURL=sourcemaps/browser.js.map
