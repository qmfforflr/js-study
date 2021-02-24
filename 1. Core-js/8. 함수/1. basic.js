/*
var total = 0;
for (var n = 1; n < 10; n++) {
    total += n;
}
*/

//함수 정의
//함수 이름은 동사적 기능이 내포될 수 있게 지어주세요.
function caculateTotal(x) {
    var total = 0;
    for (var n = 1; n <= x; n++) {
        total += n;
    }
    return total;
}

function add1(n1, n2) {
    return n1 + n2;
}

//함수 리터럴
var add2 = function(n1, n2) {
    return n1 + n2;
};

//화살표 함수 (ES6)
var add3 = (n1, n2) => n1 + n2;
//add2라는 변수에 저장하기 전까지 이름이 없는 익명함수

console.log(add1(10, 20));
console.log(add2(10, 20));


//함수의 호출
var result = caculateTotal(10);
console.log(result);
var result2 = caculateTotal(50);
console.log(result2);

//함수를 변수에 할당가능
var ct = caculateTotal;
var result3 = ct(200);

console.log(result3);