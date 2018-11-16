/**
 * skylark-utils-dom - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./dom","./langx","./eventer","./noder","./finder","./geom","./styler","./datax","./transforms","./query"],function(e,o,n,i,r,t,s,a,u,f){function l(e){function i(){l.resolve({total:s,successed:u,failered:f,imgs:e})}function r(o,n){a++,n?u++:f++,l.progress({img:o,isLoaded:n,progressed:a,total:s,imgs:e}),a==s&&i()}function t(){return e.length?void e.forEach(function(e){c(e)?r(e,d(e)):n.on(e,{load:function(){r(e,!0)},error:function(){r(e,!1)}})}):void i()}o.isArray(e)||(e=[e]);var s=e.length,a=0,u=0,f=0,l=new o.Deferred;return o.defer(t),l.promise.totalCount=s,l.promise}function c(e){return e.complete&&void 0!==e.naturalWidth}function d(e){return e.complete&&0!==e.naturalWidth}function g(e,o){function n(e){var o=/url\((['"])?(.*?)\1\)/gi,n=o.exec(s.css(e,"background-image")),r=n&&n[2];if(r){var t=new Image;t.src=r,i.push(t)}}var i=[];if(o=o||{},"IMG"==e.nodeName)i.push(e);else{for(var t=r.findAll(e,"img"),a=0;a<t.length;a++)i.push(t[a]);if(o.background===!0)n(e);else if("string"==typeof o.background){var u=r.findAll(e,o.background);for(a=0;a<u.length;a++)n(u[a])}}return l(i)}function h(e,n){o.isString(e)&&(e=[e]);var i=[];return e.forEach(function(e){var o=new Image;o.src=e,i.push(o)}),l(i)}function m(e,n){function r(){s.css(d,{top:(h.height-d.offsetHeight)/2+"px",left:(h.width-d.offsetWidth)/2+"px"}),u.reset(d),s.css(d,{visibility:"visible"}),m&&m()}function a(){}function f(){g=s.css(e,["position","overflow"]),"relative"!=g.position&&"absolute"!=g.position&&s.css(e,"position","relative"),s.css(e,"overflow","hidden"),d=new Image,s.css(d,{position:"absolute",border:0,padding:0,margin:0,width:"auto",height:"auto",visibility:"hidden"}),d.onload=r,d.onerror=a,i.append(e,d),n.url&&l(n.url)}function l(e){d.style.visibility="hidden",d.src=e}function c(){i.remove(d),s.css(e,g),d=d.onload=d.onerror=null}var d,g={},h=t.clientSize(e),m=n.loaded;n.failered;f();var v={load:l,dispose:c};return["vertical","horizontal","rotate","left","right","scale","zoom","zoomin","zoomout","reset"].forEach(function(e){v[e]=function(){var n=o.makeArray(arguments);n.unshift(d),u[e].apply(null,n)}}),v}function v(){return v}return f.fn.imagesLoaded=function(e){return g(this,e)},f.fn.imagesViewer=function(e){return m(this,e)},v.transform=function(e,o){},["vertical","horizontal","rotate","left","right","scale","zoom","zoomin","zoomout","reset"].forEach(function(e){v.transform[e]=u[e]}),o.mixin(v,{isCompleted:c,isLoaded:d,loaded:g,preload:h,viewer:m}),e.images=v});
//# sourceMappingURL=sourcemaps/images.js.map
