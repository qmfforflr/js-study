

if ('') console.log('OK1');
if ('hello') console.log('OK2');
if (undefined) console.log('OK3');
if (null) console.log('OK4');
if (350) console.log('OK5');
if (NaN) console.log('OK6');
if (0) console.log('OK7');
if ([1,2,3]) console.log('OK8');


for (var i=0; i < 10; i++) {
    if (i % 2) {
        console.log(i);
    }
}

var drink = 0;
if (drink) {
    console.log(`음료수가 ${drink}개 있습니다.`);
} else {
    console.log("음료수가 다 떨어졌습니다.");
}