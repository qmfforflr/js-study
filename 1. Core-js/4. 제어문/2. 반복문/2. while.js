
// 1 ~ 10까지의 총합을 구하는 로직


var total = 0;
var n = 1;

while (n <= 10) {
    total += n;
    n++;
}

console.log(`${total}`);

// 7~100사이의 정수 중 7의 배수를 모두 출력하기

var num = 7;

while (num <= 100) {
    console.log(num);
    num += 7;
}

console.log("===========================");

// 1 ~ 78 사이의 정수 중 13의 배수 모두 출력하기

var num1 = 1;

while (num1 <= 100) {
    if (num1 % 13 === 0) {
    console.log(num1);
    }
    num1++;
}

console.log("==========================");

// 1 ~ 100 사이의 정수 중 6의 배수이면서 12의 배수가 아닌 수 출력하기

var multiple = 1;

while (multiple <= 100) {
    if (multiple % 6 === 0 && multiple % 12 !== 0) {
        console.log(multiple);
    }
    multiple++;
}

console.log("====================");

//1 ~ 4000 사이의 정수 중 9의 배수의 개수를 출력하기

var count = 0;
var i = 1;

while (i <= 4000) {
    if (i % 9 === 0) {
        count++;
    }
    i++;
}
console.log(`범위 내의 9의 배수의 개수: ${count}`);
