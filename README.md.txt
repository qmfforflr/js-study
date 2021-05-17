1. Code Runner
-> VScode에서 node.js를 실행시켜주는 플러그인
node.js 우선 설치

2. Bracket Pair Colorizer
-> 중첩된 괄호 쌍의 색을 구분해주는 플러그인




### ajax 실습시 JSON Server 설치(가상 Rest Api)
```shell script
$ mkdir json-server-exam
$ cd json-server-exam
$ npm init -y
$ npm install json-server -D
```

- package.json에 추가
```json
"scripts": {
    "start": "json-server --watch db.json --port 5000"    
  },
```
`$ npm start`로 서버실행

---


### git 파일 관리
플러그인에서 gitignore 설치하고 ctr + shift + p 눌러서 node 입력하면
node_modules를 git ignore에 추가해서 git 파일이 복잡해지는걸 막아줌