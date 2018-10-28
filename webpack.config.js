const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Dotenv = require('dotenv-webpack')

// Constants
const MODE = process.env.NODE_ENV || 'development'

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html'
  }),
  new VueLoaderPlugin(),
  new Dotenv()
]

module.exports = {
  mode: MODE,
  entry: {
    main: './src/index.ts'
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: ['\\.vue$']
            }
          }
        ],
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins,
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      '@': path.join(__dirname, 'src'),
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
  }
}
