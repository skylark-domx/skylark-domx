/**
 * skylark-domx - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,e){var n=e.define,require=e.require,s="function"==typeof n&&n.amd,t=!s&&"undefined"!=typeof exports;if(!s&&!n){var o={};n=e.define=function(r,e,n){"function"==typeof n?(o[r]={factory:n,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var n=e.split("/"),s=r.split("/");n.pop();for(var t=0;t<s.length;t++)"."!=s[t]&&(".."==s[t]?n.pop():n.push(s[t]));return n.join("/")}(e,r)}),resolved:!1,exports:null},require(r)):o[r]={factory:null,resolved:!0,exports:n}},require=e.require=function(r){if(!o.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=o[r];if(!module.resolved){var n=[];module.deps.forEach(function(r){n.push(require(r))}),module.exports=module.factory.apply(e,n)||null,module.resolved=!0}return module.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-domx/animates",["skylark-domx-animates"],function(r){return r}),r("skylark-domx/browser",["skylark-domx-browser"],function(r){"use strict";return r}),r("skylark-domx/css",["skylark-domx-css"],function(r){"use strict";return r}),r("skylark-domx/data",["skylark-domx-data"],function(r){return r}),r("skylark-domx/eventer",["skylark-domx-eventer"],function(r){return r}),r("skylark-domx/finder",["skylark-domx-finder"],function(r){return r}),r("skylark-domx/fx",["skylark-domx-fx"],function(r){return r}),r("skylark-domx/geom",["skylark-domx-geom"],function(r){return r}),r("skylark-domx/iframes",["skylark-domx-iframes"],function(r){return r}),r("skylark-domx/lists",["skylark-domx-lists"],function(r){return r}),r("skylark-domx/noder",["skylark-domx-noder"],function(r){return r}),r("skylark-domx/styler",["skylark-domx-styler"],function(r){return r}),r("skylark-domx/query",["skylark-domx-query","./data","./eventer","./fx","./geom","./styler"],function(r){return r}),r("skylark-domx/transforms",["skylark-domx-transforms"],function(r){return r}),r("skylark-domx/transits",["skylark-domx-transits"],function(r){return r}),r("skylark-domx/velm",["skylark-domx-velm","./data","./eventer","./fx","./geom","./styler"],function(r){return r}),r("skylark-domx/main",["./animates","./browser","./css","./data","./eventer","./finder","./fx","./geom","./iframes","./lists","./noder","./query","./styler","./transforms","./transits","./velm"],function(r,e,n,s,t,o,a,k,i,l,u,d,m,f){return{animates:animates,browser:r,css:e,data:n,eventer:s,finder:t,geom:a,lists:i,noder:l,iframes:k,query:u,styler:d,transforms:m,transits:transits,velm:f}}),r("skylark-domx",["skylark-domx/main"],function(r){return r})}(n),!s){var a=require("skylark-langx-ns");t?module.exports=a:e.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx.js.map
