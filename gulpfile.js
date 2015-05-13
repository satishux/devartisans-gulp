var gulp    =   require('gulp');
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
jshint = require('gulp-jshint'),
stylish = require('jshint-stylish'),
sass = require('gulp-sass'),
cssmin = require('gulp-minify-css');


gulp.task('scripts', function () {
    return gulp.src('js/src/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter(stylish))
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(gulp.dest('js/dest'));
});

gulp.task('sass', function () {
    return gulp.src('stylesheets/sass/app.scss')
                .pipe(sass())
                .pipe(cssmin())
                .pipe(gulp.dest('stylesheets/css'));
});


gulp.task('watch', function () {
    gulp.watch('js/src/*.js',['scripts']);
    gulp.watch('stylesheets/sass/app.scss', ['sass']);
});

gulp.task('default', ['scripts', 'sass', 'watch']);