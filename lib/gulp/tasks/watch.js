'use strict';

import gulp        from 'gulp';
import config      from '../config';

gulp.task('watch', function() {
  gulp.watch(config.path.html.all, ['html']);
  gulp.watch(config.path.src + 'files/*.*', ['copy']);
  gulp.watch(config.path.src + 'favicon/*.*', ['copy']);
  gulp.watch(config.path.css.all, ['styles']);
  gulp.watch(config.path.img.all, ['images']);
  gulp.watch(config.path.src + 'fonts/**/*.*', ['copy']);
  gulp.watch(config.path.js.all, ['scripts']);
});
