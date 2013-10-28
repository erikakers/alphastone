
App.features.menuItems = (function(menuItems){
    var els = {},

        setEls = function() {
            // Set Elements for the function here
            // Cache all selectors as variables els.menu = $('.menu');
        },

        someFunctions = function() {
            // Make something happen I mean that's the point of all of this
        };  // The Last funciton before the init function has to end with a 
            // semi-colon otherwise the init function will cause an error

    menuItems.init = function() {
        setEls();
        someFunctions(); // Make whatever do the thing
    }

    return menuItems;

}(App.features.menuItems || {}))