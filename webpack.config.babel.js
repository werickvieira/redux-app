import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import configs from './app/config.js';

const env = process.env.NODE_ENV || 'development';

const { s3URL, qaURL } = configs;

const config = {
	entry: './app/src/js/index.js', 
	output: {
		filename: 'bundle.js?[hash]',
		path: path.resolve(__dirname, 'public'),
		publicPath: (env === "production" ? s3URL : env === "qa" ? qaURL : '')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader'//,
					//options: { presets: ['env'] }
				}]
			},    
			{
				test: /\.(sass|scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]?[hash]',
							//publicPath: '/',
							context: path.resolve(__dirname, "app/src/")
						}//,
						//loader: 'image-webpack-loader'
					},
				]
			},
			{
				test: /\.pug$/,
				use: 'pug-loader',
			},
			{
			  test: /\.(html)$/,
			  use: {
			    loader: 'html-loader'
			  }
			},
		]
	},

	plugins: [
		new ExtractTextPlugin('style.css?[hash]'),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './app/src/views/index.pug'),
			minify: {
				removeComments: true
			},
			inject: 'body'
		})
	],
	
	devServer: {
		//historyApiFallback: true,
		noInfo: true,
		contentBase: path.resolve(__dirname, '/'),
		// compress: true,
		port: 8000,
		//inline: true
	}
};

export default config;

