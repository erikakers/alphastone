var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    dev: {
        entry: [
            "./<%= paths.javascript %>/app.js"
        ],
        output: {
            path: "<%= paths.build.scripts %>/",
            filename: "[name].bundle.js",
        },
        module: {
            loaders: [
                { test: /\.js$/, loader: 'babel', exclude: /node_modules/},
                { test: /\.html$/, loader: 'raw', exclude: /node_modules/}
            ]
        },
        stats: {
            colors: false,
            modules: true,
            reasons: true
        },
        plugins: [commonsPlugin]
    }
};