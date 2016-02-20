var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	minifyCSS = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	svgstore = require('gulp-svgstore')
	svg2string = require('gulp-svg2string');

// css
gulp.task('css', function() {
	return gulp.src('sass/main.scss')
		.pipe(sass())
    	//.pipe(concatCss("style.css"))
    	.pipe(autoprefixer({ browsers: ['last 2 versions', '> 1%', 'IE 9'], cascade: false }))
    	//.pipe(minifyCSS())
    	.pipe(rename('style.min.css'))
    	.pipe(gulp.dest('app/'));
});

gulp.task('svg', function () {
  return gulp.src('images/**/*.svg')
  	.pipe(svgstore())
    .pipe(svg2string())
    .pipe(rename('svg-lib.js'))
    .pipe(gulp.dest('app/js/'));
});

//watch
gulp.task('watch', function(){
	gulp.watch('sass/*.scss', ['css'])
	gulp.watch('sass/**/*.scss', ['css'])
});

//default
gulp.task('default', ['css', 'watch']);