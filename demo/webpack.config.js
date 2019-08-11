const path = require('path');

module.exports = {
  mode: 'production',
  entry: "./src/demo.tsx", // bundle's entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // output directory
    filename: "demo.bundle.js" // name of the generated bundle
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
};