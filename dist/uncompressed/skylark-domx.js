/**
 * skylark-domx - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals) {
  var define = globals.define,
      require = globals.require,
      isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                resolved: false,
                exports: null
            };
            require(id);
        } else {
            map[id] = {
                factory : null,
                resolved : true,
                exports : factory
            };
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.resolved) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args) || null;
            module.resolved = true;
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx-ns");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define('skylark-domx/browser',[
    "skylark-domx-browser"
], function(browser) {
    "use strict";

    return browser;
});

define('skylark-domx/css',[
    "skylark-domx-css"
], function( css) {
    "use strict";

     return css;
});

define('skylark-domx/data',[
    "skylark-domx-data"
], function( datax) {
 
    return datax;
});
define('skylark-domx/eventer',[
    "skylark-domx-eventer"
], function( eventer) {
 
    return eventer;
});
define('skylark-domx/finder',[
    "skylark-domx-finder"
], function( finder) {

    return finder;
});
define('skylark-domx/fx',[
    "skylark-domx-fx"
], function( fx) {
    return fx;
});
define('skylark-domx/geom',[
    "skylark-domx-geom"
], function( geom) {

    return geom;
});
define('skylark-domx/images',[
    "skylark-domx-images"
], function(images) {
  return images;
});

define('skylark-domx/noder',[
    "skylark-domx-noder"
], function( noder) {

    return noder;
});
define('skylark-domx/plugins',[
    "skylark-domx-plugins"
], function( plugins) {
    "use strict";
    return plugins;
});
define('skylark-domx/styler',[
    "skylark-domx-styler"
], function( styler) {

    return styler;
});
define('skylark-domx/query',[
    "skylark-domx-query",
    "./data",
    "./eventer",
    "./fx",
    "./geom",
    "./styler"
], function( query) {

    return query;

});
define('skylark-domx/scripter',[
    "skylark-domx-scripter"
], function( scripter) {

    return dom.scripter = scripter;
});
define('skylark-domx/transforms',[
    "skylark-domx-transforms"
], function(transforms) {
  return dom.transforms = transforms;
});

define('skylark-domx/velm',[
    "skylark-domx-velm"
], function( velm) {
     return velm;
});
define('skylark-domx/main',[
    "./browser",
    "./css",
    "./data",
    "./eventer",
    "./finder",
    "./fx",
    "./geom",
    "./images",
    "./noder",
    "./plugins",
    "./query",
    "./scripter",
    "./styler",
    "./transforms",
    "./velm"
], function(browser,css,data,eventer,finder,fx,geom,images,noder,plugins,query,scripter,styler,transforms,velm) {
    return {
        browser,
        css,
        data,
        eventer,
        finder,
        geom,
        images,
        noder,
        plugins,
        query,
        scripter,
        styler,
        transforms,
        velm
    };
})
;
define('skylark-domx', ['skylark-domx/main'], function (main) { return main; });


},this);
//# sourceMappingURL=sourcemaps/skylark-domx.js.map