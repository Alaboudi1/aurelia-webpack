const webpack = require('webpack');
const path = require("path");
const { AureliaPlugin } = require("aurelia-webpack-plugin");
module.exports = {
  entry:
  {
    app: "aurelia-bootstrapper",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "[name].js",
    chunkFilename: "[name].js"
  },

  resolve: {
    extensions: [".js"],
    modules: ["src", "node_modules"].map(x => path.resolve(x)),
  },

  module: {
    rules: [
      { test: /\.js$/i, use: "babel-loader" },
      { test: /\.html$/i, use: "html-loader" },
    ]
  },

  plugins: [
    new AureliaPlugin()
  ]
}