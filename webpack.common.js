const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  }
  )],
  module: { 
       rules: [
         {
           test: /\.scss$/,
           use: [
             'style-loader', //3. Inject styles into DOM
             'css-loader',   //2. Turns css into commonjs
             'sass-loader'   //1. Turns sass into css
           ],
         },
         {
           test: /\.html$/,
           use: ['html-loader']
         },
         {
           test: /\.(svg|png|jpeg|gif)$/,
           use: {
             loader: 'file-loader',
             options: {
               name: "[name].[hash].[ext]",
               outputPath: "imgs"
             }
           }
         }
       ]
     }
};