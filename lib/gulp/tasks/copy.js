'use strict';

import gulp        from 'gulp';
import config      from '../config';
import browserSync from 'browser-sync';
import {reload}    from 'browser-sync';

gulp.task('copy', function() {
  gulp.src(config.path.src + 'php/*.*')
    .pipe(gulp.dest(config.path.dist))
    .pipe(reload({ stream: true }));

  gulp.src(config.path.src + 'fonts/**/*.*')
    .pipe(gulp.dest(config.path.dist + 'fonts/'))
    .pipe(reload({ stream: true }));

  gulp.src(config.path.src + 'favicon/*.*')
    .pipe(gulp.dest(config.path.src + 'fav/'))
    .pipe(reload({ stream: true }));
});
