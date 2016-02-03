'use strict';

var gulp = require('gulp');

gulp.task('build', [
  'copy',
  'html',
  'images',
  'sprite',
  'styles',
  'scripts'
]);

gulp.task('default', ['build', 'server', 'watch']);
