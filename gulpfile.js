const gulp = require('gulp')
const browserSync = require('browser-sync').create();

gulp.task('hello', function(done) {
    console.log('Привет мир!');
    done();
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});