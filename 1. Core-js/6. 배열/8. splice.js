var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];

console.log(foods);

var delFoods = foods.splice(1, 2);
console.log(foods);
console.log(delFoods);

foods.splice(0, 1, '치킨', '파스타');
console.log(foods);

foods.splice(2, 0, '피자');

foods.splice(2);

foods.push('보쌈', '닭발');
console.log(foods);

//사용자의 삭제 요구 데이터
var input = '보쌈';
if (foods.includes(`${input}`)) {
    foods.splice(foods.indexOf(input), 1);
    console.log(`${input} 삭제 완료!`);
}
else {
    console.log("해당 항목은 존재하지 않습니다.");
}
console.log(foods);

// console.log(foods.includes(`${input}`));