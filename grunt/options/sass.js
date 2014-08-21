module.exports = {
	dev: {
		options: {
			loadPath: [
				// Samples for adding other SCSS libraries
				'<%= config.vendor %>/foundation/scss/',
				'<%= config.vendor %>/bourbon/dist/'
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
