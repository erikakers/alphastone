
// Initialize any features that aren't Initialzied through data-features method
App.init = function() {
    App.Helpers.AssetsLoader();
};

// Kick it all off on DOM Ready
$(function(){
    $(document).ready(function(){
        App.init();
    });
});