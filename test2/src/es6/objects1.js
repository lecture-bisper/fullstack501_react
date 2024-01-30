console.log('\n ----- 객체 확장 표현식 사용하기 -----\n');

console.log('\n ----- ES5의 객체 표현식 -----\n');

const x = 10;
const y = 20;
// ES5 방식의 object 타입 선언
const obj = {x: x, y: y};
console.log(obj);

const randomKeyString = 'other';
// 빈 object 타입 선언
const combined = {};
console.log(combined);
// 미리 생성한 object 타입에 key와 값을 추가
combined['one' + randomKeyString] = 'some value';
console.log(combined);

// object 타입에 값 타입과 함수를 입력하여 생성
const obj2 = {
  x: x,
  methodA: function () {
    console.log('method A');
  },
  methodB: function () {
    return 0;
  },
};
console.log(obj2);
console.log(obj2.x);
obj2.methodA();
console.log(obj2.methodB());









