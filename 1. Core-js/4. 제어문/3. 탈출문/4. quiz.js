/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을 
   물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 “정답입니다”를 
   틀린 답을 입력할 시 “오답입니다”를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고 
   누적된 정답 횟수와 오답횟수를 출력하세요.
*/

var correct = 0;
var wrong = 0;

while (true) {
   var ran1 = Math.floor(Math.random() * 101);
   var ran2 = Math.floor(Math.random() * 101);
   var operation = Math.floor(Math.random() * 4);
   if (operation === 0) {
   var answer = ran1 + ran2;
   var reply = +prompt(`${ran1} + ${ran2} = ??`);
   }
   else if (operation === 1) {
      var answer = -ran1 + ran2;
      var reply = +prompt(`${-ran1} + ${ran2} = ??`);
   }
   else if (operation === 2) {
      var answer = ran1 - ran2;
      var reply = +prompt(`${ran1} - ${ran2} = ??`);
   }
   else if (operation === 3) {
      var answer = -ran1 - ran2;
      var reply = +prompt(`${ran1} - ${ran2} = ??`);
   }

      if (reply === 0) {
         alert(`프로그램이 종료되었습니다. 

         \n#정답 횟수: ${correct}회, 오답 횟수: ${wrong}회`);
         break;
      } else if (reply === answer) {
         alert("정답입니다!")
         correct++;
         continue;
      } else if (reply != answer) {
         alert("오답입니다!")
         wrong++;
         continue;
      }
}