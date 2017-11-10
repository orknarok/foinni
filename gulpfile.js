var gulp = require('gulp'),
    // gulpif = require('gulp-if'),
    // useref = require('gulp-useref'),
    // csso = require('gulp-csso'),
    // htmlmin = require('gulp-htmlmin'),
    // imagemin = require('gulp-imagemin'),
    // uglify = require('gulp-uglify'),
    // autoprefixer = require('gulp-autoprefixer'),
    // cssbeautify = require('gulp-cssbeautify'),
    // csscomb = require('gulp-csscomb'),
    // ghPages = require('gulp-gh-pages'),

    gulpLoadPlugins = require('gulp-load-plugins'),
    p = gulpLoadPlugins(),

    del = require('del'),
    browserSync = require('browser-sync')
  ;

// gulp default
gulp.task('default', function() {
  // place code for your default task here
});

// clean dist/
gulp.task('clean', function () {
  return del([
    'dist/**/*'
  ]);
});

// browser-sync
gulp.task('bs', ['browser-sync']);
gulp.task('browser-sync', function () {
  var files = [
    // 'src/**/*.html',
    // 'src/css/**/*.css',
    // 'src/img/**/*.png',
    // 'src/js/**/*.js'
    'src/**/*'
  ];

  browserSync.init(files, {
    server: {
      baseDir: './src'
    }
  });
});

// deploy to gh-pages
gulp.task('ghp', function() {
  console.log('---------- Publication ./dist/ on gh-pages');
  return gulp.src('./dist/**/*')
    .pipe(p.ghPages());
});

// watch files
gulp.task('watch', function() {
  gulp.watch('test/**/*.css', function(event) {
    console.log('Event type: ' + event.type); // добавлено, изменено или удалено
    console.log('Event path: ' + event.path); // путь к файлу
  });
})

// build project
gulp.task('bd', ['build']);

gulp.task('build',  ['html-css-js', 'fonts', 'img']);

// html-css-js
gulp.task('html-css-js', function () {
  return gulp.src('src/*.html')

    // concat css/js
    .pipe(p.useref())

    // minify html
    .pipe(p.if('*.html',
      p.htmlmin({
        collapseWhitespace: true
      })
    ))

    // css autoprefixer
    .pipe(p.if('*.css',
      p.autoprefixer({
        browsers: ['last 20 versions'],
        cascade: false
      })
    ))

    // replace img url in css
    .pipe(p.if('*.css',
      p.replace('url(../../img/', 'url(../img/')
    ))
    .pipe(p.if('*.css',
      p.replace("url('../../img/", "url('../img/")
    ))

    // minify css
    .pipe(p.if('*.css',
      p.csso({
        restructure: true,
        sourceMap: false,
        debug: true
      })
    ))

    // minify js
    .pipe(p.if('*.js',
      p.uglify()
    ))

    .pipe(gulp.dest('dist'));
});

// images
gulp.task('img', ['imgmin-1', 'imgmin-2', 'imgmin-3']);

// imagemin
gulp.task('imgmin-1', () =>
  gulp.src(['src/img/*', '!src/img/*.db'])
    .pipe(p.imagemin())
    .pipe(gulp.dest('dist/img/'))
);

gulp.task('imgmin-2', () =>
  gulp.src(['src/img/works/*', '!src/img/works/*.db'])
    .pipe(p.imagemin())
    .pipe(gulp.dest('dist/img/works/'))
);

gulp.task('imgmin-3', () =>
  gulp.src(['src/img/team/*', '!src/img/team/*.db'])
    .pipe(p.imagemin())
    .pipe(gulp.dest('dist/img/team/'))
);

// fonts
gulp.task('fonts', ['fonts-1', 'fonts-2']);
gulp.task ('fonts-1', function () {
  return gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist/fonts/'))
});

// fontello
gulp.task ('fonts-2', function () {
  return gulp.src(['src/fontello/fonts/*', 'src/fontello/LICENSE.txt'])
    .pipe(gulp.dest('dist/fonts/'))
});


// cssbeautify
gulp.task('cssbeautify', function() {
  return gulp.src('./test/*.css')
    .pipe(p.cssbeautify({
      indent: '  ',
      openbrace: 'end-of-line',
      autosemicolon: true
    }))
    .pipe(gulp.dest('./test/cssbeautify/'));
});

// csscomb
gulp.task('csscomb', function() {
  return gulp.src('./test/*.css')
    .pipe(p.csscomb())
    .pipe(gulp.dest('./test/csscomb'))
});
