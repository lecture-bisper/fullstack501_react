# 리액트 사용하기

## Node.js 란?

+ Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 실행 환경임
+ JavaScript를 일반 Java 프로그램처럼 사용하는 것이 가능함
  + alert() 와 같은 web환경에서 표시되는 몇가지 함수는 지원하지 않음
---

## NPM 이란?

+ Node Package Manager의 줄임말로 node.js는 node.js 모듈을 web에서 다운받아 사용하기 위한 패키지 매니저
+ 사용자가 직접 모든 프로그램을 만들지 않고 미리 만들어진 모듈을 다운받아 자신의 프로젝트에 추가하여 사용하는 형태임
+ Spring 프로젝트의 Maven, Gradle과 동일한 기능을 함
+ _사용법_
  + `npm install` : package.json 에 있는 내용대로 종속성 모듈을 현재 프로젝트에 추가함
  + `npm install 모듈명` : 지정한 모듈을 현재 프로젝트에 추가
  + `npm install --save-dev 모듈명` : 지정한 모듈을 개발 버전용으로만 현재 프로젝트에 추가
  + `npm uninstall 모듈명` : 지정한 모듈을 현재 프로젝트에서 제거
  + `npm uninstall --save-dev 모듈명` : 지정한 개발 버전용 모듈을 현재 프로젝트에서 제거
---

## NVM 이란 ?

+ Node Version Manager의 줄임말로 node.js가 버전업이 빠르기 때문에 node의 버전을 관리하기 위한 패키지 매니저
+ _사용법_
  + `nvm install 버전` : 지정한 버전의 node.js를 설치, 버전대신 'lts' 입력 시 최신 lts 버전을 설치 
  + `nvm uninstall 버전 ` : 지정한 버전의 node.js를 제거, 버전대신 'lts' 입력 시 lts 버전을 제거
  + `nvm list` : 현재 설치된 node.js의 목록을 출력
  + `nvm use 버전` : 지정한 버전의 node.js를 사용 설정, 버전 대신 'lts' 입력 시 lts 버전을 사용
  + `nvm version` : nvm의 버전을 확인
---

## create-react-app 이란?
+ React 프로젝트를 자동으로 생성해주는 node.js 모듈
+ _사용법_
  + `npx create-react-app` : 프로젝트명







