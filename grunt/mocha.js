module.exports = {
	all: {
		options: {
			run: true,
			urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
		}
	}
};