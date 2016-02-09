'use strict';

import config          from '../config';
import gulp            from 'gulp';
import jade            from 'gulp-jade';
import jadeInheritance from 'gulp-jade-inheritance';
import changed         from 'gulp-changed';
import cached          from 'gulp-cached';
import gulpif          from 'gulp-if';
import filter          from 'gulp-filter';
import browserSync     from 'browser-sync';
import {reload}        from 'browser-sync';

var pkg = require('../../../package.json');

gulp.task('html', function() {
  return gulp.src(config.path.html.entry)
    .pipe(jade({
      pretty: true,
      locals: {
        pkgVersion: pkg.version
      }
    }))
    .pipe(gulp.dest(config.path.html.dist))
    .pipe(reload({ stream: true }));
});
