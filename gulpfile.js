var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	jshint = require("gulp-jshint"),
	sequence = require("gulp-sequence"),
	del = require("del"),
	watch = require("gulp-watch");

function package() {
	return gulp.src("diver.js")
		.pipe(gulp.dest("dist"));
}

function minify() {
	return gulp.src('diver.js')
		.pipe(gulp.dest('dist'))
		.pipe(rename('diver.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));

}

function lint() {
	return gulp.src("**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter());

}

function clean() {
	return del([
		"dist/**/*"
	]);
}

var build = gulp.series(clean, lint, minify, package);
gulp.task('build', build);