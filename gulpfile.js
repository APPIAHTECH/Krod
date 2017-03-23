var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    postcss = require('gulp-postcss'),
    cleanCSS = require('gulp-clean-css');


gulp.task('minifyJS', function (cb) {
  pump([
        gulp.src('js/main.js'),
        uglify(),
        gulp.dest('./dist')
    ],
    cb
  );
});

gulp.task('minifyCSS', function() {
  var proces = [
    autoprefixer({browsers: ['last 2 versions']})
  ];
  return gulp.src('css/*.css')
    .pipe(postcss(proces))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch',['minifyCSS' , 'minifyJS'],function(){
  gulp.watch('./css/**/*.css',['minifyCSS']);
  gulp.watch('./js/**/*.js',['minifyJS']);
});


gulp.task('default',['minifyCSS' , 'minifyJS']);
