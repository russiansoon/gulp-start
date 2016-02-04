'use strict';

var gulp     = require('gulp'),
    favicons = require('gulp-favicons'),
    config   = require('../gulpconfig.json');

gulp.task('fav', function () {
  gulp.src(config.src_path + 'img/sprite/*.png').pipe(favicons({
    appName: config.server_name,
    appDescription: config.server_name,
    developerName: 'Shevchenko Nik',
    developerURL: 'http://russiansoon.com',
    background: '#00FFFFFF',
    path: 'fav/',
    url: 'http://russiansoon.com',
    version: 1.0,
    html: config.src_path + 'html/variables/fav.html',
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
  })).pipe(gulp.dest(config.dist_path + 'fav'));
});
