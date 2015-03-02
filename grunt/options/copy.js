// copy task options
// For files that need to be copied should be set up on a per project basis.
//
module.exports = {
	bootstrap: {
		files: [
			{
				src: '<%= base.src %>/packages/html5-boilerplate/robots.txt',
				dest: '<%=  base.build %>/robots.txt'
			},
			{
				src: '<%= base.src %>/packages/html5-boilerplate/.htaccess',
				dest: '<%= base.build %>/.htaccess'
			}
		]
	},
	dev: {
		files: [

		]
	},
	dist: {
		files: [

		]
	}
};