import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import pug from 'gulp-pug'
import truthy from 'gulp-if'

const isProd = process.env.NODE_ENV === 'production'

gulp.task('scss', (next) => {
  gulp.src(['src/**/*.scss'], { base: 'src' })
    .pipe(plumber(onError('[scss]')))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(truthy(isProd, postcss()))
    .pipe(gulp.dest('dist'))
    .on('end', () => {
      return next()
    })
})

gulp.task('pug', (next) => {
  gulp.src(['src/**/*.pug'], { base: 'src' })
    .pipe(plumber(onError('[pug]')))
    .pipe(pug({
      pretty: !isProd
    }))
    .pipe(gulp.dest('dist'))
    .on('end', () => {
      return next()
    })
})

gulp.task('build', ['scss', 'pug'], (next) => {
  return next()
})

gulp.task('watch', (next) => {
  gulp.watch(['src/**/*.scss'], ['scss'])
  gulp.watch(['src/**/*.pug'], ['pug'])
})

gulp.task('default', ['build', 'watch'], (next) => {
  return next()
})

function onError (msg) {
  return {
    errorHandler: notify.onError(`${msg} <%= error.message %>`)
  }
}

