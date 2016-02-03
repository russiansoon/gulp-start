'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('watch', function() {
  gulp.watch('./src/html/**/*.*', ['html']);
  gulp.watch('./src/php/*.*', ['copy']);
  gulp.watch('./src/fav/*.*', ['copy']);
  gulp.watch('./src/styles/**/*.*', ['styles']);
  gulp.watch('./src/images/**/*.*', ['images']);
  gulp.watch('./src/fonts/**/*.*', ['copy']);
  gulp.watch('./src/scripts/*.*', ['scripts']);
});
