define([
    "./dom",
    "./langx",
    "./noder",
    "./datax",
    "./eventer",
    "./finder",
    "./geom",
    "./styler",
    "./fx",
    "./query",
    "./elmx"
], function(dom, langx, noder, datax, eventer, finder, geom, styler, fx, $, elmx) {
    "use strict";

	var slice = Array.prototype.slice,
        concat = Array.prototype.concat,
        pluginKlasses = {};


    /*
     * Register a plugin type
     */
    function register( pluginKlass,shortcut) {
        var name = pluginKlass.prototype.pluginName;
        
        pluginKlasses[name] = pluginKlass;

        if (shortcut) {
            elmx.partial(shortcut,$.fn[shortcut] = function(options) {
                var args = slice.call(arguments,0);
                args.unshift(name);
                return this.plugin.apply(this,args);
            });
        }
    }

    /*
     * Create or get a plugin instance assocated with the element,
     * also you can execute the plugin method directory;
     */
    function instantiate(elm,pluginName,options) {

        var pluginInstance = datax.data( elm, pluginName );

        if (options === "instance") {
            return pluginInstance;
        }

        var isMethodCall = typeof options === "string",
            args = slice.call( arguments, 2 ),
            returnValue = this;

        if ( isMethodCall ) {
            var methodName = options;

            if ( !pluginInstance ) {
                return langx.error( "cannot call methods on " + pluginName +
                    " prior to initialization; " +
                    "attempted to call method '" + methodName + "'" );
            }

            if ( !langx.isFunction( pluginInstance[ methodName ] ) || methodName.charAt( 0 ) === "_" ) {
                return langx.error( "no such method '" + methodName + "' for " + pluginName +
                    " plugin instance" );
            }

            return pluginInstance[ methodName ].apply( pluginInstance, args );

        } else {
            // Allow multiple hashes to be passed on init
            if ( args.length ) {
                options = langx.mixin.apply( langx, [{},options ].concat( args ) );
            }

            if ( pluginInstance ) {
                pluginInstance.option( options || {} );
            } else {
                var pluginKlass = pluginKlasses[pluginName]; 
                datax.data( elm, pluginName, new pluginKlass( options, elm ) );
            }
        }

        return returnValue;
    }

    var pluginUuid = 0;
    var Plugin =   langx.Evented.inherit({
        klassName: "Plugin",

        pluginEventPrefix: "",

        options: {
            // Callbacks
            create: null
        },

        _construct : function(options,element) {
            //this.options = langx.mixin( {}, this.options );

            element = $( element || this.defaultElement || this )[ 0 ];
            this._elm = element;
            
            this.element = $( element );
            this.uuid = pluginUuid++;
            this.eventNamespace = "." + this.pluginName + this.uuid;

            this.bindings = $();
            this.classesElementLookup = {};

            if ( element !== this ) {
                datax.data( element, this.pluginName, this );
                this._on( true, this.element, {
                    remove: function( event ) {
                        if ( event.target === element ) {
                            this.destroy();
                        }
                    }
                } );
                this.document = $( element.style ?

                    // Element within the document
                    element.ownerDocument :

                    // Element is window or document
                    element.document || element );
                this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
            }

//            this.options = langx.mixin( {},
//                this.options,
//                this._getCreateOptions(),
//                options );
            this._initOptions(options);

            this._create();

            this._trigger( "create", null, this._getCreateEventData() );

            this._init();
        },

        _initOptions : function(options) {
          var ctor = this.constructor,
              cache = ctor.cache = ctor.cache || {},
              defaults = cache.defaults;
          if (!defaults) {
            var  ctors = [];
            do {
              ctors.unshift(ctor);
              if (ctor === Plugin) {
                break;
              }
              ctor = ctor.superclass;
            } while (ctor);

            defaults = cache.defaults = {};
            for (var i=0;i<ctors.length;i++) {
              ctor = ctors[i];
              if (ctor.prototype.hasOwnProperty("options")) {
                langx.mixin(defaults,ctor.prototype.options);
              }
            }
          }
          return this.options = langx.mixin(defaults,options);
        },

//        _getCreateOptions: function() {
//            return {};
//        },

        _getCreateEventData: langx.noop,

        _create: langx.noop,

        _init: langx.noop,

        destroy: function() {
            var that = this;

            this._destroy();
            // We can probably remove the unbind calls in 2.0
            // all event bindings should go through this._on()
            this.element
                .off( this.eventNamespace )
                .removeData( this.pluginName );
            this.plugin()
                .off( this.eventNamespace )
                .removeAttr( "aria-disabled" );

            // Clean up events and states
            this.bindings.off( this.eventNamespace );
        },

        _destroy: langx.noop,

        _delay: function( handler, delay ) {
            function handlerProxy() {
                return ( typeof handler === "string" ? instance[ handler ] : handler )
                    .apply( instance, arguments );
            }
            var instance = this;
            return setTimeout( handlerProxy, delay || 0 );
        },

        option: function( key, value ) {
            var options = key;
            var parts;
            var curOption;
            var i;

            if ( arguments.length === 0 ) {

                // Don't return a reference to the internal hash
                return langx.mixin( {}, this.options );
            }

            if ( typeof key === "string" ) {

                // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split( "." );
                key = parts.shift();
                if ( parts.length ) {
                    curOption = options[ key ] = langx.mixin( {}, this.options[ key ] );
                    for ( i = 0; i < parts.length - 1; i++ ) {
                        curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
                        curOption = curOption[ parts[ i ] ];
                    }
                    key = parts.pop();
                    if ( arguments.length === 1 ) {
                        return curOption[ key ] === undefined ? null : curOption[ key ];
                    }
                    curOption[ key ] = value;
                } else {
                    if ( arguments.length === 1 ) {
                        return this.options[ key ] === undefined ? null : this.options[ key ];
                    }
                    options[ key ] = value;
                }
            }

            this._setOptions( options );

            return this;
        },

        _setOptions: function( options ) {
            var key;

            for ( key in options ) {
                this._setOption( key, options[ key ] );
            }

            return this;
        },

        _setOption: function( key, value ) {

            this.options[ key ] = value;

            return this;
        },

    });

    $.fn.plugin = function(name,options) {
        var args = slice.call( arguments, 1 ),
            self = this,
            returnValue = this;

        this.each(function(){
            returnValue = instantiate.apply(self,[this,name].concat(args));
        });
        return returnValue;
    };

    elmx.partial("plugin",function(name,options) {
        var args = slice.call( arguments, 1 );
        return instantiate.apply(this,[this,name].concat(args));
    }); 


    function plugins() {
        return plugins;
    }
     
    langx.mixin(plugins, {
        instantiate : instantiate,
    	
        Plugin : Plugin,

        register : register

    });

    return plugins;
});