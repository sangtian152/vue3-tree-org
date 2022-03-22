const gulp = require('gulp')
const rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'))
function buildscss(cb){
    gulp.src('src/styles/*.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(rename('vue3-tree-org.css'))
      .pipe(gulp.dest('lib'))
    cb()
};
exports.default = buildscss