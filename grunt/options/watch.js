// watch task options
module.exports = {
	gruntfile: {
		files: ['Gruntfile.js']
	},
	assemble: {
		files: ['<%= config.src %>/html/{,*/}*.hbs'],
		tasks: ['assemble', 'prettify']
	},
	sass: {
		files: ['<%= config.src %>/scss/{,*/}*.{scss,sass}'],
		tasks: ['sass', 'autoprefixer']
	},
	javascript: {
		files: ['<%= config.src %>/javascript/{,*/}*.js'],
		tasks: ['newer:concat:dev', 'autopolyfiller', 'newer:jshint', 'react']
	},
	react: {
		files: ['<%= config.src %>/javascript/jsx/{,*/}*.jsx'],
		tasks: ['newer:react']
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
