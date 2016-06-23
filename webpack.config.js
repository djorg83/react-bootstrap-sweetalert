var path = require('path');

module.exports = [
	{
		entry: {
			demo: './lib/demo/demo.js'
		},
		output: {
			filename: '[name].js',
			path: path.join(__dirname, '/lib/demo/dist')
		},
		resolve: {
			extensions: ['', '.js', '.jsx']
		},
		module: {
			loaders: [{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2016', 'stage-1']
				}
			}]
		}
	}
];