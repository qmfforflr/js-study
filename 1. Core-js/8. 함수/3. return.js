
//return은 함수의 탈출문이기에 return 이후의 코드들은 실행되지 않는다.
function add(n1, n2) {
    return n1 + n2;
    var result = n1 - n2;
}


//void 함수
function sub(n1, n2) {
    console.log(`${n1} - ${n2} = ${n1 - n2}`);
}
//위의 함수는 return이 없기 때문에 값을 함수 밖으로 가져가지 못함.
var res = sub(30, 17);
//따라서 res에는 값이 저장되지 않음.

function greeting(nickname) {
    badNick = ['쓰레기', '바보', '양아치']
    if (badNick.includes(nickname)) {
        console.log('그런 나쁜말은 하지 마세요!');
        return; //여기서 탈출해서 아래 log 실행하지 않음
    }
    console.log(`${nickname}님 안녕하세요!`);
}

function testFunc() {
    while(turn) {
        if(true) {
            break;
            // return; 으로 끝내면 반복문 아래의 코드가 실행되지 않는다.
        }
    }

    console.log('break로 인해 while문 종료');
}

function operationAll(n1, n2) {
    // return [n1 + n2, n1 - n2, n1 * n2, n1 / n2];
    return {
        plus : add(n1, n2),
        minus : n1 - n2,
        multi : n1 * n2,
        divide : n1 / n2
    };
    // return은 "하나"밖에 못하므로 배열 "하나"를 리턴함.
    // 마찬가지로 객체 "하나"로 리턴할 수도 있다.
}

var results = operationAll(10, 2);
console.log(results.plus);

greeting('쓰레기')

console.log("==================================");
console.log(res);

var res1 = add(add(5, 5), add(add(10, 10), add(50, 5)));
console.log(res1);

sub(add(add(5, 5), add(add(10, 10), add(50, 5))), 10);

console.log("-===================================================");

var result = add(5, 8);
var result2 = add(result, result * 2);
console.log(result2);


