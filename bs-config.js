module.exports = {
  server: {
    baseDir: 'dist',
    index: 'index.html'
  },
  startPath: '/trading-pizza/',
  files: [{
    match: ['dist/**/*.{html,js,json,css}'],
    fn: function (event, file) {
      this.reload('*.html')
    }
  }],
  https: false,
  reloadDebounce: 1000,
  notify: false
}