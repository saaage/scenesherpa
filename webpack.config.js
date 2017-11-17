const path = require('path')
const webpack = require('webpack')

module.exports = (env) => {

  if (env.API_KEY) {
    console.log('\x1b[36m%s\x1b[0m', '\nAPI key loaded\n')
  } else {
    console.log('\x1b[33m%s\x1b[0m: ', '\nWarning - No API_KEY declared\n')
  }

  return {
    context: path.resolve(__dirname, 'src'),
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      historyApiFallback: true,
      hot: true,
      host: '0.0.0.0',
      disableHostCheck: true,
      open: true,
      port: 9000,
      stats: 'minimal'
    },
    entry: ['babel-polyfill', 'index.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        {
          test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
          loader: 'file-loader?name=[name].[ext]'
        }
      ]
    },
    performance: {
      hints: process.env.NODE_ENV === 'production' ? 'warning' : false
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.API_KEY': JSON.stringify(env.API_KEY)
      })
    ],
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        'node_modules'
      ]
    }
  }
}
