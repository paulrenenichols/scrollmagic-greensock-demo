var path                = require('path');
var webpack             = require('webpack');
var HtmlWebpackPlugin   = require('html-webpack-plugin');

function generateEntry(name, development = true) {
  if (development) {
    return {
      [`${name}`]: [
        'webpack-hot-middleware/client',
        `./src/${name}/index.js`
      ]
    };
  }
  else {
    return {
      [`${name}`]: [
        `./src/${name}/index.js`
      ]
    };
  }
}

function generateWebpackConfig(name, development = true) {

  const devtool = 'inline-source-map';
  const entry   = generateEntry(name, development);
  const output  = {
    path: path.join(__dirname),
    filename: '[name].[hash].js',
    publicPath: ''
  };
  const module  = {
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
      include: path.join(__dirname, 'src', `${name}`),
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
  };
  const resolve = {
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
  };

  const plugins = [
    new HtmlWebpackPlugin({
      template: `src/${name}/index.ejs`,
      filename: `${name}/index.html`
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
      __PRODUCTION__: false
    })
  ];

  return {
    devtool,
    entry,
    output,
    module,
    resolve,
    plugins
  };
}

module.exports = generateWebpackConfig;
