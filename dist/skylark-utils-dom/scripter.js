/**
 * skylark-utils-dom - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./dom","./langx","./noder","./finder"],function(e,t,r,a){var n=document.getElementsByTagName("head")[0],l={},o={},d=0,i=/^$|^module$|\/(?:java|ecma)script/i;function c(){return c}var s={type:!0,src:!0,nonce:!0,noModule:!0};function u(e,t,r){var a,n,l=(r=r||document).createElement("script");if(l.text=e,t)for(a in s)(n=t[a]||t.getAttribute&&t.getAttribute(a))&&l.setAttribute(a,n);return r.head.appendChild(l).parentNode.removeChild(l),this}return t.mixin(c,{loadJavaScript:function(e,t,r){var a=l[e];if(a||(a=l[e]={state:0,loadedCallbacks:[],errorCallbacks:[]}),a.loadedCallbacks.push(t),a.errorCallbacks.push(r),1===a.state)a.node.onload();else if(-1===a.state)a.node.onerror();else{var i=a.node=document.createElement("script"),c=a.id=d++;i.type="text/javascript",i.async=!1,i.defer=!1,startTime=(new Date).getTime(),n.appendChild(i),i.onload=function(){a.state=1;for(var e=a.loadedCallbacks,t=e.length;t--;)e[t]();a.loadedCallbacks=[],a.errorCallbacks=[]},i.onerror=function(){a.state=-1;for(var e=a.errorCallbacks,t=e.length;t--;)e[t]();a.loadedCallbacks=[],a.errorCallbacks=[]},i.src=e,o[c]=i}return a.id},deleteJavaScript:function(e){var t=o[e];if(t){var a=t.src;r.remove(t),delete o[e],delete l[a]}},evaluate:u,html:function(e,t){var a=r.html(e,t);if(void 0!==t){for(var n=e.querySelectorAll("script"),l=0;l<n.length;l++){var o=n[l];i.test(o.type||"")&&u(o.textContent,o)}return this}return a}}),e.scripter=c});
//# sourceMappingURL=sourcemaps/scripter.js.map
