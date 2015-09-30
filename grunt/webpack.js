var webpack = require('webpack');

var config = {
    dev: {
        entry: {
            app: './<%= paths.javascript %>/app.js'
        },
        output: {
            path: 'app/scripts/',
            filename: '[name].js'
        },
        module: {
            preLoaders: [{
                test: /\.js(x?)$/,
                loader: 'eslint',
                exclude: /node_modules/
            }],
            loaders: [{
                test: /\.js(x?)$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            }, {
                test: /\.ts(x?)$/,
                loader: 'babel!ts',
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }]
        },
        resolve: {
            extensions: ['', '.js', '.jsx', '.json', '.ts', '.tsx']
        },
        stats: {
            colors: false,
            modules: true,
            reasons: true
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin('common.js')
        ]
    }
};

if (process.env.NODE_ENV === 'development') {
    config.dev.devtool = "source-map";
    config.dev.plugins.push(
        new webpack.DefinePlugin({
            DEV: process.env.NODE_ENV === 'development'
        })
    );
}

if (process.env.NODE_ENV === 'production') {
    config.dev.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
