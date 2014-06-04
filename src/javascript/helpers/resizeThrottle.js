App.Helpers.resizeThrottle = (function(throttle) {
  throttle.init = function() {
    var updateLayout = _.debounce(function(e) {
      console.log('Throttled resize event. Broadcasting...');
      $.publish('resize');
    }, 500);
    if (window.addEventListener) {
      window.addEventListener("resize", updateLayout, false);
    }
  };

  return throttle;
}(App.Helpers.resizeThrottle || {}));
