var gulp = require("gulp");
    less = require("gulp-less"), 
    cssnano = require("gulp-cssnano"),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require("gulp-concat"), 
    uglify = require("gulp-uglify"), 
    rename = require("gulp-rename"); 
    

gulp.task("less", function() {
    return gulp.src(['src/less/styles.less', 'src/less/media.less'])
        .pipe(concat('styles.less'))
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
         }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("build/css"))
});

gulp.task("scripts", function() {
    return gulp.src("src/js/*.js") 
        .pipe(concat('scripts.js'))  
        .pipe(uglify()) 
        .pipe(rename({ suffix: '.min' })) 
        .pipe(gulp.dest("build/js"));
});

gulp.task('watch', function() {
    gulp.watch('src/js/*.js', gulp.parallel('scripts'));
    gulp.watch('src/less/*.less', gulp.parallel('less'));
});

gulp.task('default', gulp.parallel('less', 'scripts', 'watch'));
