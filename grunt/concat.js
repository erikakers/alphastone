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
	mobile: {
		src: [
			// Any Mobile specific libraries should be added here.
			// If added via bower use <%= config.vendor %> short cut that maps to the
			// bower created directory
		],
		dest: '<%= config.app %>/mobile/vendor/mobile.js'
	}
}
