var gulp        = require('gulp'),
    sass        = require('gulp-sass');

var root = "../../";

var paths = {
    style: {
        src: root + 'resources/public/style/**/*.scss',
        out: root + 'resources/public/css/'
    }
};

gulp.task('css', function () {
    gulp.src(paths.style.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.style.out));
});


gulp.task('watch', function () {
    gulp.watch(paths.style.src, ['css']);
});

// Default Task
gulp.task('default', ['css']);
gulp.task('startWatch', ['css', 'watch']);
