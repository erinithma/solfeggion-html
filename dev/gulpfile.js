var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
 
gulp.task('default', function () {
  return gulp.src('./less/solfeggion.less')
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('../css'));
});