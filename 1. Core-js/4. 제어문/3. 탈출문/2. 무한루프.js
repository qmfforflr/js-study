
// 0 ~ 5 까지의 랜덤정수를 생성. 단, 3이 나오면 정지

while(true) {
    var ran = Math.floor(Math.random() *6);
    console.log(`랜덤값: ${ran}`);
    
    if(ran === 3) {
        console.log("반복문 종료");
        break;
    }
}
// console.log();