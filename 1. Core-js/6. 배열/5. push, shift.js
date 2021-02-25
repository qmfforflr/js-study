

var foods = ['볶음밥', '닭강정', '피자'];
console.log(foods);

var lastElement = foods.pop();
console.log(foods);
foods.pop();
console.log(foods);
console.log(lastElement);
console.log("========================");

foods.push('파스타');
var Element = foods.push('족발');
console.log(foods);
console.log(Element);

console.log("========================");

var firstElement = foods.shift();
console.log(foods);
foods.unshift('떡볶이');
console.log(foods);
console.log(firstElement);