const gulp   = require('gulp');

gulp.task('default', async () => {

});

gulp.task('copy-css', async () => {
  return gulp.src('./src/css/**/*')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy-to-demo', async () => {
  return gulp.src('./src/**/*')
    .pipe(gulp.dest('./demo/build-output/src'));
});