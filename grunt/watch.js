// watch task options
module.exports = {
	gruntfile: {
		files: ['Gruntfile.js']
	},
	assemble: {
		files: ['<%= paths.html %>/{,*/}*.hbs'],
		tasks: ['assemble', 'prettify']
	},
	sass: {
		files: ['<%= paths.scss %>/**/**/**/*.scss'],
		tasks: ['sass', 'autoprefixer']
	},
	javascript: {
		files: ['<%= paths.javascript %>/**/**/*.js'],
		tasks: ['webpack']
	},
	mocha: {
		files: ['test/{,*/}*.js'],
		tasks: ['mocha']
	},
	livereload: {
		options: {
			livereload: '<%= connect.options.livereload %>'
		},
		files: [
			'<%= config.app %>/**/*.html',
			'<%= config.app %>/styles/{,*/}*.css',
			'{.tmp,<%= config.app %>}/scripts/{,*/}*.js',
			'<%= config.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
		]
	}
};
