var gulp = require('gulp');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

gulp.task('static:dev', function() {
  gulp.src('app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('sass:dev', function() {
  return gulp.src('./app/sass/**.scss')
  .pipe(maps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('build/css'));
});


gulp.task('images:dev', function() {
  return gulp.src('./app/images/**')
  .pipe(gulp.dest('build/images'));
});

gulp.task('fonts:dev', function() {
  return gulp.src('./app/sass/icons/fonts/**')
  .pipe(gulp.dest('build/css/fonts'));
});


gulp.task('webpack:dev', function() {
  gulp.src('app/js/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/'));
});

gulp.task('styles', ['sass:dev', 'fonts:dev', 'images:dev']);
gulp.task('build', ['webpack:dev', 'static:dev']);
gulp.task('default', ['styles', 'build']);
