

//2차원 배열
//우리반 학생들 4과목 점수(국영수탐) 관리
// var kim = [67, 89, 92, 32];
// var park = [100, 87, 55, 77];

var ourStudentScores = [
    [67, 89, 92, 32],
    [100, 87, 55, 77],
    [88, 45, 82, 32],
    [100, 100, 92, 44]
];
console.log(ourStudentScores.length);
console.log(ourStudentScores[2]);
console.log(ourStudentScores[0][2]);

console.log("========================");


var studentNumber = 1; //학생 출석번호 변수
//우리반 평균의 총합을 저장할 변수
var ourAverages = 0;

//국어 점수의 총합을 저장할 변수
var korSum = 0;

for (var studentScores of ourStudentScores) {

    korSum += studentScores[0];

    // console.log(studentScores);
    var eachTotal = 0; //한 학생의 4과목 총점을 저장할 변수 
    for (var score of studentScores) {
        eachTotal += score;
    }
    //한 학생의 평균점수
    var eachAverage = eachTotal / studentScores.length;
    ourAverages += eachAverage;
    console.log(`${studentNumber}번 학생 총점: ${eachTotal}점, 평균: ${eachAverage}점`);
    studentNumber++;
}
//반 평균
var classAverage = ourAverages / ourStudentScores.length;
console.log(`우리반 평균: ${classAverage}점`);

//국어 평균
var korAverage = korSum / ourStudentScores.length;
console.log(`우리반 국어 평균: ${korAverage}점`);


