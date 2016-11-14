var webpack = require('webpack');

module.exports = {
	entry: './src/js/main.jsx',
  output: {
		path: './dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				query: {
					presets: ['react']
				}
			},
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
		]
	}
};