//기본 형태 : 함수 정의문
function add1(n1, n2) {
    return n1 + n2;
}

//함수 리터럴; 함수 표현식
var add2 = function(n1, n2) {
    return n1 + n2;
};
//화살표 함수(ES 6) : 함수 리터럴의 람다식형태
var add3 = (n1, n2) => {
    return n1 + n2;
};

var add4 = (n1, n2) => n1 + n2;

//모두 동일한 결과

console.log(add1(5, 10));
console.log(add2(5, 10));
console.log(add3(5, 10));
console.log(add4(5, 10));

var greeting1 = function() {
    console.log("hello!");
}

var greeting2 = () => console.log("hello!");

greeting1;
greeting2;

console.log("==================================");

//즉시 실행 함수 : 1회성 함수
(function(x, y) {
    console.log(` x + y = ${x + y}`);
}(60, 70));

//재귀함수
console.log("===================================");

function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n-1);
}

countdown(5);
console.log("===============================");

function factorial(n) {
    if ( n <= 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5));


function outer() {
    var x = 1;

    function inner() {
        var y = 2;
        console.log(x + y);
    } 
    inner ();
}

outer();