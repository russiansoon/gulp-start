'use strict';

import gulp        from 'gulp';
import spritesmith from 'gulp.spritesmith';
import imagemin    from 'gulp-imagemin';
import pngquant    from 'imagemin-pngquant';
import config      from '../config';

gulp.task('sprite', function() {
  var spriteData = gulp.src(config.path.sprite.entry)
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
      imgPath: '../img/sprite.png',
      padding: 5,
      algorithm: 'binary-tree'
    }));

  spriteData.img.pipe(gulp.dest(config.path.img.dist));
  spriteData.css.pipe(gulp.dest(config.path.src + 'styles/'));
});
