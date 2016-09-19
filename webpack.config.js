var path              = require('path');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './DemoApp/index.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    externals: {
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          test: /\.(less|css)$/,
          loaders: ['style', 'css', 'less'],
          include: path.join(__dirname, 'DemoApp'),
          exclude: /node_modules/
        },
        {
          test: /\.(png)$/,
          loader: 'url?limit=100000&mimetype=image/png'
        },
        {
          test: /\.(jpg|gif|svg)$/,
          loader: 'file?name=images/[name].[ext]'
        }]
    },
    resolve: {
      root: path.resolve(__dirname),
      alias: {
          'TweenLite': path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
          'TweenMax': path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
          'TimelineLite': path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
          'TimelineMax': path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
          'ScrollMagic': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
          'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
          'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
      }
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'DemoApp/index.ejs'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          __DEV__: true,
          __PRODUCTION__: false
        })
    ]
};
