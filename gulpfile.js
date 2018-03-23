var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');


// Tâche "sass" = Sass complileur
gulp.task('sass' , function(){

  return gulp.src('dev/scss/*.scss')
              .pipe(sass())
              .pipe(gulp.dest('dev/css/'))
              .pipe(gulp.dest('prod/css'))
});

// Tâche "imagemin" = image compresser 
gulp.task('imagemin' , function(){

  return gulp.src('dev/images/*.*')
              .pipe(imagemin())
              .pipe(rename({suffix:'.min'}))
              .pipe(gulp.dest('dev/img'))
});
// Tâche "minicss" = css minify 
gulp.task('minicss' , function(){

  return gulp.src('dev/css/*.css')
              .pipe(cleanCSS())
              .pipe(rename({suffix:'.min'}))
              .pipe(gulp.dest('dev/css'));
});
// Tâche "js" = uglify 
gulp.task('js', function() {
  return gulp.src('dev/js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dev/js'));
});

gulp.task('watch', function(){
   
    
    gulp.watch('dev/scss/', ['sass']);
    gulp.watch('dev/css/*.css', ['minicss']);

    gulp.watch('dev/images/*.*', ['imagemin']);



});


gulp.task('default', ['sass']);
