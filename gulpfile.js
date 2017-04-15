var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	jshint = require("gulp-jshint"),
	sequence = require("gulp-sequence"),
	del = require("del"),
	connect = require("gulp-connect");

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

function reload() {
	return gulp.src('./examples/*.html')
		.pipe(connect.reload());
}

function keepWatching() {
	return gulp.watch(['./examples/*.html'], gulp.series(reload));
}

function fireUp() {
	return connect.server({
		root: ".",
		port: 8080,
		livereload: true
	});
}

var build = gulp.series(clean, lint, minify, package);
var run = gulp.series(build, gulp.parallel(fireUp, keepWatching));
gulp.task("build", build);
gulp.task("run", run);
