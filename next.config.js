const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');
require('dotenv').config();

module.exports = withPlugins([withCSS], {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });
    return config;
  },
});
