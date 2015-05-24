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
        .require('./index.js', {
            entry: true
        })
        .bundle()
        .on('error', function (err) {
            console.error(err.toString());
            this.emit('end');
        })
        .pipe(fs.createWriteStream('./dist/munchkin.js'));
});


/*gulp.task('karma', function (done) {
    karma.start({
        configFile: __dirname + 'karma.conf.js',
        singleRun: true
    }, done);
});
*/
// pretty sure this watch regex will work for you but don't trust it
// if you feel that it is not
gulp.task('watch', function () {
    gulp.watch('./**/*.[html|js|sass|scss|json|es6]', ['browserify']);
});

gulp.task('default', ['watch']);
