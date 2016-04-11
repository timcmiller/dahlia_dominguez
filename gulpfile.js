var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('static:dev', function() {
  gulp.src('app/**/*.html')
  .pipe(gulp.dest('build/'));
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

gulp.task('sass:dev', function() {
  gulp.src('app/sass/applicaiton.scss')
  .pipe(gulp.dest('build/css'));
});


gulp.task('styles', ['sass:dev']);
gulp.task('build', ['webpack:dev', 'static:dev']);
gulp.task('default', ['styles', 'build']);
