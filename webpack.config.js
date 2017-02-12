require('dotenv').config();

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader', 'eslint-loader'],
    }],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
      KODI_ADDRESS: process.env.KODI_ADDRESS,
      KODI_PORT: process.env.KODI_PORT,
    }),
  ],
};
