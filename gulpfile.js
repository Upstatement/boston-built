// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var autoprefixerOptions = {
  browsers: ['last 2 versions']
};

// Lint Task
gulp.task('lint', function() {
    return gulp.src('static/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('static/scss/*.scss')
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('static/build/css/'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('static/js/*.js')
        .pipe(concat('all.js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('static/build/js/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('static/js/*.js', ['lint', 'scripts']);
    gulp.watch('static/scss/*.scss', ['sass']);
});


// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
