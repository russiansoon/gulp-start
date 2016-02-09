'use strict';

import gulp        from 'gulp';
import config      from '../config';
import uglify      from 'gulp-uglify';
import browserSync from 'browser-sync';
import {reload}    from 'browser-sync';

gulp.task('scripts', function() {
  gulp.src(config.path.js.entry)
    .pipe(gulp.dest(config.path.js.dist))
    .pipe(reload({ stream: true }));
});
