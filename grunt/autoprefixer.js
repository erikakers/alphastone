// autoprefixer task options
module.exports = {
	options: {
		browsers: ['last 10 version']
	},
	dist: {
		files: [{
			expand: true,
			cwd: 'app/styles/',
			src: '{,*/}*.css',
			dest: 'app/styles/'
		}]
	}
};
