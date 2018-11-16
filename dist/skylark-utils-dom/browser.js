/**
 * skylark-utils-dom - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./dom","./langx"],function(e,n){"use strict";function t(e){return w?w+e:e.toLowerCase()}function r(e){return F[e]||e}function i(e){return d[e]||e}function o(){return o}var s,l,a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c=null,u="",m="",w="",d={},F={},f=/^(Webkit|webkit|O|Moz|moz|ms)(.*)$/,z=window.document,S=z.createElement("div"),b=S.webkitMatchesSelector||S.mozMatchesSelector||S.oMatchesSelector||S.matchesSelector,p=S.requestFullscreen||S.webkitRequestFullscreen||S.mozRequestFullScreen||S.msRequestFullscreen,v=(z.exitFullscreen||z.webkitCancelFullScreen||z.mozCancelFullScreen||z.msExitFullscreen,S.style);for(var x in v){var h=x.match(l||f);if(h){l||(s=h[1],l=new RegExp("^("+s+")(.*)$"),m=s,u="-"+s.toLowerCase()+"-",w=s.toLowerCase()),d[n.lowerFirst(h[2])]=x;var k=n.dasherize(h[2]);F[k]=u+k,a[x]&&(c=a[x])}}return c||void 0!==v.transition&&(c=a.transition),n.mixin(o,{css3PropPrefix:u,isIE:!!/msie/i.exec(window.navigator.userAgent),normalizeStyleProperty:i,normalizeCssProperty:r,normalizeCssEvent:t,matchesSelector:b,requestFullScreen:p,exitFullscreen:p,location:function(){return window.location},support:{}}),c&&(o.support.transition={end:c}),S=null,e.browser=o});
//# sourceMappingURL=sourcemaps/browser.js.map
