const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  context: __dirname,
  mode: "development",
	entry: path.resolve(__dirname, 'src', 'index.js'),
  devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		chunkFilename: "[name].js",
    publicPath: '/'
	},
  devServer: {
    host: "localhost",
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true
	},
	module: {
		rules: [
			{
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ['@babel/preset-env', {
                  "targets": "defaults"
                }],
                '@babel/preset-react'
              ],
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      },
      {
        test: /\.s?[c|a]ss$/i,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader'
      }
		],
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Components: path.resolve(__dirname, 'src', 'components'),
      Store: path.resolve(__dirname, 'src', 'store'),
      Routes: path.resolve(__dirname, 'src', 'routes'),
      Style: path.resolve(__dirname, 'src', 'style'),
      Utils: path.resolve(__dirname, 'src', 'utils'),
      Queries: path.resolve(__dirname, 'src', 'queries')
    }
  }
});
