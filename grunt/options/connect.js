// connect task options
module.exports = {
	options: {
		port: 9000,
		open: true,
		livereload: 35729,
		// Change this to '0.0.0.0' to access the server from outside
		hostname: 'localhost'
	},
	livereload: {
		options: {
			middleware: function(connect) {
				return [
					connect.static('app')
				];
			}
		}
	},
	test: {
		options: {
			open: false,
			port: 9001,
			middleware: function(connect) {
				return [
					connect.static('test'),
					connect.static('app'),
					connect().use('/bower_components', connect.static('./bower_components'))
				];
			}
		}
	},
	dist: {
		options: {
			open: true,
			port: 9080,
			base: '<%= config.dist %>',
			keepalive: true
		}
	}
};