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
                tasks: ['concat:dev', 'react']
            },
            react: {
                files: ['<%= base.src %>/javascript/jsx/{,*/}*.jsx'],
                tasks: ['react']
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
                        fontsDir: '<%= base.build %>/css/fonts',
                        importPath: '<%= base.src %>/packages/foundation/scss',
                        imagesDir: '<%= base.build %>/images',
                        javascriptsDir: '<%= base.build %>/js'
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
                    // TODO : This task really needs some love.
                    '<%= base.build %>/js/main.js' : '<%= base.src %>/coffee/main.coffee'
                }
            }
        },

        react: {
            compile: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= base.src %>/javascript/jsx',
                        src: ['**/*.jsx'],
                        dest: '<%= base.src %>/javascript/views',
                        ext: '.js'
                    }
                ]
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
                            '<%= base.src %>/packages/lodash/dist/lodash.js',
                            '<%= base.src %>/packages/backbone/backbone.js',
                            '<%= base.src %>/packages/react/react.js'
                        ],
                        dest: '<%= base.build %>/js/vendor/plugins.js'
                    },
                    {
                        src: [
                            '<%= base.src %>/packages/modernizr/modernizr.js',
                            '<%= base.src %>/packages/yepnope/yepnope.js'
                        ],
                        dest: '<%= base.build %>/js/vendor/header.js'
                    }
                ]
            },
            dev: {
                files: [
                    {
                        src: [
                            '<%= base.src %>/javascript/namespace.js',
                            '<%= base.src %>/javascript/assetsLoader.js',
                            '<%= base.src %>/javascript/features.js',
                            '<%= base.src %>/javascript/classes/{,*/}*.js',
                            '<%= base.src %>/javascript/helpers/{,*/}*.js',
                            '<%= base.src %>/javascript/features/{,*/}*.js',
                            '<%= base.src %>/javascript/models/{,*/}*.js',
                            '<%= base.src %>/javascript/controllers/{,*/}*.js',
                            '<%= base.src %>/javascript/views/{,*/}*.js',
                            '<%= base.src %>/javascript/init.js'
                        ],
                        dest: '<%= base.build %>/js/main.js'
                    }
                ]
            }
        },

        copy: {
            setup: {
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
                    // List any files that need to be copied in the following pattern
                    // ie. files that are managed with Bower but need to be moved to the
                    // htdocs directory
                    {
                       // src: '<%= base.src %>/packages/bootstrap/dist/css/bootstrap.css',
                        //dest: '<%= base.build %>/css/bootstrap.css'
                    }
                ]
            },
            dist: {
                files: [
                    {
                        src: '<%= base.build %>/.htaccess',
                        dest: '<%= base.dist %>/.htaccess'
                    },
                    {
                        src: '<%= base.build %>/robots.txt',
                        dest: '<%= base.dist %>/robots.txt'
                    }
                ]
            }
        },

        // Start Build Tasks
        clean: {
            build: {
                src: [
                    "<%= base.dist %>"
                ]
            }
        },

        uncss: {
            dist: {
                files: {
                    '<%= base.build %>/css/tidy.css': [
                        '<%= base.build %>/{,*/}*.html'
                    ]
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= base.build %>',
                    src: '*.html',
                    dest: '<%= base.dist %>'
                }]
            }
        },

        cssmin: {
            dist: {
                files: {
                    '<%= base.dist %>/css/app.css': [
                        '<%= base.build %>/css/tidy.css'
                    ]
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    // List any Javascript file that need to be minified
                    '<%= base.dist %>/js/vendor/plugins.js': [
                        '<%= base.build %>/js/vendor/plugins.js'
                    ],
                    '<%= base.dist %>/js/vender/header.js': [
                        '<%= base.build %>js/vendor/header.js'
                    ],
                    '<%= base.dist %>/js/main.js': [
                        '<%= base.build %>/js/main.js'
                    ]
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
    grunt.registerTask('setup', ['copy:setup', 'dev', 'server']);
    grunt.registerTask('dev', ['concat:vendor', 'concat:dev', 'copy:dev']);
    grunt.registerTask('server', ['connect:livereload', 'open', 'watch']);
    grunt.registerTask('compile', ['compass', 'coffee', 'react']);
    grunt.registerTask('build', ['clean', 'uncss', 'htmlmin', 'uglify', 'cssmin', 'imagemin', 'svgmin', 'copy:dist']);
};
