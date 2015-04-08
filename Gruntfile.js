module.exports = function(grunt) {
    "use strict";

    var project = {
        config: {
            src: 'src',
            build: 'app',
            dist: 'dist',
            temp: '.temp',
            vendor: grunt.file.readJSON('.bowerrc').directory
        },
        paths: {
            javascript: 'src/javascript',
            scss: 'src/scss',
            html: 'src/html',
            vendor: grunt.file.readJSON('.bowerrc').directory,
            build : {
                script: 'app/scripts',
                styles: 'app/styles'
            }
        }
    };

    require('load-grunt-config')(grunt, {
        data: project,
        jitGrunt: {
            staticMappings: {
            }
        }
    });

    require('time-grunt')(grunt);
};
