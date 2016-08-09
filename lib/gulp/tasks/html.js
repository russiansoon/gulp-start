'use strict';

import config          from '../config';
import gulp            from 'gulp';
import pug             from 'gulp-pug';
import browserSync     from 'browser-sync';
import {reload}        from 'browser-sync';

gulp.task('html', function() {
  return gulp.src(config.path.html.entry)
    .pipe(pug())
    .pipe(gulp.dest(config.path.html.dist))
    .pipe(reload({ stream: true }));
});
