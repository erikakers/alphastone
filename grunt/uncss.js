module.exports = {
	dist: {
		files: {
			'.temp/styles/tidy.css': [
				'<%= config.app %>/{,*/}*.html'
			]
		}
	}
};
