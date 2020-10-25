const path = require("path")

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src") + "/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
    libraryTarget: 'umd',
    globalObject: 'typeof self !== "undefined" ? self : this'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              '@babel/preset-react',
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: false
                  }
                }
              ]
            ]
          }
        }
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
}
