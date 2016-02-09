'use strict';

import config      from '../config';
import gulp        from 'gulp';
import browserSync from 'browser-sync';

var reload_delay = 1000;

gulp.task('server', function() {
  console.log('BROWSER SYNC ENABLED ON PORT ' + config.server.port + ' & NAME: ' + config.server.name)
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
