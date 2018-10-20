const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

// Constants
const MODE = process.env.NODE_ENV || "development"
const DEV = MODE === "development"

const SRC = path.join(__dirname, "src")

const plugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.html"
  }),
  new VueLoaderPlugin()
]

module.exports = {
  mode: MODE,
  entry: {
    main: './src/index.ts'
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  },
  plugins,
  resolve: {
    extensions: [".ts", ".js", ".vue"],
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080
  }
}
