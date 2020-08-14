const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: {
    app: './src/_app.ts',
    tests: './src/tests/_testSuite.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].compiled.js',
  },
  // Do not replace process.env['NODE_ENV'] at compile time!
  optimization: {
    nodeEnv: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(tsx?|js)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
          fix: true,
        },
      },
    ],
  },
  node: {
    __filename: false,
    __dirname: false,
  },
  resolve: {
    extensions: ['.mjs', '.tsx', '.ts', '.js', '.json'],
  },
  plugins: [],
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'source-map',
};
