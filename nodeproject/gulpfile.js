var gulp = require("gulp");

var jshint = require("gulp-jshint");

var jsFiles = ["*.js", "src/**/*.js" ];

gulp.task("style", function() {
    
    return gulp.src(jsFiles)
        .pipe(jshint());
    
});

//from command line run >gulp style
