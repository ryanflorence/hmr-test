/*
 * This file is simply replacing `webpack --inline --hot --content-base .`
 * When run from the CLI HMR works, but not when created with server :(
 */

import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import ClientDevConfig from './webpack.config'

// https://webpack.github.io/docs/webpack-dev-server.html#inline-mode-with-node-js-api
// --inline option
ClientDevConfig.entry.unshift('webpack-dev-server/client?http://localhost:8080/')

// https://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement-with-node-js-api
ClientDevConfig.entry.unshift('webpack/hot/dev-server')
ClientDevConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

const compiler = webpack(ClientDevConfig)

const server = new WebpackDevServer(compiler, {
  contentBase: '.', // `--content-base`
  // https://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement-with-node-js-api
  hot: true
})

// WHAT ELSE IS DIFFERENT?! D:

server.listen(8080, 'localhost', () => {
  console.log('Webpack dev server listening on port', 8080)
})

