var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
    return gulp.src('lib/components/*.js')
        .pipe(babel({
        	presets: ['react']
        }))
        .pipe(gulp.dest('dist'));
});