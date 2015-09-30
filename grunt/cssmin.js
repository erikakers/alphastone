module.exports = {
    dist: {
        files: {
            '<%= config.dist %>/styles/app.min.css': [
                '<%= config.temp %>/styles/tidy.css'
            ]
        }
    }
};
