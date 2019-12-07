var gulp = require('gulp');
var sass = require('gulp-sass');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = 'icons';

gulp.task('scss', () => {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('css/'));
});

gulp.task('sass-watch', () => {
  gulp.watch('scss/**/*.scss', gulp.series('scss'))
});

gulp.task('icon-font', async () => {
  gulp.src(['images/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'scss/templates/_icons-template.scss',
      targetPath: '../../scss/utils/_icons-font.scss',
      fontPath: '../fonts/icons/'
    }))
    .pipe(iconfont({
      fontName: fontName,
      formats: ['svg', 'ttf', 'eot', 'woff'],
      normalize: true,
      fontHeight: 1001
    }))
    .pipe(gulp.dest('fonts/icons/'));
});