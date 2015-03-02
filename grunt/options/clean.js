module.exports = {
	dist: {
		files: [{
			dot: true,
			src: [
				'<%= config.dist %>/*',
				'!<%= config.dist %>/.git*'
			]
		}]
	},
	temp: {
		files: [{
			dot: true,
			src: '<%= config.temp %>'
		}]
	}
};