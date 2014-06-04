module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('handoff', [
		'clean:dist',
		'uncss',
		'processhtml',
		'cssmin',
		'concurrent:dist',
		'clean:temp',
		'connect:dist'
	]);
};