module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('serve', [
		'concurrent:server',
		'autoprefixer',
		'connect:livereload',
		'watch'
	]);

};