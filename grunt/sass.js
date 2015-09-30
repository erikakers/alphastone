module.exports = {
    dev: {
        options: {
            includePaths: [
                // Samples for adding other SCSS libraries
                'src/packages/bourbon/app/assets/stylesheets/'
            ],
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: '<%= paths.scss %>/',
            src: ['**/**/*.scss'],
            dest: 'app/styles/',
            ext: '.css'
        }]
    }
};
