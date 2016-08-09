/*
 * Gulp Util (noop) returns a stream that does nothing but pass data straight through.
 *
 *
*/

'use strict';

import gulp          from 'gulp';
import browserSync   from 'browser-sync';
import autoprefixer  from 'gulp-autoprefixer';
import cleanCSS      from 'gulp-clean-css';
import rename        from 'gulp-rename';
import sass          from 'gulp-sass';
import concat        from 'gulp-concat';
import sourcemaps    from 'gulp-sourcemaps';
import gutil         from 'gulp-util';
import config        from '../config';
import {reload}      from 'browser-sync';

gulp.task('styles', function() {
  gulp.src(config.path.css.all)
    .pipe(gutil.env.type === 'development' ? sourcemaps.init() : gutil.noop())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gutil.env.type === 'production' ? cleanCSS({compatibility: 'ie8', debug: true}, function(details) {
      console.log('CSS minify: ' + (details.stats.originalSize - details.stats.minifiedSize) / 1000 + ' kb');
    }) : gutil.noop())
    .pipe(rename(config.path.names.css))
    .pipe(gutil.env.type === 'development' ? sourcemaps.write() : gutil.noop())
    .pipe(gulp.dest(config.path.css.dist))
    .pipe(reload({ stream: true }));
});
