'use strict';

import config          from '../config';
import gulp            from 'gulp';
import jade            from 'jade';
import jadeInheritance from 'gulp-jade-inheritance';
import changed         from 'gulp-changed';
import cached          from 'gulp-cached';
import gulpif          from 'gulp-if';
import filter          from 'gulp-filter';
import browserSync     from 'browser-sync';
import {reload}        from 'browser-sync';


gulp.task('html', function() {
  return gulp.src(config.path.html.entry)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(config.path.html.dist))
    .pipe(reload({ stream: true }));
});
