module.exports = {
	compile: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/javascript/jsx',
				src: ['**/*.jsx'],
				dest: '<%= config.src %>/javascript/views',
				ext: '.js'
			}
		]
	}
};