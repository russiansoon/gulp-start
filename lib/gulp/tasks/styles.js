'use strict';

import gulp          from 'gulp';

import postcss       from 'gulp-postcss';
import sourcemaps    from 'gulp-sourcemaps';
import autoprefixer  from 'autoprefixer';

import browserSync   from 'browser-sync';
import cleanCSS      from 'gulp-clean-css';
import rename        from 'gulp-rename';
import concat        from 'gulp-concat';
import gutil         from 'gulp-util';
import config        from '../config';
import {reload}      from 'browser-sync';

gulp.task('styles', function() {
  gulp.src(config.path.css.all)
    .pipe(gutil.env.type === 'development' ? sourcemaps.init() : gutil.noop())
    .pipe(sourcemaps.init())
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gutil.env.type === 'production' ? cleanCSS({compatibility: 'ie8'}) : gutil.noop())
    .pipe(rename(config.path.names.css))
    .pipe(gutil.env.type === 'development' ? sourcemaps.write() : gutil.noop())
    .pipe(gulp.dest(config.path.css.dist))
    .pipe(reload({ stream: true }));
});
