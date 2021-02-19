/*
for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
    console.log(`${i}-1`);
}
console.log("반복문 종료.");
*/

for (var i = 0;  i < 3; i++) {
    for(var j = 0; j < 2; j++) {
        if ( i === j) {
            break;
        }
        console.log(`${i}, ${j}`);
    }
    if ( i === 1) break;
}