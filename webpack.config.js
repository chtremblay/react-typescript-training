const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

module.exports = {
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  entry: ['./src/js/index.tsx', './src/css/style.css'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader' },
          'postcss-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  serve: {
    add: (app) => {
      app.use(convert(history()));
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: 'body',
    }),
  ]
};
