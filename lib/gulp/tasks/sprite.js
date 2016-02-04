'use strict';

var gulp        = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    imagemin    = require('gulp-imagemin'),
    config      = require('../gulpconfig.json'),
    pngquant    = require('imagemin-pngquant');

gulp.task('sprite', function() {
  var spriteData = gulp.src(config.src_path + 'sprite/**/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
      retinaSrcFilter: '*-2x.png',
      retinaImgName: 'sprite-2x.png',
      imgPath: '../img/sprite.png',
      padding: 5,
      algorithm: 'binary-tree'
    }));

  spriteData.img.pipe(gulp.dest(config.dist_path + 'img/'));
  spriteData.css.pipe(gulp.dest(config.dist_path + 'styles/'));
});
