'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    reload      = browserSync.reload;

gulp.task('images', () => {
  return gulp.src('src/images/*.*')
    .pipe(imagemin({
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/img'))
    .pipe(reload({ stream: true }));
});
