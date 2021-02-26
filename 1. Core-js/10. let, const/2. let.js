//1. 변수 중복 선언 불가능
let x = 3;
// let x = 4;

console.log(x);

//2. 블록레벨 스코프를 지원

let y = 10;
if (true) {
    let y = 20;
    console.log(`if내부 y: ${y}`); // 20
}
console.log(`if외부 y: ${y}`); // 10

//3. 변수 호이스팅이 일어나지 않음
z = 10;
console.log(z);

let z;
//let 키워드로 선언된 변수는 '선언 단계'와 '초기화 단계'를 엄격하게 구분함
//따라서 암묵적으로 대신 선언해주지않음.