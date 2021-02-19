

for (var i = 1; i < 11; i++) {
    if(i % 2 === 0) {
        continue;
    }
    console.log(i);
}

while(true) {
    var n = +prompt("정수를 입력하세요.")
    if (n === 0) break;
    else if (n === 1) continue;

    alert('메롱메롱~')
}