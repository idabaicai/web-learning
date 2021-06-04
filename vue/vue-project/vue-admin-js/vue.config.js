'use strict'

const path = require('path')

module.exports = {
  publicPath: '/',
  configureWebpack: {
    name: 'admin',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}
