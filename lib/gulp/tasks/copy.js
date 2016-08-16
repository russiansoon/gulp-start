'use strict';

import gulp        from 'gulp';
import config      from '../config';
import browserSync from 'browser-sync';
import {reload}    from 'browser-sync';

gulp.task('copy', function() {
  var files = gulp.src(config.path.src + 'files/*.*')
    .pipe(gulp.dest(config.path.dist))
    .pipe(reload({ stream: true }));

  var fonts = gulp.src(config.path.src + 'fonts/**/*.*')
    .pipe(gulp.dest(config.path.dist + 'fonts/'))
    .pipe(reload({ stream: true }));

  var favicon = gulp.src(config.path.src + 'favicon/*.*')
    .pipe(gulp.dest(config.path.src + 'favicon/'))
    .pipe(reload({ stream: true }));

  return files, fonts, favicon;
});
