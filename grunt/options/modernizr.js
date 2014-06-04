module.exports = {
	dev:{
		devFile: '<%= config.vendor %>/modernizr/modernizr.js',
		outputFile: '<%= config.app %>/scripts/vendor/modernizr.js',
		extra: {
			'shiv': true,
			'load': true,
			'mq': true,
			'cssclasses': true
		},
		parseFiles: true,
		files: {
			src: [
				'<%= config.app %>/scripts/{,*/}*.js',
				'<%= config.app %>/styles/{,*/}*.css',
				'!<%= config.app %>/scripts/vendor/*'
			]
		},
		uglify: false
	}
};