// var floor = 2;

// for (var line = 1; line <= 9; line++) {
//     console.log(`${floor} x ${line} = ${floor * line}`);
// }
// console.log("====================================");

// var floor = 3;

// for (var line = 1; line <= 9; line++) {
//     console.log(`${floor} x ${line} = ${floor * line}`);
// }

// console.log("=======================");

/*for(floor = 2; floor <= 8; floor++) {
    for (var line = 1; line <= 9; line++) {
        console.log(`${floor} x ${line} = ${floor * line}`);
    }
    console.log("=========================");
}
*/
var num = 1;

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 2; k++) {
            console.log("안녕" + num);
            num++;
        }
    }
}