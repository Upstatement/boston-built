
// Mixin Puppy >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var gulp        = require('gulp');
    gulp.tasks  = require('./lib/gulp/puppy').tasks;

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Mixin Puppy


gulp.task('default', [ 'puppy-serve' ]);
