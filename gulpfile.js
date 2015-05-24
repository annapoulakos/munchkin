var gulp = require('gulp'),
    fs = require('fs'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    partialify = require('partialify'),
    karma = require('karma');

gulp.task('browserify', function () {
    return browserify()
        .transform(babelify)
        .transform(partialify)
        .require('./source/redsatori.com/index.js', {
            entry: true
        })
        .bundle()
        .on('error', function (err) {
            console.error(err.toString());
            this.emit('end');
        })
        .pipe(fs.createWriteStream('./redsatori.com/js/bundle.js'));
});

gulp.task('b2', function () {
    return browserify()
        .transform(babelify)
        .transform(partialify)
        .require('./source/munchkin/index.js', {
            entry: true
        })
        .bundle()
        .on('error', function (err) {
            console.error(error.toString());
            this.emit('end');
        })
        .pipe(fs.createWriteStream('./redsatori.com/js/munchkin.js'));
});

/*gulp.task('karma', function (done) {
    karma.start({
        configFile: __dirname + 'karma.conf.js',
        singleRun: true
    }, done);
});
*/
gulp.task('watch', function () {
    gulp.watch('./source/**/*.*', ['browserify', 'b2']);
});

gulp.task('default', ['watch']);
