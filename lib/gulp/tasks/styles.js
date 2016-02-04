'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    prefixer    = require('gulp-autoprefixer'),
    cssmin      = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    sass        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    sourcemaps  = require('gulp-sourcemaps'),
    config      = require('../gulpconfig.json'),
    reload      = browserSync.reload;

gulp.task('styles', function() {
  gulp.src([config.src_path + 'styles/**/*.scss', config.src_path + 'styles/**/_*.scss', config.src_path + 'styles/sprite.css'])
    .pipe(sourcemaps.init())
    .pipe(prefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(rename('styles.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist_path + 'styles/'))
    .pipe(reload({ stream: true }));
});


gulp.task('styles:build', function() {
  gulp.src([config.src_path + 'styles/**/*.scss', config.src_path + 'styles/**/_*.scss', config.src_path + 'styles/sprite.css'])
    .pipe(prefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest(config.dist_path + 'styles/'))
    .pipe(reload({ stream: true }));
});
