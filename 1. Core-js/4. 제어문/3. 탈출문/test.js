// var correct = 0;
// var wrong = 0;

// while (true) {
//    var ran1 = Math.floor(Math.random() * 101);
//    var ran2 = Math.floor(Math.random() * 101);
//    var answer = ran1 + ran2;

//    var reply = +prompt(`${ran1} + ${ran2} = ??`);
//    if (reply === 0) {
//       alert(`프로그램이 종료되었습니다. 

//          \n#정답 횟수: ${correct}회, 오답 횟수: ${wrong}회`);
//       break;
//    } else if (reply === answer) {
//       alert("정답입니다!")
//       correct++;
//       continue;
//    } else if (reply != answer) {
//       alert("오답입니다!")
//       wrong++;
//       continue;
//    }
// }





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