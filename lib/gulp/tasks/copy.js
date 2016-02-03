'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('copy', function() {
  gulp.src('./src/php/*.*')
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({ stream: true }));

  gulp.src('./src/fonts/**/*.*')
    .pipe(gulp.dest('./dist/fonts/'))
    .pipe(reload({ stream: true }));

  gulp.src('./src/favicon/*.*')
    .pipe(gulp.dest('./dist/fav/'))
    .pipe(reload({ stream: true }));
});
