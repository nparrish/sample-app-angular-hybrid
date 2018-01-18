var webpack = require('webpack');

var AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
var AotPlugin = require('@ngtools/webpack').AotPlugin;

var path = require('path');

module.exports = {
  entry: {
    "sampleapp": "./app/main.ts",

    "vendor": [
      'angular',
      'zone.js',
      '@angular/common',
      '@angular/core',
      '@angular/forms',
      '@angular/http',
      '@angular/router',
      '@uirouter/core',
      '@uirouter/angular-hybrid',
      '@uirouter/angularjs',
      '@uirouter/angular',
      '@uirouter/rx',
      '@uirouter/visualizer',
    ]
  },

  devtool: 'source-map',

  output: {
    path: path.join(__dirname, "_bundles"),
    publicPath: '_bundles/',
    filename: "[name].js",
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),
    new AngularCompilerPlugin({ "tsConfigPath": 'tsconfig.json', "mainPath": 'app/main.ts', "sourceMap": true, "skipCodeGeneration": true, }),
  //  new AotPlugin({ tsConfigPath: 'tsconfig.json', mainPath: 'app/main.ts' }),
  ],

  module: {
    rules: [
      { test: /\.tsx?$/,  use: [ "source-map-loader" ], enforce: 'pre' },
      { test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,  use: [ "@ngtools/webpack" ] },
    ]
  },

  externals: {
    angular: 'angular',
  }
};
