/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Tian
 * @Date: 2021-07-13 17:47:34
 * @LastEditors: Tian
 * @LastEditTime: 2021-07-13 18:27:23
 */
module.exports = {
  entry: './main.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-react-jsx',{pragma:"createElement"}]]
          }
        }
      }
    ]
  },
  mode:'development'
}