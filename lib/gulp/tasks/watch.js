'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    config      = require('../gulpconfig.json'),
    reload      = browserSync.reload;

gulp.task('watch', function() {
  gulp.watch(config.src_path + 'html/**/*.*', ['html']);
  gulp.watch(config.src_path + 'php/*.*', ['copy']);
  gulp.watch(config.src_path + 'fav/*.*', ['copy']);
  gulp.watch(config.src_path + 'styles/**/*.*', ['styles']);
  gulp.watch(config.src_path + 'images/**/*.*', ['images']);
  gulp.watch(config.src_path + 'fonts/**/*.*', ['copy']);
  gulp.watch(config.src_path + 'scripts/*.*', ['scripts']);
});
