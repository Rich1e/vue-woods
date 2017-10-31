// package.js with webpack
// by @Richie

import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TransferWebpackPlugin from 'transfer-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

webpack({
  entry: {
    index: './src/main/index.js',
    vendor: ['vue', 'vue-router']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'woods.[hash:8].js',
    library: 'woods',
    libraryTarget: 'umd'
  },
  devtool: '#source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: {
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }),
            sass: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader',
              fallback: 'vue-style-loader'
            }),
            scss: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      }
    }, {
      test: /\.(sass|scss)$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader!sass-loader'],
        fallback: 'style-loader'
      })
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]'
        }
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"site"'
      }
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve('./'),
      verbose: true,
      dry: false
    }),
    new TransferWebpackPlugin(
      [{from: 'src/assets/custom'}],
      path.join(__dirname, '../images/')
    ),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/main/index.html',
      inject: true
    }),
    // 抽离公共js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[hash:8].js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      vue: {
        // use custom postcss plugins
        postcss: [require('autoprefixer')()]
      }
    }),
    new ExtractTextPlugin('style/woods.[contenthash:8].css')
  ]
}, () => {
  console.log('## package 代码编译完成')
})
