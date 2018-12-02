const gulp = require("gulp"),
      watch = require("gulp-watch")

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
  console.log("Imagine Sass or PostCSS tasks running here!")
})

gulp.task("watch", function() {

  watch("./app/index.html", function() {
    gulp.start("html")
  })

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("css")
  })

})
