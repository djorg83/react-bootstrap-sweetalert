const gulp   = require('gulp');
const gulpTasks = require('./gulpTasks');

gulp.task('default', gulpTasks.compileComponents);