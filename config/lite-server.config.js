module.exports = {
  injectChanges: false,
  files: [
    './**/*.*'
  ],
  watchOptions: {
    ignored: 'node_modules'
  },
  server: {
    baseDir: './',
  }
};
