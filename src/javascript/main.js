// THIS FILE IS COMPILED VIA GRUNT. ANY CHANGES MADED TO MAIN.JS WITHIN THE 
// HTDOCS FOLDER WILL GET OVERWRITTEN, SO DON'T DO THAT. 

// Complete all of your development using a file with your name, ie. (name.js). 
// When what you are working on is completed it will be merged into 
// the main.js master file. 

// Global Name Space

window.App = window.App || {},
App.helpers = App.helpers || {},
App.features = App.features || {};


/**
 *
 * Helpers: Load Conditional Assets
 * This helper will leverage Modernizr.load - Yepnope to load
 * assets based on certain conditions - in our case, mobile/touch.
 *
 **/
App.helpers.AssetsLoader = function) {
    window.Modernizr.load([
        {
            test: Modernizr.touch,
            yep: 'script/touch.js',
            complete: function() {
                if ( Modernizr.touch ) {
                    window.addEventListener('load', function(){
                        FastClick.attach(document.body);
                    }, false);
                }
            }
        },
        {
            test: Modernizr.input.placeholder,
            nope: 'path/to/polyfill.js'
        }
    ]);
};

/**
*
* Features 'House'
* This is the namespace in which all of our features will live under.
* This are initialized by the data attribute features. We let the DOM tell
* us which functions to init.
*
* init: Initialize the features by iterating over all data-feature attributes present
* in the dom, then checking for that particular feature by name under the App.features
* object. If found, it checks for the existence of a .init function and calls it.
*
* Ex: <div data-features="timeline otherFeature">
*
**/

App.features = {
    init: function() {
        var features = $('[data-features]');
        if ( !features.length ) return false;
        for ( var i = 0; i < features.length; i++ ) {
            var func = $(features[i]).data('features');
            if ( this[func] && typeof this[func].init === 'function' ) {
                this[func].init();
            }
        }
    }
};
