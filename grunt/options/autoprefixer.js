// autoprefixer task options
module.exports = {
	options: {
		browsers: ['last 10 version']
	},
	dist: {
		files: [{
			expand: true,
			cwd: '<%= config.app %>/styles/',
			src: '{,*/}*.css',
			dest: '<%= config.app %>/styles/'
		}]
	}
};