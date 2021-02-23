
//명시적 문자열 변환
var a = 10, b = 20;
// var result = String(a) + String(b);
// var result = a.toString() + b.toString();
var result = a + '' + b;

console.log(`result: ${result}`);

//명시적 숫자 변환
var m = '100', n = '3.14';
// var res = Number(m) + Number(n);
// var res = parseInt(m) + parseFloat(n);
var res = (+m) + (+n);

console.log(`res: ${res}`);

//명시적 논리 변환
console.log("==========================");

var ex1 = !!'hello';
var ex2 = Boolean(undefined);
console.log(`ex1: ${ex1}, ex2: ${ex2}`);