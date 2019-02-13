var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require( 'gulp-develop-server' );

//task para o sass
gulp.task('sass', function () {
   	return gulp.src('public/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});

gulp.task( 'server:start', function() {
    server.listen( { path: 'index.js' } );
    gulp.watch( [ 'index.js' ], server.restart );
});

gulp.task('default', function(){

});

