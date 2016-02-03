'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync');

var reload_delay = 1000;

gulp.task('server', function() {

  browserSync.init({
    server: {
      baseDir: './dist/',
      directory: true,
      index: 'index.html'
    },
    ui: false,
    port: 4000,
    logPrefix: "Gulp Template",
    logConnections: true,
    notify: true
  })
});
