'use strict';

import requireDir from 'require-dir';
import gutil from 'gulp-util';

var isProduction = (gutil.env.production === true ? true : false);

requireDir('./lib/gulp/tasks', { recurse: true });
