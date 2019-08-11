const gulp = require('gulp');
const inject = require("gulp-inject-file");

gulp.task('default', async () => {

});

gulp.task('copy-css', async () => {
  return gulp.src('./src/css/**/*')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('inject-css', async () => {
  return gulp.src('./dist/components/SweetAlert.js')
    .pipe(inject({
      pattern: '<Inject><filename></Inject>',
      transform: (content) => {
        // remove whitespace
        return content.replace(/[\r\t\n]/g, '');
      }
    }))
    .pipe(gulp.dest('./dist/components'));
});

gulp.task('inject-css-demo', async () => {
  return gulp.src('./demo/sweet-alert-src/src/components/SweetAlert.tsx')
    .pipe(inject({
      pattern: '<Inject><filename></Inject>',
      transform: (content) => {
        // remove whitespace
        return content.replace(/[\r\t\n]/g, '');
      }
    }))
    .pipe(gulp.dest('./demo/sweet-alert-src/src/components'));
});

gulp.task('copy-to-demo', async () => {
  return gulp.src('./src/**/*')
    .pipe(gulp.dest('./demo/sweet-alert-src/src'));
});