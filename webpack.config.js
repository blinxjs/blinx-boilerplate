var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var enviroment = require('./enviroment.js');


module.exports = {
    entry: [
        "./app.js"
    ],
    debug: true,
    devtool: 'source-map',
    output: {
        publicPath: "minified/scripts/",
        path: __dirname + "/minified/scripts/",
        filename: "[name]-[hash].js",
        chunkname: "[name]-[hash].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, '../'),
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
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
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.html$/,
                loader: "handlebars-loader",
                query: {
                    helperDirs: [
                        __dirname + "/template-helpers"
                    ]
                }
            },
            {
                test: /\.handlebars/,
                loader: "handlebars-loader",
                query: {
                    helperDirs: [
                        __dirname + "/template-helpers"
                    ]
                }
            }
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname),
            path.resolve('./apps'),
            path.resolve('./custom'),
            path.resolve('./node_modules/blinx-extensions/lib'),
            path.resolve('./node_modules/blinx-modules/lib')
        ],
        alias: {
            root: enviroment.root,
            apps: enviroment.apps,
            custom: enviroment.custom,
            blinxExtensions: enviroment.blinxExtensions,
            blinxModules: enviroment.blinxModules,
            minified: enviroment.minified
        },
        extensions: ['', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Blinx Boilerplate',
            template: './index.ejs',
            inject: 'body',
            filename: '../../index.html'
        }),
        new CleanWebpackPlugin(['scripts'], {
            root: enviroment.minified,
            verbose: true,
            dry: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "shared",
            minChunks: Infinity
        })
    ]
};