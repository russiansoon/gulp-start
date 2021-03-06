'use strict';

import gulp        from 'gulp';
import config      from '../config';
import pump        from 'pump';
import uglify      from 'gulp-uglify';
import concat      from 'gulp-concat';
import browserSync from 'browser-sync';
import {reload}    from 'browser-sync';

gulp.task('scripts', function(cb) {
  pump([
    gulp.src(config.path.js.entry),
    uglify(),
    gulp.dest(config.path.js.dist),
    gulp.src(config.path.js.modules),
    concat('modules.js'),
    uglify(),
    gulp.dest(config.path.js.dist),
    reload({
      stream: true
    })
  ],cb);
});
