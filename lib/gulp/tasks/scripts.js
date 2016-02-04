'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    uglify      = require('gulp-uglify'),
    config      = require('../gulpconfig.json'),
    reload      = browserSync.reload;

gulp.task('scripts', function() {
  gulp.src(config.src_path + 'scripts/*.*')
    .pipe(gulp.dest(config.dist_path + 'js/'))
    .pipe(reload({ stream: true }));
});
