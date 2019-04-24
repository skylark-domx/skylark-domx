/**
 * skylark-utils-dom - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./dom","./langx","./noder","./datax"],function(n,t,e,o){"use strict";var u=function(){return u};return u.editable=function(n,t){if(void 0===t)return"true"==n.contentEditable;t=t?"true":null,o.attr(n,"contentEditable",t)},u.execCommand=function(n,t){document.execCommand(t,!1,null)},n.contents=u});
//# sourceMappingURL=sourcemaps/contents.js.map
