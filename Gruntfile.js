// http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
'use strict';

module.exports = function(grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);
	grunt.template.addDelimiters('custom', '{%', '%}');

	function loadConfig(path) {
		var glob = require('glob');
		var object = {};
		var key;

		glob.sync('*', {cwd: path}).forEach(function(option) {
			key = option.replace(/\.js$/,'');
			object[key] = require(path + option);
		});

		return object;
	}

	var config = {
		pkg: grunt.file.readJSON('package.json'),
		bowerrc: grunt.file.readJSON('.bowerrc'),

		banner: '/*!\n' +
			' * <%= pkg.name %>-<%= pkg.version %>\n' +
			' * <%= grunt.template.today("yyyy-mm-dd") %>\n' +
			' */\n\n',

		config: {
			src: 'src',
			build: 'app',
			dist: 'dist',
			vendor: '<%= bowerrc.directory %>'
		}
	};

	grunt.util._.extend(config, loadConfig('./grunt/options/'));
	grunt.initConfig(config);
	grunt.loadTasks('grunt');
	grunt.loadNpmTasks('assemble');
};