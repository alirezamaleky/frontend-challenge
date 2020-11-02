const { src, dest } = require("gulp");
const babel = require("gulp-babel");
const browserify = require("gulp-browserify");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

exports.default = () => {
  src("src/css/index.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist/css"));

  src("src/fonts/**/*").pipe(dest("dist/fonts"));
  src("src/img/**/*").pipe(dest("dist/img"));

  return src("src/js/index.js")
    .pipe(browserify({ insertGlobals: true }))
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest("dist/js"));
};
