var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './client/app.js',
	output: {
		path: './client/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
			    test: /\.js?$/,
			    exclude: /(node_modules|bower_components)/,
			    loader: 'babel'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			}
       	]
 },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(['dist'], {
			root: '/home/ubuntu/workspace/client/',
			verbose: true, 
			dry: false,
			exclude: ['shared.js']
		})
   ]
};