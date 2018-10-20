const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

// Constants
const MODE = process.env.NODE_ENV || "development"
const DEV = MODE === "development"

const SRC = path.join(__dirname, "src")

const plugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.html"
  })
]

module.exports = {
  mode: MODE,
  entry: {
    main: './src/main.ts'
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins,
  resolve: {
    extensions: [".ts", ".js", ".vue"]
  }
}

