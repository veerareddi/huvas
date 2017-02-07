var webpack = require('webpack');

module.exports = {
	entry: './client/app.js',
	output: {
		path: './client',
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
		new webpack.HotModuleReplacementPlugin()
   ]
};