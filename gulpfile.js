const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('connect', (done) => {
  connect.server({
    root: './'
  });

  done();
});