const path = require('path');
const glob = require('glob');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd? '/tbf03' : '', // Set assetPrefix for GitHub pages
  exportPathMap: () => {
    return {
      '/': { page: '/' },
    };
  },
};
