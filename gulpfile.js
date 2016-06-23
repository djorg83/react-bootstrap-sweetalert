var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
    return gulp.src('lib/components/*.js')
        .pipe(babel({
        	presets: ['react', 'es2016', 'stage-1']
        }))
        .pipe(gulp.dest('lib/dist'));
});