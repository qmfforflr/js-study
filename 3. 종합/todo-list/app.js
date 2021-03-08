

//일정 데이터가 들어 있는 배열 선언
const todos = [
    {
        id: 1,
        text: '할 일 1',
        done: true
    },
    {
        id: 2,
        text: '할 일 2',
        done: false
    },
    {
        id: 3,
        text: '할 일 3',
        done: false
    }
];

//추가될 할 일 객체의 id를 생성해주는 함수 정의
function makeNewId() {

    if (todos.length > 0) {
        const lastIndex = todos.length -1;
        // console.log(todos[lastIndex].id + 1);
        return todos[lastIndex].id + 1;
    } else {
        return 1;
    }
}

//화면에 렌더링할 todo-list-item 노드를 생성하는 함수 정의
function makeNewToDoNode(newToDo) {
    const $li = document.createElement('li');
    const $label = document.createElement('label');
    const $divMod = document.createElement('div');
    const $divRem = document.createElement('div');

    //label 태그 작업
    $label.classList.add('checkbox');
    $label.innerHTML = `<input type="checkbox">
    <span class="text">${newToDo.text}</span>`;
    
    //수정div 태그 작업
    $divMod.classList.add('modify');
    $divMod.innerHTML = `<span class="lnr lnr-undo"></span>`;
    
    //삭제div 태그 작업
    $divRem.classList.add('remove');
    $divRem.innerHTML = `<span class="lnr lnr-cross-circle"></span>`;
    
    //li태그 작업
    $li.dataset.id = newToDo.id;
    $li.classList.add('todo-list-item');

    for (let $element of  [$label, $divMod, $divRem]) {
        $li.appendChild($element);
    }
    // console.log($li);

    document.querySelector('.todo-list').appendChild($li);
}

//할 일 추가 처리 함수 정의
function insertToDoData() {

    const $todoText = document.getElementById('todo-text');
    //1. todos배열에 객체 생성 한 후 push
    const newToDo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false //처음 생성 시 체크박스 해제 상태
    };
    
    todos.push(newToDo);
    console.log(todos);

    //2. 추가된 데이터를 화면에 렌더링
    makeNewToDoNode(newToDo);

    //3. 입력 완료 후 잔존 문자열 제거
    $todoText.value = '';
}

//메인 즉시 실행 함수
(function() {

    //할 일 추가 이벤트
    const $addbtn = document.getElementById('add');

    $addbtn.addEventListener('click', e => {
        //button의 default 타입인 submit은 서버 전송 후 새로고침 기능이 있음
        //이를 일시적으로 막기위해 preventDefault로 태그의 고유기능을 막음
        e.preventDefault();
        // console.log('추가버튼 클릭됨!');

        insertToDoData();
    });
} ());