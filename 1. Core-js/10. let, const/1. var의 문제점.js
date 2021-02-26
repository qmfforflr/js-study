//1. 변수 중복 선언 허용
var x = 1;
var x = 100;

console.log(x); // 100

//2. 블록 레벨 스코프를 지원하지 않음
var x = 1;

if (true) {
    var x = 10;
}
console.log(x); // 10

console.log("============================");
var i = "안녕"

for (var i = 0; i < 10; i++) {}

console.log(`i: ${i}`);
//if문 안에서 선언한 변수도 '전역변수'로 선언하여
//전역변수를 남발할 가능성이 높아짐


//3. 변수 호이스팅
y = 100;
console.log(`y: ${y}`);

var y;
//변수 선언을 나중에 했는데도 실행이 됨.