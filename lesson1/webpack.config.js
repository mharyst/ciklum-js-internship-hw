var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
    entry: __dirname + '/src/js/main.js',
    output: {
        path: __dirname + '/build/',
        filename: "[name].bundle.js"
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader'},
            {test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'},
            {test: /\.gif$/, include: /img/, loader: 'url-loader?limit=10000&mimetype=image/gif'},
            {test: /\.jpg$/, include: /img/, loader: 'url-loader?limit=10000&mimetype=image/jpg'},
            {test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png'},
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            {test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/]},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.html$/, loader: 'raw-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
};

module.exports = webpackConfig;
