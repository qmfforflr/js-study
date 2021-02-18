

var age = 20;

// if (age >= 20) {
//     console.log('성인입니다.');
// } else {
//     console.log('미성년자입니다.');
// }

age >= 20 ? console.log("성인입니다.") : console.log("미성년자입니다.");

var money = 5000;
var food;

// var food = money >= 5000 ? "김치찌개" : "라면";

if (money >= 5000) {
    food = "김치찌개";
} else {
    food = "라면";
}
console.log(`오늘의 저녁은 ${food}`);