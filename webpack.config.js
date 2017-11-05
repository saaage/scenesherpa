const path = require('path')

module.exports = (env) => {
  console.log('NODE_ENV:', env.NODE_ENV)

  return {
    context: path.resolve(__dirname, 'src'),
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
    stats: 'minimal',
    watch: true,
    watchOptions: {
      ignored: './node_modules'
    }
  }
}
