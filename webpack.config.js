const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  hash: true,
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle1.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
};
