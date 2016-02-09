'use strict';

import config      from '../config';
import gulp        from 'gulp';
import notifier    from 'node-notifier';
import browserSync from 'browser-sync';

var reload_delay = 1000;

var server_start = 'ON PORT ' + config.server.port + ' & NAME: ' + config.server.name;

gulp.task('server', function() {
  notifier.notify({
    title: 'Browser Sync STARTED',
    message: server_start
  });
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
