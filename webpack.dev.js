const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const DIST_DIR = path.join(__dirname, "dist");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 4200,
    hot: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    static: {
      directory: DIST_DIR,
    },
    devMiddleware: {
      publicPath: "/dist",
      writeToDisk: true,
    }
  },
  devtool: "eval",
  watchOptions: {
    ignored: ["node_modules/**", "public/imgs/**", "public/index.html"]
  },
});
