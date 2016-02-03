'use strict';

var gulp        = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant');

gulp.task('sprite', function() {
  var spriteData = gulp.src('./src/sprite/**/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
      imgPath: '../img/sprite.png',
      padding: 5,
      algorithm: 'binary-tree'
    }));

  spriteData.img.pipe(gulp.dest('./dist/img/'));
  spriteData.css.pipe(gulp.dest('./dist/styles/'));
});
