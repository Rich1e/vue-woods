// dev.js with webpack
// by @Richie

import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConf from './base'
import HtmlwebpackPlugin from 'html-webpack-plugin'

const dev = merge(baseConf, {
  entry: ['./src/main/index.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  resolveLoader: {
    alias: {
      'scss-loader': 'sass-loader',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlwebpackPlugin({
      template: './src/main/index.html',
      filename: 'index.html',
      inject: true
    })
  ]
})

export default dev
