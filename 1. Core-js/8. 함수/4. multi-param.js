
//2개의 정수의 합을 구하는 함수
function add(n1, n2) {
    return n1 + n2;
}

//3개의 정수의 합을 구하는 함수
function addFor3(n1, n2, n3) {
    return n1 + n2 + n3
}

//n개의 정수의 합을 구하는 함수
// spread: ES6 배열문법 : 매개변수에 ...을 붙이면 매개변수에 진입한
// 데이터들을 자동으로 배열로 묶겠다.
function addAll(name, ...numbers) {
    console.log(`${name}님 안녕~`);
    var total = 0;
    for (var num of numbers) {
        total += num;
    }
    return total;
}

var results = addAll('고길동', (10, 20, 30, 40));
console.log(results);