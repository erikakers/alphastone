module.exports = {
	dist: {
		files: {
			src: [
				'<%= config.dist %>/scripts/{,*/}*.js',
				'<%= config.dist %>/styles/{,*/}*.css',
				'<%= config.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
				'<%= config.dist %>/styles/fonts/{,*/}*.*'
			]
		}
	}
};