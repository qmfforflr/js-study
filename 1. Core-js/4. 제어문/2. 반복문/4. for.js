
// 1 ~ 10까지의 총합을 구하는 로직


var total = 0;
var n = 1;

while (n <= 10) {
    total += n;
    n++;
}

console.log(`총합: ${total}`);
console.log("======================");

var total1 = 0;

for (var n1 = 1; n1 <= 10; n1++) {
    total1 += n1;
}
console.log(`총합: ${total1}`);

console.log("=======================");

var num = 7;

while (num <= 100) {
    console.log(num);
    num += 7;
}
console.log(num);

console.log("===========================");

for (var num = 7; num <= 100; num++) {
    num += 7;
}
console.log(num);

console.log("============================");

