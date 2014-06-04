module.exports = {
	dist: {
		options: {
			removeComments: true,
			collapseWhitespace: true
		},
		files: [{
			expand: true,
			cwd: '<%= config.temp %>',
			src: '*.html',
			dest: '<%= config.dist %>'
		}]
	}
};