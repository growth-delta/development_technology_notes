const path = require('path');

module.exports = {
  entry: {
    site: './assets/JavaScript/site.js',
    // NoteTaking: './assets/JavaScript/applications/NoteTaking/NoteTaking.tsx',
    MarineTraffic: './assets/JavaScript/applications/MarineTraffic/MarineTraffic.jsx',
    GeoMap: './assets/JavaScript/applications/GeoMap/GeoMap.jsx',
    Distribution: './assets/JavaScript/applications/Distribution/Distribution.jsx',
    CRUD: './assets/JavaScript/applications/CRUD/CRUD.js',
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, './static/JavaScript/bundles'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
};
