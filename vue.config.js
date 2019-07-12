module.exports = {
  pwa: {
    name: 'vue-blog',
    themeColor: '#6476DB',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    /**
     * 两个模式，GenerateSW（默认）和 InjectManifest
     * GenerateSW 在我们build项目时候，每次都会新建一个service worker文件
     * InjectManifest 可以让我们编辑一个自定义的service worker文件，实现更多的功能，并且可以
     * 拿到预缓存列表
     */
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
      // ...other Workbox options...
    }
  },
  devServer: {
    proxy: 'https://www.slzll.com',
    port: 8088
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
