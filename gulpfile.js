const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
gulp.task('default', ['babel'], function() {
    gulp.watch(['./controller.es', './model.es', './app.es'], ['babel'])
})
gulp.task('babel', function() {
    return gulp.src(['./controller.es', './model.es', './app.es'])
        .pipe($.babel({
            presets: [
                "latest",
                "stage-3"
            ]
        }))
        .pipe(gulp.dest('./dist'));
})