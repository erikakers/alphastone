module.exports = {
	dev: {
		options: {
			loadPath: [
				// Samples for adding other SCSS libraries
				''
			]
		},
		files: [{
			expand: true,
			cwd: '<%= paths.scss %>/',
			src: ['**/**/*.scss'],
			dest: '<%= config.app %>/styles/',
			ext: '.css'
		}]
	}
};
