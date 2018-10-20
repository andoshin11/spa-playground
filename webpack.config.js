const path = require("path")

// Constants
const MODE = process.env.NODE_ENV || "development"
const DEV = MODE === "development"

const SRC = path.join(__dirname, "src")

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
  resolve: {
    extensions: [".ts", ".js", ".vue"]
  }
}

