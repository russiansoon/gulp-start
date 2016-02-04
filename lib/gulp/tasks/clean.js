'use strict';

var gulp = require('gulp'),
    rimraf = require('rimraf'),
    config = require('../gulpconfig.json');

gulp.task('clean', function (cb) {
  rimraf(config.dist_path, cb);
});
