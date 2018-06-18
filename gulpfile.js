/**
 * Created by anlun on 16/7/16.
 */
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('packToOne', function(){
    //复制资源文件
    gulp.src('./src/Resource/**')
        .pipe(gulp.dest('./released/src/Resource'))


    //复制资源文件
    gulp.src('./template/**')
        .pipe(gulp.dest('./released'))

    //合并js文件
    gulp.src(
        [
            './libs/pep.min.js',
            './libs/zepto.min.js',
            './libs/new/babylon.js',
            './libs/new/babylon.gui.js',
            './libs/cannon.js',
            './libs/tween.min.js',
            './libs/loaders/babylon.glTF1FileLoader.js',
            './libs/babylonjs.materials.min.js',
            './libs/pep.min.js',
            './dist/hi.js'
            ])
        .pipe(concat('all.js'))
       // .pipe(uglify())
        .pipe(gulp.dest('released'))
});