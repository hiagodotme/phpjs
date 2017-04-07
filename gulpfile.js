var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

//script paths
var jsFiles = 'assets/*.js',
    jsDest = 'dist';

gulp.task('phpjs-core', function() {
    return gulp.src(jsFiles)
        .pipe(concat('phpjs.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('phpjs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('phpjs-scripts', function () {
	gulp.src(['assets/scripts/*.js'])
	    .pipe(uglify())
	    .pipe(rename({ suffix: '.min', }))
	    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('compile',['phpjs-core', 'phpjs-scripts']);
