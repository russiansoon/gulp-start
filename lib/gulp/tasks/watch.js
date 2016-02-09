'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    config      = require('../config'),
    reload      = browserSync.reload;

gulp.task('watch', function() {
  gulp.watch(config.path.html.all, ['html']);
  gulp.watch(config.path.src + 'php/*.*', ['copy']);
  gulp.watch(config.path.src + 'fav/*.*', ['copy']);
  gulp.watch(config.path.css.all, ['styles']);
  gulp.watch(config.path.img.all, ['images']);
  gulp.watch(config.path.src + 'fonts/**/*.*', ['copy']);
  gulp.watch(config.path.js.all, ['scripts']);
});
