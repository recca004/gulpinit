var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('sass', function(){
    
    console.log('sass is on');
    
    return gulp.src('dev/scss/styles.scss')
           .pipe(sass())
           .pipe(gulp.dest('dev/css'))
    
});



gulp.task('prod', function(){
    
    gulp.src('dev/js/*.js')
           .pipe(uglify())
           .pipe(gulp.dest('prod/js'));
    
    gulp.start('sass');
    
    gulp.src('dev/images/*.*')
    .pipe(gulp.dest('prod/images'))
    
    gulp.src('dev/css/*.css')
    .pipe(gulp.dest('prod/css'))
    
    gulp.src('dev/*.html')
    .pipe(gulp.dest('prod'))
    
});