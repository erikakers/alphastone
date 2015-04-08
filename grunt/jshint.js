module.exports = {
	options: {
		jshintrc: '.jshintrc',
		reporter: require('jshint-stylish')
	},
	all: [
		'Gruntfile.js',
		'<%= paths.javascript %>/**/**/**/*.js',
		'!<%= config.app %>/scripts/vendor/*',
		'test/spec/{,*/}*.js'
	]
};