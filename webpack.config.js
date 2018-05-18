const path = require('path');
const webpack = require('webpack');
const dotEnv = require('dotenv');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AutoPrefixer = require('autoprefixer');
const parseVariables = dotEnv.config().parsed;
const environmentVariables = {};

// eslint-disable-next-line
for (const envVar in parseVariables) {
  environmentVariables[envVar] = JSON.stringify(parseVariables[envVar]);
}

const webpackConfig = {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, './src/index'),
  ],
  target: 'web',
  output: {
    path: path.join(__dirname, './dist/'), // Note: Physical files are only output by the production build task `npm run build`.
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './src'),
    overlay: true,
    open: true,
    watchContentBase: true,
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader',
        ],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                AutoPrefixer,
              ],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        ...environmentVariables,
        NODE_ENV: JSON.stringify('production'),
        CLUSTER_URL: JSON.stringify(process.env.CLUSTER_URL),
        BASIC_AUTH: JSON.stringify(process.env.BASIC_AUTH),
      },
    }),
  ],
};

module.exports = webpackConfig;
