

var a = 5;
var b = '5';
console.log(a == b);
// == 연산자는 암묵저긍로 문자열 내부에 숫자가 있으면 자동으로 숫자로 변환한 후 비교한다.
console.log(a == b);
console.log(a === b);

//동등 비교는 결과 예측이 힘드므로 사용하지 않는 것을 추천
console.log("======================");
console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == '0');

// 일치비교에서는 NaN을 주의, NaN은 자신과 일치하지 않는 유일한 값입니다.
console.log("=================================");
console.log(NaN === NaN);
console.log(isNaN(NaN, NaN));

//대소 비교
console.log("============================================");
var x = 10;
console.log(x > 5);
console.log(x <= 10);

//문자열 비교
console.log("====================================================");

console.log('apple' === 'APPLE');

console.log('ace' < 'ade');
console.log('복숭아' > '감자');
console.log('ZEBRA' > 'apple');

// 같은 문자형태일 경우 사전숫너에서 뒤에 나올수록 큼 영어 대문자 < 영어  소문자 < 한국어