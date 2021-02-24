//begin부터 end까지의 총합을 구해주는 함수
function calcRangeTotal (begin, end) {
    console.log(`begin: ${begin}`);
    console.log(`end: ${end}`);
    var total = 0;
    for(var n = begin; n <= end; n++) {
        total += n;
    }
    return total;
}

var result = calcRangeTotal(1, 50, 100);
console.log(result);

function sayHello(language='한국어') {

    // ~ES5
    // language = language || '한국어';


    if (language === '한국어') {
        console.log('안녕하세요');
    } else if (language === '영어') {
        console.log(('헬로~~~'));
    } else if (language === '일본어') {
        console.log('곤니치와');
    }
}

function multiply(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        console.log('숫자를 전달하세요!');
        return;
    }
    return n1 * n2;
}

var res = multiply('안녕', 20);
console.log(res);

function selectRandomFood() {
    var rn = Math.random();
    return rn > 0.5 ? '짜장면' : '짬뽕';
}
console.log(`랜덤음식: ${selectRandomFood()}`);

sayHello();
sayHello('일본어');