'use strict';

var config      = require('../gulpconfig.json');

var gulp        = require('gulp'),
    browserSync = require('browser-sync');

var reload_delay = 1000;

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: config.dist_path,
      directory: true,
      index: 'index.html'
    },
    ui: false,
    port: config.server_port,
    logPrefix: config.server_name,
    logConnections: true,
    notify: true
  })
});
