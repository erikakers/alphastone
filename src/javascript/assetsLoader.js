/**
 *
 * Helpers: Load Conditional Assets
 * This helper will leverage Modernizr.load - Yepnope to load
 * assets based on certain conditions - in our case, mobile/touch.
 *
 **/

App.Helpers.AssetsLoader = function() {
    window.yepnope([
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
