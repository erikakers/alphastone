// Initialize any features that aren't Initialzied through data-features method
App.init = function() {
    App.Helpers.getWidth();
    App.Helpers.resizeThrottle.init();
    App.Helpers.checkWidthConditions.init();
    App.Features.init();
};

// Kick it all off on DOM Ready
$(function(){
	App.init();
});
