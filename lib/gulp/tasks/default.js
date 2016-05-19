'use strict';

import gulp from 'gulp';

gulp.task('build', [
  'copy',
  'html',
  'favicon',
  'images',
  'sprite',
  'styles',
  'scripts'
]);

gulp.task('build:prod', [
  'copy',
  'html',
  'favicon',
  'images',
  'sprite',
  'styles',
  'scripts'
]);

gulp.task('default', ['build', 'server', 'watch']);
gulp.task('prod', ['build:prod']);
