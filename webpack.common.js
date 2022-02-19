const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssExtractPlugin = require("mini-css-extract-plugin");

const DIST_DIR = path.join(__dirname, "dist");
const SRC_DIR = path.join(__dirname, "src");

module.exports = {
  entry: SRC_DIR + "/index.js",
  output: {
    path: DIST_DIR,
    filename: "[name].dist.js",
    chunkFilename: "[name].dist.js",
    pathinfo: false,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, "public/styles"), path.resolve(__dirname, "src")],
        use: [{
          loader: CssExtractPlugin.loader,
          options: {
            publicPath: "../",
          }
        }, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        exclude: /\.map$/,
        use: [{
          loader: CssExtractPlugin.loader,
          options: {
            publicPath: "./",
          }
        }, "css-loader"]
      },
      {
        test: /\.woff(2)?/,
        include: path.resolve(__dirname, "./node_modules/bootstrap-icons/font/fonts/"),
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/"
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: true,
      template: "./public/index.html"
    }),
    new CssExtractPlugin({
      filename: "[name].dist.css",
      chunkFilename: "[id].css",
    }),
  ]
};
