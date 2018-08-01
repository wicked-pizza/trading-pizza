const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const tmpl = require('lodash.template')
const dateFns = require('date-fns')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const pkg = require('./package')
const stamp = () => dateFns.format(new Date(), 'YYYY/MM/DD HH:mm')
const banner = () => fs.readFileSync('./build/BANNER', 'utf8')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: (isProd ? 'production' : 'development'),
  devtool: '#source-map',
  entry: {
    main: './src/trading-pizza/assets/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './trading-pizza/assets/js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader',
          options: {
            preserveWhitespace: false,
            postLoaders: {
              html: 'babel-loader'
            }
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin({
      banner: tmpl(banner())({pkg, stamp})
    })
  ]
}