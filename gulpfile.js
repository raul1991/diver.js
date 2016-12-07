var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('build', function() {
 gulp.src('diver.js')
     .pipe(gulp.dest('dist/'))
     .pipe(rename('diver.min.js')) 
     .pipe(uglify())
     .pipe(gulp.dest('dist'))
});
