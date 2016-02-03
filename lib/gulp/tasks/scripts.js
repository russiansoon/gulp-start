'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    uglify      = require('gulp-uglify'),
    reload      = browserSync.reload;

gulp.task('scripts', function() {
  gulp.src('./src/scripts/*.*')
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload({ stream: true }));
});
