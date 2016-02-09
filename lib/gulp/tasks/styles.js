'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    prefixer    = require('gulp-autoprefixer'),
    cssmin      = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    sass        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    sourcemaps  = require('gulp-sourcemaps'),
    environments = require('gulp-environments'),
    config       = require('../config'),
    reload       = browserSync.reload,
    development  = environments.development,
    production   = environments.production;

gulp.task('styles', function() {
  gulp.src(config.path.css.all)
  .pipe(development(sourcemaps.init()))
  .pipe(prefixer())
  .pipe(sass().on('error', sass.logError))
  .pipe(production(cssmin()))
  .pipe(rename(config.path.names.css))
  .pipe(development(sourcemaps.write()))
  .pipe(gulp.dest(config.path.css.dist))
  .pipe(reload({ stream: true }));
});
