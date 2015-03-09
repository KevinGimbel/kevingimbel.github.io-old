/*
 * Loading the modules we neeed.
*/
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    prefix = require('gulp-autoprefixer')
;

/* one line to set up a watcher. How awesome is that?! 
var watch = gulp.watch('assets/css/*.scss', ['sass']);  */

/* 
    Anyway, I'll make a Watch Object. \o/ 
    (yes, that object is a Game of Throne reference. <3)
*/

var WatchersOfThe = {
    css: gulp.watch('assets/css/**/*.scss', ['sass']),
    js: gulp.watch('assets/js/main.js', ['uglify'])
}

/* super-easy sass task using gulp-sass and compiling with node-sass and Libsass. Lightning fast, also! */
gulp.task('sass', function() {
    gulp.src('assets/css/style.scss')
        .pipe(prefix())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('uglify', function() {
    gulp.src('assets/js/main.js')
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('assets/js/'));
})

gulp.task('default', ['sass', 'uglify']);
