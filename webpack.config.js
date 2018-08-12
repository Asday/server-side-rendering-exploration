const defaults = require('lodash').defaults
const path = require('path')

const baseConfig = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'src/api/server_side_rendering/static/dist'),
  },
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

const renderConfig = defaults(
  {
    entry: { render: './src/client/render.js' },
    target: 'node',
  },
  baseConfig,
)

const bundleConfig = defaults(
  {
    entry: { bundle: './src/index.js' },
  },
  baseConfig,
)

debugger

module.exports = [ renderConfig, bundleConfig ]
