'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var pathConfig = {
        src: 'src',
        build: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        base: pathConfig,
        // Grunt Server Tasks
        watch: {
            sass: {
                files: ['<%= base.src %>/sass/{,*/}*.sass'],
                tasks: 'compass'
            },
            coffee: {
                files: ['<%= base.src %>/coffee/{,*/}*.coffee'],
                tasks: 'coffee'
            },
            javascript: {
                files: ['<%= base.src %>/javascript/{,*/}*.js'],
                tasks: 'concat:dev'
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= base.build %>/*.html',
                    '<%= base.build %>/css/{,*/}*.css',
                    '<%= base.build %>/js/{,*/}*.js',
                    '<%= base.build %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, 'app'),
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, base.dist)
                        ];
                    }
                }
            }
        },

        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },

        // Start Compile Tasks
        compass: {
            dev: {
                options: {
                        // Only change if you are adjusting the directories within the src folder
                        sassDir: '<%= base.src %>/sass',
                        cssDir: '<%= base.build %>/css',
                        environment: 'development',
                        imagesDir: '<%= base.build %>/images',
                        javascriptsDir: '<%= base.build %>/js',
                        fontsDir: '<%= base.build %>/fonts'
                }
            }
        },

        coffee: {
            compile: {
                options: {
                    bare: true
                },
                files: {
                    // List out any Coffeescript files that need to be compiled
                    // in the following pattern
                    '<%= base.build %>/js/main.js' : '<%= base.src %>/coffee/main.coffee'
                }
            }
        },

        // Start Dev Tasks
        concat: {
            vendor: {
                files: [
                    // List any additional files that will be concatted into a single file
                    // Follow the same object pattern if a secondary concatted file is needed
                    // ie. touch event scripts
                    {
                        src: [
                            '<%= base.src %>/packages/jquery/jquery.js',
                            '<%= base.src %>/packages/bootstrap/dist/js/bootstrap.js',
                        ],
                        dest: '<%= base.build %>/js/vendor/plugins.js'
                    }
                ]
            },
            dev: {
                files: [
                    {
                        src: [
                            '<%= base.src %>/javascript/main.js',
                            '<%= base.src %>/javascript/functions.js',
                            '<%= base.src %>/javascript/modules/sample-module.js',
                            '<%= base.src %>/javascript/init.js'
                        ],
                        dest: '<%= base.build %>/js/main.js'
                    }
                ]
            }
        },

        copy: {
            dev: {
                files: [
                    // List any files that need to be copied in the following pattern
                    // ie. files that are managed with Bower but need to be moved to the
                    // htdocs directory
                    {
                        src: '<%= base.src %>/packages/bootstrap/dist/css/bootstrap.css',
                        dest: '<%= base.build %>/css/bootstrap.css'
                    },
                    {
                        src: '<%= base.src %>/javascript/vendor/modernizr.js',
                        dest: '<%= base.build %>/js/vendor/modernizr.js'
                    }
                ]
            }
        },

        // Start Build Tasks
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    // Must list all HTML files that need to be minified in
                    // the following pattern
                    '<%= base.dist %>/index.html': '<%= base.build %>/index.html'
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    // List any CSS files outside of site.css that need to be
                    // combined into one file
                    '<%= base.dist %>/css/site.css': [
                        '<%= base.build %>/css/site.css'
                        //,'<%= base.build %>/css/other.css'
                    ],
                    '<%= base.dist %>/css/bootstrap.css': '<%= base.build %>/css/bootstrap.css'
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    // List any Javascript file that need to be minified
                    '<%= base.dist %>/js/vendor/compiled.js': [
                        '<%= base.build %>/js/vendor/compiled.js'
                    ],
                    '<%= base.dist %>/js/main.js': [
                        '<%= base.build %>/js/main.js'
                        //,'<%= base.build/js/other.js'
                    ],
                    '<%= base.dist %>/js/vendor/modernizr.js': '<%= base.build %>/js/vendor/modernizr.js'
                }
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= base.build %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= base.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= base.build %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= base.dist %>/images'
                }]
            }
        }

    });

    //Grunt Tasks
    grunt.registerTask('default', ['dev', 'server']);

    grunt.registerTask('server', ['connect:livereload', 'open', 'watch']);
    grunt.registerTask('compile', ['compass', 'coffee']);
    grunt.registerTask('dev', ['concat', 'copy:dev']);
    grunt.registerTask('build', ['htmlmin', 'uglify', 'cssmin', 'imagemin', 'svgmin']);
};
