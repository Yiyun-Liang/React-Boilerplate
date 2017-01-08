// same as running in terminal: webpack ./public/app.js ./public/bundle.js
module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Greeter: 'app/components/Greeter.jsx',
      GreeterMessage: 'app/components/GreeterMessage.jsx',
      GreeterForm: 'app/components/GreeterForm.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        // loader to load jsx files
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
// with the configs, simply run in terminal: webpack
// webpack -w, like supervisor for node
