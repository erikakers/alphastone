module.exports = {
    dist: {
        'devFile': '<%= paths.vendor %>/modernizr/src/modernizr.js',
        'outputFile': 'app/scripts/vendor/modernizr.js',

        // Based on default settings on http://modernizr.com/download/
        'extra': {
            'shiv': true,
            'printshiv': false,
            'load': true,
            'mq': true,
            'cssclasses': true
        },

        // Based on default settings on http://modernizr.com/download/
        'extensibility': {
            'addtest': false,
            'prefixed': false,
            'teststyles': false,
            'testprops': false,
            'testallprops': false,
            'hasevents': false,
            'prefixes': false,
            'domprefixes': false
        },

        'uglify': false,

        // Define any tests you want to implicitly include.
        'tests': [],
        'parseFiles': true,
        'files': {
            'src': [
                '<%= paths.javascript %>/**/**/**/*.js',
                '<%= paths.scss %>/**/**/**/*.scss',
                '!<%= config.app %>/scripts/vendor/*'
            ]
        },

        // When parseFiles = true, matchCommunityTests = true will attempt to
        // match user-contributed tests.
        'matchCommunityTests': false,

        // Add custom tests to this folder
        'customTests': [
            '<%= paths.javascript %>/moderinzr/*.js'
        ]
    }
};
