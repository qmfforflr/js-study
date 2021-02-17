var greeting;
greeting = 'hello';
greeting = "안녕하세요";
greeting = `니하오`;

console.log(typeof greeting);

var exStr = `그는 나에게 \"위험해\"라고 말했다.`;
console.log(exStr);

exStr = "Let\'s go!";
console.log(exStr);

var temp = '<ul>\n\t<li>\n\t\t<a href="#">Home</a>\n\t</li>\n</ul>';
console.log(temp);

var template = `<ul>
    <li>
        <a href="#">Home</a>
    </li>
</ul>`;
console.log(template);

console.log("========================================");

var month = 12;
var day = 25;
var anniversary = "크리스마스";

console.log(month + "월 " + day + "일은 " + anniversary + "입니다.");

//템플릿 리터럴
console.log(`${month}월 ${day}일은 ${anniversary}입니다.`);