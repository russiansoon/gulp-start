'use strict';

import gulp   from 'gulp';
import rimraf from 'rimraf';
import config from '../config';

gulp.task('clean', function (cb) {
  rimraf(config.path.dist, cb);
});
