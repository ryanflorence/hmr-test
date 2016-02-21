/*eslint no-console: 0*/
import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import ClientDevConfig from './webpack.config'

// https://webpack.github.io/docs/webpack-dev-server.html#inline-mode-with-node-js-api
// replaces the --inline option passed to `start-cli` task
ClientDevConfig.entry.unshift('webpack-dev-server/client?http://localhost:8080/')

const compiler = webpack(ClientDevConfig)

const server = new WebpackDevServer(compiler, {
  hot: true, // replaces `--hot` option to cli
  contentBase: '.' // replaces `--content-base` option to cli
})

// WHAT ELSE IS DIFFERENT?! D:

server.listen(8080, 'localhost', () => {
  console.log('Webpack dev server listening on port', 8080)
})

