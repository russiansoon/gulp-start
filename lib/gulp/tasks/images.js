'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    config      = require('../gulpconfig.json'),
    reload      = browserSync.reload;

gulp.task('images', () => {
  return gulp.src(config.src_path + 'images/*.*')
    .pipe(imagemin({
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.dist_path + 'img'))
    .pipe(reload({ stream: true }));
});
