const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/feCharts.ts',
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
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'feCharts.js',
    path: path.resolve(__dirname, 'dist')
  }
};