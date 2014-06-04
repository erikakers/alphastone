module.exports = {
	dev: {
		options: {
			sourcemap: true,
			loadPath: [
				// Samples for adding other SCSS libraries
				'<%= config.vendor %>/foundation/scss/',
				'<%= config.vendor %>/bourbon/app/assets/stylesheets'
			]
		},
		files: [{
			expand: true,
			cwd: '<%= config.src %>/scss/',
			src: ['*.scss'],
			dest: '<%= config.app %>/styles/',
			ext: '.css'
		}]
	}
};