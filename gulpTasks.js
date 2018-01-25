const gulp   = require('gulp');
const babel  = require('gulp-babel');
const inject = require("gulp-inject-file");

const babelOptions = {
	presets: ['react', 'es2016', 'stage-1']
};

module.exports = {
    compileComponents: () => {
        return gulp.src('lib/components/*.js')
            .pipe(inject({ pattern: '<Inject><filename></Inject>' }))
            .pipe(babel(babelOptions))
            .pipe(gulp.dest('lib/dist'));
    },
};