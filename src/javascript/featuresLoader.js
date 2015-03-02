App.Features = {
	init: function() {
			var features = $('[data-features]'),
					featuresArray = [],
					$this = this;
		if (!features.length) return false;
		for (var i = 0, n = features.length; i < n; i++) {
				var $element = $(features[i]),
						func = $element.data('features');
						featuresArray = func.split(' ');
				_.forEach(featuresArray, function(func) {
					if ($this[func] && typeof $this[func].init === 'function') {
						$this[func].init($element);
					}
				});
		}
	}
};
