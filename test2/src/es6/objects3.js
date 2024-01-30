console.log('----- 구조분해 할당 사용하기 -----');

console.log('\n----- ES5 방식의 구조분해 할당 -----\n');

var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
// 기본값 설정하기
var item3 = list[2] || -1;
console.log(list);
console.log(item1);
console.log(item2);
console.log(item3);

console.log('원본 item1 출력 : ' + item1);
console.log('원본 item2 출력 : ' + item2);
// 변수의 값 서로 바꾸기
// 임시 변수를 선언하고 다른 변수의 값을 저장
var temp = item2;
item2 = item1;
item1 = temp;
console.log('바꾼 후 item1 출력 : ' + item1);
console.log('바꾼 후 item2 출력 : ' + item2);

// ES5 방식으로 object 타입 변수 선언
var obj = {
  key1: 'one',
  key2: 'two',
};

// object타입이 가지고 있는 요소를 변수에 대입
var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value'; // 기본값 설정
var newKey = obj.key1;

console.log('원본 object 타입 obj의 값 : ');
console.log(obj)
console.log(`key1의 값 : ${key1}`);
console.log(`key2의 값 : ${key2}`);
console.log(`key3의 값 : ${key3}`);
console.log(`newKey 값 : ${newKey}`);

console.log('\n ----- ES6 방식의 구조분해 할당 -----\n');

var list = [0, 1];
// ES6의 전개연산방식을 사용하여 변수를 한번에 선언하고 데이터를 입력
var [item1, item2, item3 = -1] = list;
console.log(`변수 item1 : ${item1}`);
console.log(`변수 item2 : ${item2}`);
console.log(`변수 item3 : ${item3}`);

console.log();
console.log(`원본 item1 : ${item1}`);
console.log(`원본 item2 : ${item2}`);

// ES6의 전개연산방식을 사용하여 변수 값을 스와핑함
[item2, item1] = [item1, item2];
console.log(`변경된 item1 : ${item1}`);
console.log(`변경된 item2 : ${item2}`);

var obj = {
  key1: 'one',
  key2: 'two',
};
console.log('원본 obj의 값 : ');
console.log(obj);
console.log(`원본 obj.key1의 값 : ${obj.key1}`);
console.log(`원본 obj.key2의 값 : ${obj.key2}`);

// ES6에서 object 타입을 전개연산법으로 구조 분해 할당을 진행할 경우 = 연산자 오른쪽에 있는 object 타입이 가지고 있는 key명과 동일한 이름을 찾아서 값을 대입함
// = 연산자 왼쪽에 있는 변수명과 같은 key 명이 없을 경우 null을 대입
// = 연산자 왼쪽에 있는 변수에 기본값을 설정하여 사용할 수 있음
// key1: newKey1 은 기존 객체 타입이 가지고 있는 요소의 key명인 key1를 가져와서 : 기호 뒤에 있는 이름을 변수명으로 사용하고 객체 타입의 키와 매칭되는 값을 새로 생성한 변수에 대입함
var {key2, key1: newKey1, key3 = 'default key3 value'} = obj;
console.log(`변수 key1 : ${key1}`);
console.log(`변수 key2 : ${key2}`);
console.log(`변수 key3 : ${key3}`);
console.log(`변수 newKey1 : ${newKey1}`);










