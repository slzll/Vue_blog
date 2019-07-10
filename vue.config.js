module.exports = {
  devServer: {
    proxy: 'https://www.slzll.com'
  },
  chainWebpack: config => {
    // vue添加iview-loader，可以通过vue inspect --rule vue查看vue的loader
    config.module
      .rule('vue')
      .use('iview-loader')
      .loader('iview-loader')
      .tap(options => ({ prefix: false }));
    // 修改less-loader，可以通过vue inspect --rule less查看less的loader
    config.module
      .rule('less')
      .oneOf('vue')
      .use('less-loader')
      .loader('less-loader')
      .tap(options => ({
        ...options,
        javascriptEnabled: true
      }));
    config.module
      .rule('less')
      .oneOf('normal')
      .use('less-loader')
      .loader('less-loader')
      .tap(options => ({
        ...options,
        javascriptEnabled: true
      }));
  }
};
