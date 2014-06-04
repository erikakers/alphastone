module.exports = {
	dist: {
		files: {
			'<%= config.temp %>/styles/tidy.css': [
				'<%= config.app %>/{,*/}*.html'
			]
		}
	}
};