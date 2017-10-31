import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import wpconfig from './dev'
import opn from 'opn'

const port = process.env.PORT || 9998

wpconfig.entry.unshift('webpack-dev-server/client?http://0.0.0.0:' + port, 'webpack/hot/dev-server')

const proxy = [{
  path: '/**',
  target: 'http://example.com',
  host: 'example.com',
  changeOrigin: true
}]

new WebpackDevServer(webpack(wpconfig), {
  publicPath: wpconfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  inline: true,
  proxy: proxy
}).listen(port, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at PORT:' + port)
  opn('http://localhost:' + port)
})
