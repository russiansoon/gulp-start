'use strict';

var gulp        = require('gulp'),
    config      = require('../gulpconfig.json'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

gulp.task('copy', function() {
  gulp.src(config.src_path + 'php/*.*')
    .pipe(gulp.dest(config.dist_path))
    .pipe(reload({ stream: true }));

  gulp.src(config.src_path + 'fonts/**/*.*')
    .pipe(gulp.dest(config.dist_path + 'fonts/'))
    .pipe(reload({ stream: true }));

  gulp.src(config.src_path + 'favicon/*.*')
    .pipe(gulp.dest(config.src_path + 'fav/'))
    .pipe(reload({ stream: true }));
});
