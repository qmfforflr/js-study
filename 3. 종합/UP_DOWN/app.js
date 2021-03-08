
//게임에 필요한 데이터 객체
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    answer: null, //사용자가 클릭한 숫자
    min: 1,
    max: 100,
}

//숫자 아이콘 생성 함수
function makeNumberIcons() {

    const $numbers = document.getElementById('numbers');
    const $frag = document.createDocumentFragment();

        for (let i = gameDatas.min; i <= gameDatas.max; i++) {
            const $icon = document.createElement('div');
            
            $icon.classList.add('icon');
            $icon.textContent = i;
            $frag.appendChild($icon);
        }
        $numbers.appendChild($frag);
        return $numbers;
}
//숫자 아이콘 삭제 함수
function clearNumberIcons($numbers) {
    for (let $icon of [...$numbers.children]) {
        $numbers.removeChild($icon);
    }
}
//up&down 애니메이션을 작동시킬 클래스 추가/제거 함수 정의
function executeUpDownAnimation(isUp) {
    //클래스 이름을 쉽게 관리하기 위해.
    const ANI_CLASS_NAME = 'selected';
    document.getElementById('up').classList.toggle('selected', isUp);
    document.getElementById('down').classList.toggle('selected', !isUp);
}

//정답을 맞췄을 때 처리를 수행할 함수 정의
function processCorrect($target) {
    const $finish = document.getElementById('finish');
    $finish.classList.add('GG');

    //정답 아이콘을 움직이게 하는 코드
    $target.setAttribute('id', 'move');
}
//정답을 판별해주는 함수 정의
function checkAnswer($numbers, $target) {
    //객체 디스트럭쳐링
    const {secret, answer} = gameDatas;

    const $begin = document.getElementById('begin');
    const $end = document.getElementById('end');
    const $up = document.getElementById('up');
    const $down = document.getElementById('down');
    const $finish = document.getElementById('finish');
    
    // console.log(secret);
    if (secret === answer) {
        processCorrect($target);
        return;
        // console.log(e.target);
    } else if (secret < answer) {
        //DOWN인 경우
        gameDatas.max = answer - 1;
        $end.textContent = answer;
        executeUpDownAnimation(false)
    } else {
        //UP인 경우
        gameDatas.min = answer + 1;
        $begin.textContent = answer;
        executeUpDownAnimation(true)
    }
    // $up.classList.toggle('selected', secret > answer);
    // $down.classList.toggle('selected', secret < answer);
    console.log(gameDatas);
    
    //정답 판별 이후 아이콘 재배치
    clearNumberIcons($numbers);//현재 렌더링 되어있는 아이콘들 전체 삭제
    makeNumberIcons(); //min, max 변화대로 재배치
}

//핵심 실행 로직 즉시 실행함수
(function () {
    
    const $numbers = makeNumberIcons();
    
    //숫자 아이콘 클릭 이벤트
    $numbers.addEventListener('click', e => {
        
        if (!e.target.matches('#numbers > .icon')) {
            return;
        }
        // console.log(`${e.target.textContent} 클릭됨!`);
        gameDatas.answer = +e.target.textContent;
        // console.log(gameDatas);
        
        //정답 체크 함수 호출
        checkAnswer($numbers, e.target);
    })
    

} ());