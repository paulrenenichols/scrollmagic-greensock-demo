var generateWebpackConfig = require('./generateWebpackConfig');

module.exports = [
  generateWebpackConfig('BasicScroll', true),
  generateWebpackConfig('TextOverlay', true)
];
