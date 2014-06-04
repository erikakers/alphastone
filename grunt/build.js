module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('build', [
		'clean:dist',
		'uncss',
		'processhtml',
		'cssmin',
		'htmlmin',
		'concurrent:dist',
		'clean:temp',
		'connect:dist'
	]);
};