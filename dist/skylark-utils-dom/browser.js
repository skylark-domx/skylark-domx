/**
 * skylark-utils-dom - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx"],function(e,n){"use strict";function t(e){return w?w+e:e.toLowerCase()}function r(e){return F[e]||e}function i(e){return d[e]||e}function o(){return o}var s,l,a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c=null,u="",m="",w="",d={},F={},f=/^(Webkit|webkit|O|Moz|moz|ms)(.*)$/,z=window.document,S=z.createElement("div"),k=S.webkitMatchesSelector||S.mozMatchesSelector||S.oMatchesSelector||S.matchesSelector,b=S.requestFullscreen||S.webkitRequestFullscreen||S.mozRequestFullScreen||S.msRequestFullscreen,p=(z.exitFullscreen||z.webkitCancelFullScreen||z.mozCancelFullScreen||z.msExitFullscreen,S.style);for(var v in p){var x=v.match(l||f);if(x){l||(s=x[1],l=new RegExp("^("+s+")(.*)$"),m=s,u="-"+s.toLowerCase()+"-",w=s.toLowerCase()),d[n.lowerFirst(x[2])]=v;var h=n.dasherize(x[2]);F[h]=u+h,a[v]&&(c=a[v])}}return c||void 0!==p.transition&&(c=a.transition),n.mixin(o,{css3PropPrefix:u,isIE:!!/msie/i.exec(window.navigator.userAgent),normalizeStyleProperty:i,normalizeCssProperty:r,normalizeCssEvent:t,matchesSelector:k,requestFullScreen:b,exitFullscreen:b,location:function(){return window.location},support:{}}),c&&(o.support.transition={end:c}),S=null,e.browser=o});
//# sourceMappingURL=sourcemaps/browser.js.map
