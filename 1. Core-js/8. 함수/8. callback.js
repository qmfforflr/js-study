/*
function showNumbers(n, callback) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

function showEvenNumbers(n) {
    for (var i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}

function showOddNumbers(n) {
    for (var i = 1; i <= n; i++) {
        if(i % 2 === 1) {
            console.log(i);
        }
    }
}
*/

//콜백 함수
function showNumbers(n, func) {
    for (var i = 1; i <= n; i++) {
        func(i);
    }
}

//function() {}는 () => {}와 동일
showNumbers(10, (i) => {
    if (i % 2 === 0) {
        console.log(i);
    }
} );

console.log("===============================");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var filtered = numbers.filter(n => n % 2 === 1);

function filter(arr, condition) {
    var filtered = [];
    for (var n of arr) {
        if (condition(n)) {
            filtered.push(n);
        }
    }
    return filtered;
}

var filtered = filter(numbers, n => n % 2 === 0);

console.log(filtered);



// var mapped = numbers.map(n => n **2);

var mapped = [];
for (var n of numbers) {
    mapped.push(n ** 2);
}
console.log(mapped);