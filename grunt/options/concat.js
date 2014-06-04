module.exports = {
	options: {
		banner: '<%= banner %>'
	},
	head: {
		src: [
			// Any Shims
		],
		dest: '<%= config.app %>/scripts/vendor/head.js'
	},
	vendor: {
		src: [
			'<%= config.vendor %>/jquery/dist/jquery.js'
		],
		dest: '<%= config.app %>/scripts/vendor/plugins.js'
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