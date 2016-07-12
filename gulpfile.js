'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jsx = require('gulp-jsx');
var babel = require('gulp-babel');
 
gulp.task('sass', function () {
  return gulp.src('./scss/common.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('watch:css', function(){
	gulp.watch('scss/*.scss',['sass']);
})

gulp.task('js', function(){
	return browserify('./src/js/src/app.js')
        .bundle()
        // Передаем имя файла, который получим на выходе, vinyl-source-stream
        .pipe(source('index.js'))
        .pipe(gulp.dest('./public/js')); 
});

gulp.task('watch:js', function(){
	gulp.watch('src/js/*.js',['babel', 'js']);
});

gulp.task('babel', function() {
	return gulp.src('src/js/*.js')
		.pipe(babel({
			presets: ['react']
		}))
		.pipe(gulp.dest('src/js/src'));
});

gulp.task('default', ['watch:js', 'watch:css']);