//일정 데이터가 들어 있는 배열 선언
const todos = [{
        id: 1,
        text: '할 일 1',
        done: false
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
    },
];

//추가될 할 일 객체의 id를 생성해주는 함수 정의
function makeNewId() {

    if (todos.length > 0) {
        return todos[todos.length - 1].id + 1;
    } else {
        return 1;
    }
}

//화면에 렌더링할 .todo-list-item 노드를 생성하는 함수 정의
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

    for (let $element of [$label, $divMod, $divRem]) {
        $li.appendChild($element);
    }
    // console.log($li);

    document.querySelector('.todo-list').appendChild($li);
}

// 할 일 추가 처리 함수 정의
function insertToDoData() {

    const $todoText = document.getElementById('todo-text');

    //필수 입력란이 공백인지 검증
    //trim(): 문자열의 앞뒤 공백을 제거
    if ($todoText.value.trim() === '') {
        $todoText.classList.toggle('error', $todoText.value === '');
        // $todoText.placeholder = '필수 입력사항입니다!'
        $todoText.setAttribute('placeholder', '필수 입력사항입니다!');
        $todoText.value = '';
        return;
    } else {
        $todoText.setAttribute('placeholder', '할 일을 입력하세요.');
        //css 다시 되돌리기
    }
    //1. todos배열에 객체를 생성 한 후 push
    const newToDo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    todos.push(newToDo);
    // console.log(todos);

    //2. 추가된 데이터를 화면에 렌더링
    makeNewToDoNode(newToDo);

    //3. 입력 완료 후 잔존 문자열 제거
    $todoText.value = '';
}

//data-id값으로 배열을 탐색하여 일치하는 객체가 들어 있는 인덱스를 반환
function findIndexByDataId(dataId) {
    //console.log('dataId:', typeof dataId);
    for (let i = 0; i < todos.length; i++) {
        if (dataId === todos[i].id) {
            return i;
        }
    }
    return null; //못 찾았다는 증거
}

//할 일 완료 처리 수행 함수 정의
function changeCheckState($label) {

    //1. 체크가 된 곳의 label태그에 checked클래스를 추가해야 함.
    //2. label노드를 얻어야 한다. 근데 그냥 label이 아니라 그 체크된
    //   체크박스의 부모 라벨이어야 함. 이벤트 핸들러한테 받아오자
    //3. 그 label에 클래스를 추가해보자
    $label.classList.toggle('checked');

    //4. 실제로 서버가 있었다면 서버에도 완료 상태를 반영해야 함
    //   todos배열의 할일 객체의 done값을 바꿔줘야 함.
    //5. 이 함수에서 알고 있는 정보는 클릭된 체크박스의 label을 알고 있음.
    //6. 그런데 우리가 배열에서 특정 객체를 꺼낼려면 id 프로퍼티값을 알아야함.
    //7. label을 알고 있다면 그 부모태그 li에 접근할 수 있고 그 곳의 data-id를
    //   조회하면 객체 id값을 얻어낼 수 있음
    // console.log($label.parentNode.dataset.id);
    const dataId = +$label.parentNode.dataset.id;

    //8. dataId를 기반으로 배열을 탐색하여 data-id와 일치하는 id프로퍼티를
    //   가진 객체의 인덱스를 얻어와야 함.
    const index = findIndexByDataId(dataId);
    //console.log('idx: ', index);

    //9. 해당 인덱스로 특정 객체에 접근하여 done의 값을 변환
    if (index !== null) {
        todos[index].done = !todos[index].done;
    }
}

//할 일 삭제 처리 함수 정의
function remvoeToDoData($delTarget) {
    //1. 삭제를 하려면 ul에서 li를 지워야 함.
    //2. 지우려면 ul노드랑 삭제대상 li의 노드를 받아야 함.
    document.querySelector('.todo-list').removeChild($delTarget);

    const index = findIndexByDataId(+$delTarget.dataset.id);
    if (index !== null) {
        todos.splice(index, 1);
    }
}

//수정 모드 진입 이벤트 처리 함수 정의
function enterModifyMode($modSpan) {

    //수정 모드진입 버튼을 교체(lnr-undo -> lnr-checkmark-circle)
    $modSpan.classList.replace('lnr-undo', 'lnr-checkmark-circle');

    //span.text를 input태그로 교체
    const $label = $modSpan.parentNode.previousElementSibling;
    const $textSpan = $label.lastElementChild;

    const $modInput = document.createElement('input');
    $modInput.setAttribute('type', 'text');
    $modInput.classList.add('mod-input');
    $modInput.setAttribute('value', $textSpan.textContent);

    //replaceChild(new, old)
    $label.replaceChild($modInput, $textSpan);
}

//수정 완료 이벤트 처리 함수 정의
function modifyToDoData($modCompleteSpan) {

    //버튼을 원래대로 돌림(lnr-checkmark-circle -> lnr-undo)
    $modCompleteSpan.classList.replace('lnr-checkmark-circle', 'lnr-undo');

    //input을 다시 span.text로 변경
    const $label = $modCompleteSpan.parentNode.previousElementSibling;
    const $modInput = $label.lastElementChild;

    const $textSpan = document.createElement('span');
    $textSpan.classList.add('text');
    $textSpan.textContent = $modInput.value;

    $label.replaceChild($textSpan, $modInput);

    //배열 데이터 수정
    //todos 배열에서 text 데이터 변경
    const dataId = +$label.parentNode.dataset.id;
    const index = findIndexByDataId(dataId);

    if (index !== null) {
        todos[index].text = $textSpan.textContent;
    }
    console.log(todos);

}

//메인 즉시 실행 함수
(function () {

    //할 일 추가 이벤트
    const $addBtn = document.getElementById('add');

    //add버튼 클릭으로 추가
    $addBtn.addEventListener('click', e => {
        e.preventDefault(); //submit버튼의 서버 전송 기능 중지
        // console.log('추가 버튼 클릭됨!');

        insertToDoData();
    });
    //Enter입력으로 추가
    $addBtn.addEventListener('keyup', e => {
        insertToDoData();
    });

    //할 일 완료(체크박스) 이벤트
    const $todoList = document.querySelector('ul.todo-list');

    $todoList.addEventListener('change', e => {

        if (!e.target.matches('.todo-list label.checkbox input[type=checkbox]')) {
            return;
        }
        //console.log('체크박스 이벤트 실행됨!');  
        // console.log(e.target.nextElementSiblin트.textContent);          
        changeCheckState(e.target.parentNode);
    });

    //할 일 삭제 이벤트
    $todoList.addEventListener('click', e => {

        //e.target은 div.remove가 아니라 span임
        if (!e.target.matches('.todo-list div.remove span')) {
            return;
        }

        if (confirm('정말 삭제하시겠습니까?')) {
            remvoeToDoData(e.target.parentNode.parentNode);
        }
    })

    //할 일 수정 이벤트
    $todoList.addEventListener('click', e => {

        if (e.target.matches('.todo-list div span.lnr-undo')) {
            // console.log('수정 모드 진입 이벤트');
            enterModifyMode(e.target);
        } else if (e.target.matches('.todo-list div span.lnr-checkmark-circle')) {
            // console.log('수정 완료 이벤트');
            modifyToDoData(e.target);
        } else {
            return;
        }
    })

}());