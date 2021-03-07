
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
            $icon.classList.toggle('rAnswer', gameDatas.answer === gameDatas.secret && gameDatas.answer === i);
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
//정답을 판별해주는 함수 정의
function checkAnswer($numbers, e) {
    //객체 디스트럭쳐링
    const {secret, answer} = gameDatas;

    const $begin = document.getElementById('begin');
    const $end = document.getElementById('end');
    const $up = document.getElementById('up');
    const $down = document.getElementById('down');
    const $finish = document.getElementById('finish');
    const $cIcon = document.querySelector('#numbers .icon');
    
    // console.log(secret);
    if (secret === answer) {
        $finish.classList.add('GG');
        e.target.classList.add('rAnswer');
        // console.log(e.target);
    } else if (secret < answer) {
        //DOWN인 경우
        gameDatas.max = answer - 1;
        $end.textContent = gameDatas.max + 1;
    } else {
        //UP인 경우
        gameDatas.min = answer + 1;
        $begin.textContent = gameDatas.min - 1;
    }
    $up.classList.toggle('selected', secret > answer);
    $down.classList.toggle('selected', secret < answer);
    console.log(gameDatas);
    
    //정답 판별 이후 아이콘 재배치
    clearNumberIcons($numbers);//현재 렌더링 되어있는 아이콘들 전체 삭제
    makeNumberIcons(); //min, max 변화대로 재배치
    // console.log(e.target);
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
        checkAnswer($numbers, e);
        // console.log(e.target);
        // e.target.classList.toggle('rAnswer');
    })
    

} ());