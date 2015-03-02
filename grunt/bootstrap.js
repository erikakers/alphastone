module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('bootstrap', [
			'modernizr',
			'copy:bootstrap',
			'concat:vendor'
	]);
};