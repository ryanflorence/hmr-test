var webpack = require('webpack')
var path =  require('path')

module.exports = {

  entry: [
    path.join(__dirname, 'modules', 'client.js')
  ],

  output: {
    path: path.join(__dirname, '.build'),
    filename: '[name].js',
    publicPath: '/'
  },


  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.json$/,
        loader: 'json-loader'
      },
      { test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        loader: 'url-loader?limit=10000'
      },
      { test: /\.(gif|jpe?g|png)$/,
        loader: 'url-loader?limit=10000'
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]

}

