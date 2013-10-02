// Sometimes after the window is resized we need to rerun some javascript
// functions for whatever reason. This function will wait until the resize is
// completed and then refire any functions that are defined in the
// App.Helpers.responsiveConditions function.
// This requires Lo-Dash or Underscore to work.

// THIS IS NOT INCLUDED IN THE GRUNTFILE BY DEFAULT

App.Helpers.resizeThrottle = (function(throttle) {

    var plug = function() {
        (function($, sr) {
            var debouce = function (func, threshold, execAsap) {
                var timeout;

                return function debounced() {
                    var obj = this,
                        args = arguments;
                    function delayed() {
                        if ( !execAsap ) func.apply(obj, args);
                        timeout = null;
                    }

                    if ( timeout ) {
                        clearTimeout(timeout);
                    } else if ( execAsap ) {
                        func.apply(obj, args);
                    }
                    timeout = setTimeout(delayed, threshold || 100);
                };
            };
            jQuery.fn[sr] = function(fn) { return fn ? this.bind('resize', debouce(fn)) : this.trigger(sr); };
        })(jQuery, 'debouceresize');
    };

    throttle.init = function() {
        plug();

        var throttledFuncs = _.throttle(function() {
            if ( App.debug ) log('throttled resize event');
            _.once( App.Helpers.responsiveConditions() );
        }, 1500);

        $(window).debouceresize(function() {
            throttledFuncs();
        });
    };
    return throttle;
}(App.Helpers.resizeThrottle || {}));

// Call what functions need to be refired when the window is resized here, just
// like the App.init() method.

App.Helpers.responsiveConditions = (function(conds) {

    return conds = function() {
        // Functions that need to be refired
    };

}(App.Helpers.checkWidthConditions || {}));