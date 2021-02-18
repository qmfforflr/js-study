

var height = +prompt('당신의 키는?');

if (height >= 140) {
    var age = +prompt('당신의 나이는?')
    if ( age >= 8) {
        alert('놀이기구에 탑승하실 수 있습니다.')
    } else {
        alert('나이 때문에 놀이기구에 탑승할 수 없습니다.')
    }
}
else {
    alert("키 때문에 놀이기구에 탑승할 수 없습니다.")
}