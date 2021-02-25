



function calcNumbersTotalAndAverage(...numbers) {
    var total = 0;
    for (var n of numbers) 
        total += n;
    var avg = total / numbers.length;
    // return {
    //     total: total,
    //     avg: avg
    // };
    // ES 6
    return { total, avg };
}
/* 화살표 함수로 변경하면 아래와 같음.
var calcNumbersTotalAndAverage = (...numbers) => {
    var total = 0;
    for (var n of numbers) 
        total += n;
    var avg = total / numbers.length;
    // return {
    //     total: total,
    //     avg: avg
    // };
    // ES 6
    return { total, avg };
}
*/
/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
       반환하는 함수 calcNumbersTotalAndAverage를 정의하세요.
*/

//360과 90이 리턴되어야 함!
var result = calcNumbersTotalAndAverage(90, 80, 100, 90); 
console.log(`총합: ${result.total}, 평균: ${result.avg}`);











