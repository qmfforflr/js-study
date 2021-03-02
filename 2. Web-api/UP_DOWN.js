/*
# UP & DOWN 게임
1. 1~100사이의 정수 난수를 발생시켜 해당 값을 사용자가 맞추게 
   하는 게임입니다.
2. 사용자가 입력한 값이 정답값보다 큰지 작은지 사용자에게 
알려주어 사용자가 지속해서 범위를 좁혀가며 답을 찾을 수 있도록 합니다.
3. 정답을 맞췄을 때 프로그램이 종료되도록 프로그램을 구성해보세요.
4. 사용자가 정답을 맞췄을 때 몇번만에 정답을 맞췄는지 
   출력하는 로직을 추가하세요.
*/

const ran = Math.floor(Math.random() * 100) + 1;
alert(`[UP & DOWN 게임 - 1 ~ 100 사이의 숫자 중 어떤 숫자가 들어 있을까요??]`);

let attempt = 0;
let opportunity = 5;
let max = 100;
let min = 0;

function msg(n) {
    if (n > 0) {
        alert(`정답기회 ${n}번 남음!`);
    } else if (n === 0) {
        alert(`정답 기회 모두 소진! 계속 문제를 풀어주세요!`);
    }
}

while (true) {
    const reply = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);

    if (reply === ran) {
        attempt++;
        alert(`정답입니다!!! ${attempt}번만에 맞추셨군요!`);
        break;
    } else if (reply !== ran) {
        attempt++;
        opportunity--;
        if (reply > ran) {
            alert(`DOWN!`);
            msg(opportunity);
            if (reply < max) {
                max = reply;
            }
        } else if (reply < ran) {
            alert(`UP!`);
            msg(opportunity);
            if (reply > min) {
                min = reply;
            }
        }
    }
}

if (opportunity < 0) {
    alert(`YOU LOSE!`)
} else if (opportunity >= 0) {
    alert(`YOU WIN!`);
}