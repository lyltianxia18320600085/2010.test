let gulp = require('gulp');
let cssmin = require('gulp-cssmin');
let babel = require('gulp-babel');
let uglify = require('gulp-uglify');
function css() {
    return gulp
        .src('./src/css/**')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
}
function js() {
    return gulp
        .src('./src/js/**')
        .pipe(babel({
             presets: ["env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}
exports.c = css;
exports.js = js;