'use strict';

module.exports = {
  path: {
    project: './',

    dist: './dist',

    src: './src',

    css: {
      entry: './src/styles/styles.scss',
      all: './src/styles/**/*.*',
      dist: './dist/styles'
    },

    js: {
      entry: './src/scripts/*.js',
      dist: './dist/js',
      all: './src/scripts/*.js'
    },

    html: {
      entry: './src/html/*.jade',
      all: './src/html/**/*.*',
      dist: './dist'
    },

    sprite: {
      entry: './src/sprite/**/*.*',
      dist: './dist/img'
    },

    img: {
      entry: './src/images/**/*.*',
      all: './src/images/**/*.*',
      dist: './dist/img'
    },

    names: {
      css: 'styles.min.css'
    }
  },

  server: {
    port: 8000,
    name: 'Template //'
  }
}
