var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
gulp.task('sass' , function(){

  return gulp.src('dev/scss/style.scss')
              .pipe(sass())
              .pipe(gulp.dest('dev/css/'))
});
gulp.task('sassall' , function(){

  return gulp.src('dev/scss/*.scss')
              .pipe(sass())
              .pipe(gulp.dest('dev/css'))
});

gulp.task('watch' , function(){
gulp.watch('dev/scss/*.scss', [sass]);
gulp.watch('dev/css/*.css', [mincss]);

});
gulp.task('min-css' , function(){

  return gulp.src('dev/css/*.css')
              .pipe(cleanCSS())
              .pipe(rename({suffix:'.min'}))
              .pipe(gulp.dest('dev/css/'));
});

gulp.task('default', ['sass', 'sassall']);
