//랜덤값 (난수) 생성 함수
// Math.random(): 0.0 이상 1.0 미만의 랜덤값 생성

var rn = Math.random();
console.log(`랜덤값: ${rn}`);

if (rn >= 0.66) {
    console.log("오늘은 짜장면");
} else if (rn >= 0.33) {
    console.log("오늘은 라면");
} else {
    console.log("오늘은 금식");
}

//Math.fllor() : 내림값, Math.ceil() : 올림값, Math.round() : 반올림값
console.log(Math.floor(3.7));
console.log(Math.ceil(5.1));
console.log(Math.round(7.6));

console.log("========================================");

// 0이상 10이하의 랜덤 정수 만들기
/* 
    Math.random()                      -> 0.0 <=  ~  < 1.0
    Math.random() * 10                 -> 0.0 <=  ~  < 10.0
    Math.floor(Math.random() * 10)     -> 0   <=  ~  < 10
    Math.floor(Math.random() * 10) + 1 -> 1   <=  ~  < 11
*/

var ri = Math.floor(Math.random() * 10) + 1;
console.log(`랜덤정수 ${ri}`);

/*
    #랜덤 정수 공식: x 이상 y이하의 랜덤 정수 생성

    -Math.floor(Math.random() * (y - x + 1)) + x;

*/

// 15 ~37의 랜덤값
var attack = Math.floor(Math.random() * 23) + 15;
console.log(`공격력: ${attack}`);