module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    }]
  ]
};
