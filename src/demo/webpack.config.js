const path = require('path');

module.exports = {
  mode: 'production',
  entry: "./src/index.tsx", // bundle's entry point
  output: {
    path: path.resolve(__dirname, '../../demo'), // output directory
    filename: "demo.bundle.js" // name of the generated bundle
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
};
