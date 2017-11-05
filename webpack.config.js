const path = require('path')
const webpack = require('webpack')

module.exports = (env) => {
  console.log('NODE_ENV:', env.NODE_ENV)

  return {
    context: path.resolve(__dirname, 'src'),
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      historyApiFallback: true,
      hot: true,
      port: 9000,
      stats: 'minimal'
    },
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
      ]
    },
    performance: {
      hints: process.env.NODE_ENV === 'production' ? 'warning' : false
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}
