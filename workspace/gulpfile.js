//Modules 호출
var gulp = require('gulp'); // Gulp 모듈 호출

// Gulp 의 concat 패키지 모듈 호출
var concat = require('gulp-concat');

// Gulp.task()를 사용해 gulp-concat 업무 수행을 정의
// task 의 이름은 가능하면 플러그인과 연관성있는 이름을 정의하는 것이 좋습니다.
// 여기서는 concat:js 라고 task 이름을 정의함.
// Gulp.task()를 사용해 gulp-concat 업무 수행을 정의
gulp.task('concat:js', function () {
    return gulp.src(['project/src/js/*.js'])// *.js 로 변경
    .pipe( concat('conbined.js') )
    .pipe( gulp.dest('project/dist/js') );
});
gulp.task('default', ['concat:js']);