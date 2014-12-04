var gulp       = require('gulp'),
    $          = require("gulp-load-plugins")(),
    express    = require('express'),
    path       = require('path'),
    tinylr     = require('tiny-lr'),
    app        = express(),
    server     = tinylr();

gulp.task('compass', function() {
    gulp.src('./src/style/**/*.scss')
        .pipe($.plumber())
        .pipe($.compass({
            css: 'dist/style',
            sass: 'src/style'
        }))
        .pipe(gulp.dest('dist/style'))
        .pipe( $.livereload( server ));
});

gulp.task('images', function() {
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dist/'))
})

gulp.task('templates', function() {
    return gulp.src('src/template/**/*.jade')
        .pipe($.plumber())
        .pipe($.jade({
            pretty: true
        }))
        .pipe( gulp.dest('dist/') )
        .pipe( $.livereload( server ));
});

gulp.task('express', function() {
    app.use(express.static(path.resolve('./dist')));
    app.listen(3333);
    $.util.log('Listening on port: 3333');
});

gulp.task('watch', function () {
    server.listen(35729, function (err) {
        if (err) {
            return console.log(err);
        }
        gulp.watch('src/style/**/*.scss',['compass']);
        gulp.watch('src/template/**/*.jade',['templates']);
    });
});

// Default Task
gulp.task('default', [
    'compass',
    'templates',
    'images',
    'express',
    'watch']);
