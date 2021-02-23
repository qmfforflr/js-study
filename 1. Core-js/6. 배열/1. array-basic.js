

//배열의 생성
var fruits = ['딸기', '포도', '복숭아', '사과'];

//배열의 길이 확인
console.log(`배열의 길이: ${fruits.length}`);

//배열 데이터 수정
fruits[1] = '수박';
console.log(fruits);

//배열 데이터 추가
fruits[4] = '파인애플';
console.log(fruits);
console.log(`배열의 길이: ${fruits.length}`);

fruits[fruits.length] = '망고';
console.log(fruits);

//배열 요소 참조
var apple = fruits[3];
console.log(`apple: ${apple}`);

//배열 반복문 처리
console.log("======================");

fruits[fruits.length] = '자몽';
fruits[fruits.length] = '오렌지';

for (var i = 0; i < fruits.length; i++) {
    console.log(`${i+1}번째 과일: ${fruits[i]}`);
}