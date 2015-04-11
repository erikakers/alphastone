module.exports = {
	bsFiles: {
		src: [
			'app/styles/*.css',
			'app/scripts/*.js',
			'app/*.html'
		]
	},
	options: {
		watchTask: true,
		port: '9000',
		server: "./app"
	}
};
