const path = require('path');

const absolutePath = (relativePath) => path.join(__dirname, relativePath);

module.exports = [
	{
		entry: {
			demo: absolutePath('./lib/demo/demo.js')
		},
		output: {
			filename: '[name].js',
			path: absolutePath('./lib/demo/dist')
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		module: {
			loaders: [{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}]
		}
	}
];