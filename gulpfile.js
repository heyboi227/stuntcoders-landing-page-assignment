const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

gulp.task("sass", () => {
  return gulp
    .src("app/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

gulp.task(
  "serve",
  gulp.series("sass", () => {
    browserSync.init({
      server: {
        baseDir: "app",
      },
    });
    gulp.watch("app/scss/**/*.scss", gulp.series(["sass"]));
  })
);

gulp.task("default", gulp.series("serve"));
