'use strict';

import config      from '../config';
import gulp        from 'gulp';
import browserSync from 'browser-sync';
import imagemin    from 'gulp-imagemin';
import pngquant    from 'imagemin-pngquant';
import gutil       from 'gulp-util';
import {reload}    from 'browser-sync';

gulp.task('images', () => {
  return gulp.src(config.path.img.entry)
    .pipe(gutil.env.type === 'development' ? imagemin({
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }) : gutil.noop())
    .pipe(gulp.dest(config.path.img.dist))
    .pipe(reload({ stream: true }));
});
