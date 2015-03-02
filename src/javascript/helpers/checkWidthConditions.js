App.Helpers.checkWidthConditions = (function(conds) {

	conds.init = function() {
		$.subscribe('resize', function(){
			console.log('resize event fired');
			App.Helpers.getWidth();

			// if mobile width, mobile media query or mobile ua returns true, broadcast a resize:mobile event
			if ( App.Devices.mobile || App.Devices.mobileMQ || App.Devices.mobileCheck ) $.publish('resize:mobile');

			// if we are in the tablet realm, lets publish that
      if ( App.Devices.tablet || App.Devices.tabletMQ ) $.publish('resize:tablet');
		});
	};

	return conds;
}(App.Helpers.checkWidthConditions || {}));
