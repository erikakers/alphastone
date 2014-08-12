module.exports = {
	options: {
		banner: '<%= banner %>'
	},
	loader {
		src: [
			'<%= config.src %>/javascript/loader/**/*.js'
		],
		dest: '<%= config.src %>/scripts/loader.js'
	},
	vendor: {
		src: [
			'<%= config.vendor %>/jquery/dist/jquery.js'
		],
		dest: '<%= config.app %>/scripts/vendor/plugins.js'
	},
	mobile: {
		src: [
			'<%= config.vendor %>/fastclick/lib/fastclick.js'
		],
		dest: '<%= config.app %>/mobile/vendor/mobile.js'
	},
	dev: {
		src: [
			'<%= config.src %>/javascript/classes/{,*/}*.js',
			'<%= config.src %>/javascript/helpers/{,*/}*.js',
			'<%= config.src %>/javascript/features/{,*/}*.js',
			'<%= config.src %>/javascript/models/{,*/}*.js',
			'<%= config.src %>/javascript/controllers/{,*/}*.js',
			'<%= config.src %>/javascript/views/{,*/}*.js'
		],
		dest: '<%= config.app %>/scripts/main.js'
	}
}
