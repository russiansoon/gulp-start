'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    prefixer    = require('gulp-autoprefixer'),
    cssmin      = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    sass        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    sourcemaps  = require('gulp-sourcemaps'),
    reload      = browserSync.reload;

gulp.task('styles', function() {
  gulp.src(['./src/styles/**/*.scss', './src/styles/**/_*.scss', './src/styles/sprite.css'])
    .pipe(sourcemaps.init())
    .pipe(prefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(rename('styles.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/styles/'))
    .pipe(reload({ stream: true }));
});
