
//정답 횟수 오답 횟수 저장변수
var correctCount = 0, incorrectCount = 0;

while (true) {
    //1 이상 20이하의 랜덤 정수
    var first = Math.floor(Math.random() * 20) + 1;
    var second = Math.floor(Math.random() * 20) + 1;

    //0 1 2 의 랜덤정수 생성
    var operatorNum = Math.floor(Math.random() * 3);

    //랜덤 연산 부호 생성
    var operatorMark;
    if (operatorNum === 0) {
        operatorMark = '+';
    } else if (operatorNum === 1) {
        operatorMark = '-';
    } else {
        operatorMark = 'x';
    }

    //사용자가 입력한 답
    var userAnwser = +prompt(`${first} ${operatorMark} ${second} = ??`);
    // console.log("userAnswer: " + userAnwser);

    //탈출조건 (0입력시)
    if (userAnwser === 0) {
        break;
    }

    //실제 정답
    var realAnswer;
    if (operatorMark === '+') {
        realAnswer = first + second;
    } else if (operatorMark === '-') {
        realAnswer = first - second;
    } else {
        realAnswer = first * second;
    }

    //정오답 판별
    if (userAnwser === realAnswer) {
        alert('정답입니다!');
        correctCount++;
    } else {
        alert('오답입니다!');
        incorrectCount++;
    }
}//end while

alert(`프로그램이 종료되었습니다.
# 정답 횟수: ${correctCount}회, 틀린 횟수: ${incorrectCount}회`);