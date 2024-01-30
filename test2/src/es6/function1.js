console.log('\n ----- ES5 방식의 함수 사용하기 -----\n');

// ES5에서 함수 선언 방식
// function 키워드와 함수명, 매개변수를 선언하고 코드 블럭 안에 소스코드를 입력하는 방식
function add1(num1, num2) {
  return num1 + num2;
}

// function 키워드를 사용하여 익명 함수를 선언하고 해당 익명 함수를 변수에 저장하는 방식
var add2 = function (num1, num2) {
  return num1 + num2;
}

console.log(`함수 add1 실행 : ${add1(10, 20)}`);
console.log(`함수 add2 실행 : ${add2(10, 20)}`);

console.log(`함수 add1의 타입 : ${typeof add1}`);
console.log(`함수 add2의 타입 : ${typeof add2}`);










