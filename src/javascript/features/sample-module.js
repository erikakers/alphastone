App.Features.customFeature = (function(feature){
    var els = {},

        setEls = function() {
            /* Cache any selectors that are needed */
            /* els.element = $('.element') if using jQuery*/
        },

        method = function() {
            /* Method/function to make magic happen. Add as many of this as need
            *  and keep the funtions short and reused able.
            */
        };

    feature.init = function() {
        /* Call functions to fire when the feature on init. */
        setEls();
    }

    return feature;
}(App.Features.customFeature || {}));