// release.js with webpack
// by @Richie

import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConf from './base'
import CleanWebpackPlugin from 'clean-webpack-plugin'

webpack(merge(baseConf, {
  entry: './src/components/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'woods.min.js',
    library: 'Woods',
    libraryTarget: 'umd'
  },
  externals: {
    'vue': 'vue'
  },
  devtool: '#cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve('./'),
      verbose: true,
      dry: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  }
}), () => {
  console.log('## release 代码编译完成')
})
