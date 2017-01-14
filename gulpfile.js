
var
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    header = require('gulp-header'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    sequence = require('gulp-sequence'),
    pkg = require('./package.json');

var port = 3000,
    banner = ['/*!',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * <%= pkg.homepage %>',
        ' * Version: <%= pkg.version %>',
        ' *',
        ' * Copyright 2016',
        ' * Released under the <%= pkg.license %> license',
        ' */',
        ''
    ].join('\n');


// cleans the previous build output
gulp.task('clean', () => {
    return gulp.src('./dist/*', {
        read: false
    })
        .pipe(clean());
});

// compiles the source code into '/dist/'

gulp.task('js', () => {
    return gulp.src('src/diver.js')
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./examples/'));
});

gulp.task('minify', ['js'], () => {
    return gulp.src('src/diver.js')
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(rename('diver.min.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});

// watch for changes. Used during development.
gulp.task('watch', () => {
    gulp.watch('src/*.js', ['minify']);
    gulp.watch('./examples/**/*.*', ['reload']);
});


// connects the server at given port and root.
// enables the live reloading.
gulp.task('connect', () => {
    return connect.server({
        livereload: true,
        root: './examples/',
        port: port
    });
});

gulp.task('reload', () => {
    return gulp.src('./examples/**/*.*')
        .pipe(connect.reload());
});

gulp.task('default', sequence('clean', 'build', 'connect', 'watch'));
gulp.task('build', sequence('clean', 'minify'));