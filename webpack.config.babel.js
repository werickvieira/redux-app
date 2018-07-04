import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const env = process.env.NODE_ENV || 'development';

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js?[hash]',
    path: path.resolve(__dirname, 'public'),
    publicPath: '',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]?[hash]',
              context: path.resolve(__dirname, 'app/src/'),
            },
          },
        ],
      },
      {
        test: /\.(pug)$/,
        use: [
          'html-loader', {
            loader: 'pug-html-loader',
            options: {
              data: {},
              pretty: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
  },

  plugins: [
    new ExtractTextPlugin('style.css?[hash]'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.pug'),
      minify: {
        removeComments: true,
      },
      inject: true,
    }),
  ],
  devtool: 'source-map',
  devServer: {
    noInfo: true,
    contentBase: path.resolve(__dirname, '/'),
    port: 8000,
    open: true,
  },
};

if (env === 'production') {
  config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
  ]);
}

export default config;
