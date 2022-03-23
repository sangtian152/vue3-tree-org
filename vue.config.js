module.exports = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'static',
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
