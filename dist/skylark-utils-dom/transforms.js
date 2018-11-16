/**
 * skylark-utils-dom - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./dom","./langx","./browser","./datax","./styler"],function(n,t,a,r,o){function i(n,t,a){var r=Math.cos(n),o=Math.sin(n);return{M11:r*t,M12:-o*a,M21:o*t,M22:r*a}}function e(n,t){return n>0&&n>-t?t:n<0&&n<t?-t:0}function f(n,t){var a=i(t.radian,t.y,t.x);o.css(n,s,"matrix("+a.M11.toFixed(16)+","+a.M21.toFixed(16)+","+a.M12.toFixed(16)+","+a.M22.toFixed(16)+", 0, 0)")}function c(n,t){return t?void r.data(n,"transform",t):(t=r.data(n,"transform")||{},t.radian=t.radian||0,t.x=t.x||1,t.y=t.y||1,t.zoom=t.zoom||1,t)}function u(n){return function(){var a=t.makeArray(arguments),r=a.shift(),o=c(r);a.unshift(o),n.apply(this,a),f(r,o),c(r,o)}}function d(){return d}var s=a.normalizeCssProperty("transform"),m={vertical:function(n){n.radian=Math.PI-n.radian,n.y*=-1},horizontal:function(n){n.radian=Math.PI-n.radian,n.x*=-1},rotate:function(n,t){n.radian=t*Math.PI/180},left:function(n){n.radian-=Math.PI/2},right:function(n){n.radian+=Math.PI/2},scale:function(n,t){var a=e(n.y,t),r=e(n.x,t);a&&r&&(n.y+=a,n.x+=r)},zoomin:function(n){m.scale(n,.1)},zoomout:function(n){m.scale(n,-.1)}};return["vertical","horizontal","rotate","left","right","scale","zoom","zoomin","zoomout"].forEach(function(n){d[n]=u(m[n])}),t.mixin(d,{reset:function(n){var t={x:1,y:1,radian:0};f(n,t),c(n,t)}}),n.transforms=d});
//# sourceMappingURL=sourcemaps/transforms.js.map
