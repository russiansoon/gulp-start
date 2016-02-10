'use strict';

import gulp          from 'gulp';
import browserSync   from 'browser-sync';
import prefixer      from 'gulp-autoprefixer';
import cssmin        from 'gulp-minify-css';
import rename        from 'gulp-rename';
import sass          from 'gulp-sass';
import concat        from 'gulp-concat';
import sourcemaps    from 'gulp-sourcemaps';
import environments  from 'gulp-environments';
import config        from '../config';
import {reload}      from 'browser-sync';
import {development} from 'gulp-environments';
import {production}  from 'gulp-environments';

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
