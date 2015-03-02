module.exports = {
	server: [
		'assemble'
		'sass:dev',
		'concat:dev',
	],
	dist: [
		'imagemin',
		'svgmin',
		'uglify'
	]
};
