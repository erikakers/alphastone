/**
 * Grunt plugin for beautifying HTML
 * https://www.npmjs.org/package/grunt-prettify
 * https://github.com/jonschlinkert/grunt-prettify
 */

module.exports = {
	options: {
		indent: 1,
		indent_char: "	",
		indent_scripts: "normal",
		wrap_line_length: 0,
		brace_style: "collapse",
		preserve_newlines: true,
		max_preserve_newlines: 1,
		unformatted: [
			"a",
			"code",
			"pre"
		]
	},
	all: {
		expand: true,
		cwd: '<%= config.app %>',
		ext: '.html',
		src: ['*.html'],
		dest: '<%= config.app %>'
	}
};