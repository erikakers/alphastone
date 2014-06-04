module.exports = {
	my_target: {
		files: {
			// List any Javascript file that need to be minified
			'<%= config.dist %>/scripts/plugins.min.js': [
				'<%= config.app %>/scripts/vendor/plugins.js'
			],
			'<%= config.dist %>/scripts/head.min.js': [
				'<%= config.app %>/scripts/vendor/modernizr.js',
				'<%= config.app %>/scripts/vendor/head.js'
			],
			'<%= config.dist %>/scripts/main.min.js': [
				'<%= config.app %>/scripts/main.js'
			]
		}
	}
};