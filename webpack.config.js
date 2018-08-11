const path = require('path')

module.exports = {
  entry: './src/client/render.js',
  output: {
    filename: 'render.js',
    path: path.resolve(__dirname, 'build'),
  },
  target: 'node',
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src/client'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              require.resolve('babel-preset-react-app'),
            ],
          },
        },
      },
    ],
  }
}
