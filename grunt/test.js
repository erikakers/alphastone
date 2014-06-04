module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('test', [
		'connect:test',
		'mocha'
	]);
};