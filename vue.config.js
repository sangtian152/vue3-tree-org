const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'static',
  // 将entry指向examples
  pages: {
    index: {
      entry: 'demo/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 为packages目录添加babel-loader处理
  chainWebpack: config => {
    config.module
      .rule('js')
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  },
  css: {
    requireModuleExtension: true,
    sourceMap: true
  }
}
