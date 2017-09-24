// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  }
;


gulp.task('hello', function(){
	console.log('Hello zell');
});

gulp.task('task-name', function () {
  return gulp.src('test.php') // Get source files with gulp.src
    .pipe(gulp-php-minify()) // Sends it through a gulp plugin
    .pipe(gulp.dest('firstAutomation/php')
})

var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});
