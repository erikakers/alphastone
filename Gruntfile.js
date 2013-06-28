module.exports = function(grunt) {

    var pathConfig = {
        src: 'src',
        build: 'htdocs',
        dist: 'dist'
    };
    
    grunt.initConfig({
        base: pathConfig,
        watch: {
            sass: {
                files: ['<%= base.src %>/sass/{,*/}*.sass'],
                tasks: 'compass'
            },
            coffee: {
                files: ['<%= base.src %>/coffee/{,*/}*.coffee'],
                tasks: 'coffee'
            }
        },
        compass: {                  
            dev: {                    
                options: {
                        sassDir: '<%= base.src %>/sass',
                        cssDir: '<%= base.build %>/css',
                        environment: 'development',
                        imagesDir: '<%= base.build %>/images',
                        javascriptsDir: '<%= base.build %>/scripts',
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
                    '<%= base.build %>/js/main.js' : '<%= base.src %>/coffee/main.coffee'
                }
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
