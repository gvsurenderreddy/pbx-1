var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');


gulp.task('css:build', function(){
	return gulp.src('scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("css/"));
})


gulp.task('default', ['css:build']);