// "'old' version"

const gulp = require("gulp"),

      watch = require("gulp-watch"),
      postcss = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      cssvars = require("postcss-simple-vars"),
      nested = require("postcss-nested")

gulp.task("default", function() {

  console.log("Hooray -- you created a Gulp task (and in Git Bash's VI CLI text-editor, too!)!")

})

gulp.task("something_else", function() {

  console.log("Hooray -- another Gulp task created (also in VI as well!)!")

})

gulp.task("html", function() {

  console.log("Imagine something useful being done to the HTML here!")

})

gulp.task("css", function() {

  return gulp.src("./app/assets/styles/styles.css")
  .pipe(postcss([autoprefixer, cssvars, nested]))
  .pipe(gulp.dest("./app/temp/styles"))

})

gulp.task("watch", function() {

  watch("./app/index.html", function() {
    gulp.start("html")
  })

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("css")
  })

})
