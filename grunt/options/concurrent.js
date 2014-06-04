module.exports = {
	server: [
		'sass:dev',
		'concat:dev',
	],
	dist: [
		'imagemin',
		'svgmin',
		'uglify'
	]
};