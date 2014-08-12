window.Modernizr.load([
  {
    test: Modernizr.touch,
    yep: 'scripts/mobile.min.js',
    complete: function() {
      if( Modernizr.touch ) {
        window.addEventListener('load', function() {
            FastClick.attach(document.body);
        }, false);
      }
    }
  }
]);
