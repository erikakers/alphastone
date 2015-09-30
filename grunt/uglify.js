module.exports = {
    build: {
        files: {
            // List any Javascript file that need to be minified
            'app/scripts/app.min.js': [
                'app/scripts/app.js'
            ],
            'app/scripts/common.min.js': [
                'app/scripts/common.js'
            ]
        }
    }
};
