'use strict';

var config      = require('../config');

var gulp        = require('gulp'),
    browserSync = require('browser-sync');

var reload_delay = 1000;

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: config.path.dist,
      directory: true,
      index: 'index.html'
    },
    ui: false,
    port: config.server.port,
    logPrefix: config.server.name,
    logConnections: true,
    notify: true
  })
});
