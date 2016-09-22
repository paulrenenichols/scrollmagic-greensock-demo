var generateWebpackConfig = require('./generateWebpackConfig');

module.exports = [
  generateWebpackConfig('BasicScroll', false),
  generateWebpackConfig('TextOverlay', false)
];
