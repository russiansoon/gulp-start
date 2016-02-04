'use strict';

var gulp = require('gulp');

gulp.task('build', [
  'copy',
  'html',
  'fav',
  'images',
  'sprite',
  'styles',
  'scripts'
]);

gulp.task('build:prod', [
  'copy',
  'html',
  'fav',
  'images',
  'sprite',
  'styles:build',
  'scripts'
]);

gulp.task('default', ['build', 'server', 'watch']);
gulp.task('prod', ['build:prod']);
