const {series, watch, src, dest, parallel} = require('gulp')
const pump = require('pump')

// gulp plugins and utils
var livereload = require('gulp-livereload')
var postcss = require('gulp-postcss')
var zip = require('gulp-zip')
var uglify = require('gulp-uglify')
var beeper = require('beeper')
var gulpsass = require('gulp-sass')
var stylelint = require('gulp-stylelint')

// postcss plugins
var autoprefixer = require('autoprefixer')
var colorFunction = require('postcss-color-mod-function')
var cssnano = require('cssnano')
var easyimport = require('postcss-easy-import')

function serve(done) {
    livereload.listen()
    done()
}

const handleError = done => {
    return function (err) {
        if (err) {
            beeper()
        }
        return done(err)
    }
}

function hbs(done) {
    pump(
        [src(['*.hbs', '**/**/*.hbs', '!node_modules/**/*.hbs']), livereload()],
        handleError(done),
    )
}

function css(done) {
    var processors = [easyimport, colorFunction(), autoprefixer(), cssnano()]

    pump(
        [
            src(['assets/sass/*.css', 'assets/sass/*.scss'], {
                sourcemaps: true,
            }),
            gulpsass(),
            postcss(processors),
            dest('assets/built/', {sourcemaps: '.'}),
            livereload(),
        ],
        handleError(done),
    )
}

function lintStyles(done) {
    pump(
        [
            src(['assets/sass/**/*.scss', 'assets/sass/**/*.css']),
            stylelint({
                reporters: [
                    {
                        formatter: 'string',
                        console: true,
                    },
                ],
            }),
        ],
        handleError(done),
    )
}

function js(done) {
    pump(
        [
            src('assets/js/*.js', {sourcemaps: true}),
            uglify(),
            dest('assets/built/', {sourcemaps: '.'}),
            livereload(),
        ],
        handleError(done),
    )
}

function zipper(done) {
    var targetDir = 'dist/'
    var themeName = require('./package.json').name
    var themeVersion = require('./package.json').version
    var filename = themeName + '-' + themeVersion + '.zip'

    pump(
        [
            src([
                '**',
                '.prettierrc',
                '.prettierignore',
                '.stylelintrc',
                '.gitignore',
                '!node_modules',
                '!node_modules/**',
                '!dist',
                '!dist/**',
            ], {
                allowEmpty: true
            }),
            zip(filename),
            dest(targetDir),
        ],
        handleError(done),
    )
}

const cssWatcher = () => watch('assets/sass/**', css)
const hbsWatcher = () =>
    watch(['*.hbs', '**/**/*.hbs', '!node_modules/**/*.hbs'], hbs)
const jsWatcher = () => watch('assets/js/**', js)
const watcher = parallel(cssWatcher, hbsWatcher, jsWatcher)
const build = series(css, js)
const dev = series(build, serve, watcher)

exports.build = build
exports.zip = series(build, zipper)
exports.default = dev
exports.lintStyles = lintStyles
