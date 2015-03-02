module.exports = {
	options: {
		banner: '<%= banner %>'
	},
	loader: {
		src: [
			'<%= config.src %>/javascript/loader/**/*.js'
		],
		dest: '<%= config.src %>/scripts/loader.js'
	},
	vendor: {
		src: [
			// Any 3rd party libraries should be added here.
			// If added via bower use <%= config.vendor %> short cut that maps to the
			// bower created directory
		],
		dest: '<%= config.app %>/scripts/vendor/plugins.js'
	},
	mobile: {
		src: [
			// Any Mobile specific libraries should be added here.
			// If added via bower use <%= config.vendor %> short cut that maps to the
			// bower created directory
		],
		dest: '<%= config.app %>/mobile/vendor/mobile.js'
	},
	dev: {
		src: [
			'<%= config.src %>/javascript/namespace.js',
			'<%= config.src %>/javascript/constants.js',
			'<%= config.src %>/javascript/featuresLoader.js',
			'<%= config.src %>/javascript/classes/{,*/}*.js',
			'<%= config.src %>/javascript/helpers/{,*/}*.js',
			'<%= config.src %>/javascript/features/{,*/}*.js',
			'<%= config.src %>/javascript/models/{,*/}*.js',
			'<%= config.src %>/javascript/controllers/{,*/}*.js',
			'<%= config.src %>/javascript/views/{,*/}*.js',
			'<%= config.src %>/javascript/init.js'
		],
		dest: '<%= config.app %>/scripts/main.js'
	}
}
