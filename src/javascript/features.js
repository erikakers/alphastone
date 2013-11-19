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

App.Features = {
    init: function() {
        var features = $('[data-features]').data('features');
        if(features) {
            featuresArray = features.split(' ');
            for(var i = 0, length = featuresArray.length; i < length; i++) {
                var func = featuresArray[i];
                if(this[func] && typeof this[func].init === 'function') {
                    this[func].init();
                }
            }
        }
    }
};
