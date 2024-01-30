console.log('----- 객체 확장 표현식 사용하기 -----');

console.log('\n ----- ES6의 객체 표현식 -----\n');

const x = 10;
const y = 20;
// ES6 방식으로 object 타입의 변수를 선언과 동시에 데이터를 입력 시 값으로 이미 만들어진 변수를 사용하고자할 경우 key명을 생략할 수 있음
// value로 사용되는 변수명이 key명으로 사용되고, 변수 값이 해당 key의 값이 됨
const obj = {x, y};
console.log(obj);

const randomKeyString = 'other';
const combined = {['one' + randomKeyString]: 'some value'};
console.log(combined);

// object 타입의 변수 선언과 동시에 데이터 입력
// object 타입의 요소 선언 시 key를 생략함
// 함수의 경우 key를 생략하고 함수명을 가지는 함수를 바로 입력
const obj2 = {
  x,
  methodA() {
    console.log('method A');
  },
  methodB() {
    return 0;
  },
};

console.log(obj2);
console.log(obj2.x);
obj2.methodA();
console.log(obj2.methodB());







