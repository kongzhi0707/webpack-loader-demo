
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: ["a-loader", "b-loader", "c-loader"],
      },
      {
        test: /\.js$/,
        use: [
          'console-loader',
          {
            loader: 'company-loader',
            options: {
              sign: 'we-doctor@2021',
            },
          },
        ],
      }
    ]
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, "loaders"),
      path.resolve(__dirname, "node_modules"),
    ]
  }
};