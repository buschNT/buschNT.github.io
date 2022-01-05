// Sass configuration
var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function (cb) {
  gulp
    .src("static/sass/*.scss")
    .pipe(sass())
    .pipe(
      gulp.dest(function (f) {
        return f.base;
      })
    );
  cb();
});

gulp.task(
  "default",
  gulp.series("sass", function (cb) {
    gulp.watch("static/sass/*.scss", gulp.series("sass"));
    cb();
  })
);
