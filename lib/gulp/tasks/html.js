'use strict';

import config          from '../config';
import gulp            from 'gulp';
import changed         from 'gulp-changed';
import cached          from 'gulp-cached';
import gulpif          from 'gulp-if';
import pug             from 'gulp-pug';
import filter          from 'gulp-filter';
import browserSync     from 'browser-sync';
import {reload}        from 'browser-sync';
import pkg             from '../../../package.json';

gulp.task('html', function() {
  return gulp.src(config.path.html.entry)
    .pipe(pug({
      pretty: true,
      locals: {
        pkgVersion: pkg.version
      }
    }))
    .pipe(gulp.dest(config.path.html.dist))
    .pipe(reload({ stream: true }));
});
