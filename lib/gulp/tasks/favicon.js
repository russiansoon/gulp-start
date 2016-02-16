'use strict';

import gulp     from 'gulp';
import config   from '../config';
import favicons from 'gulp-favicons';

gulp.task('fav', function () {
  gulp.src(config.path.src + 'images/fav/*.png').pipe(favicons({
    appName: config.server.name,
    appDescription: config.server.name,
    developerName: 'Shevchenko Nik',
    developerURL: 'http://russiansoon.com',
    background: '#00FFFFFF',
    path: 'fav/',
    url: 'http://russiansoon.com',
    version: 1.0,
    html: config.path.src + 'html/variables/fav.html',
    version: '1.0',
    orientation: 'portrait',
    replace: true,
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: false,
      favicons: true,
      firefox: false,
      opengraph: false,
      twitter: false,
      windows: true,
      yandex: false
    }
  })).pipe(gulp.dest(config.path.dist + 'fav'));
});
