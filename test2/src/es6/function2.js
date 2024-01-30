console.log('\n ----- ES6 방식의 함수 사용하기 ----- \n');

// ES6에서는 람다식을 사용하여 함수를 선언할 수 있음
// ES6에서는 화살표함수라고 함
// ES5의 변수에 함수를 저장하는 방식과 비슷
// function 키워드를 생략, 매개변수 다음에 => 기호를 사용
// => 기호 다음에 {} 를 사용하여 소스코드를 입력함
const add1 = (num1, num2) => {
  return num1 + num2;
}

// 함수의 내용이 1개 라인이며 return 값이 있을 경우 {} 생략 가능
const add2 = (num1, num2) => num1 + num2;

console.log(`함수 add1 실행 : ${add1(10, 20)}`);
console.log(`함수 add2 실행 : ${add2(10, 20)}`);

console.log(`함수 add1의 타입 : ${typeof add1}`);
console.log(`함수 add2의 타입 : ${typeof add2}`);

// 화살표 함수에서 매개변수가 1개일 경우 () 생략 가능
const add3 = num1 => num1 * num1;
console.log(`함수 add3 실행 : ${add3(10)}`);

const add4 = (num1) => num1 * num1;
console.log(`함수 add4 실행 : ${add4(10)}`);

// 화살표 함수 사용 시 매개변수가 없을 경우 반드시 ()가 있어야 함
const add5 = () => { console.log('매개변수가 없는 화살표 함수') }
// 화살표 함수 사용 시 매개변수가 없고 소스가 1라인일 경우, () 필수, {} 생략 가능
const add6 = () => console.log('매개변수가 없는 화살표 함수')
add5();
add6();

// 화살표 함수 사용 시 반환값이 object 타입일 경우 반드시 ()로 감싸야 함
const addAndMulti = (num1, num2) => ({
  add: num1 + num2,
  multi: num1 * num2,
})
console.log(addAndMulti(10, 20));

// 함수의 반환 타입이 함수일 경우
function func1(num) {
  let value = num;

  // 익명함수를 반환
  return function (value) {
    return num + value;
  };
}

console.log(func1(10))
let result = func1(10);
console.log(result(10));

// 함수의 반환값이 익명함수인 것을 화살표 함수로 표현
const func2 = num => value => num + value;
console.log(func2(10));
result = func2(10);
console.log(result(10))

// func2()의 반환값인 익명함수를 변수에 저장하고 저장한 익명함수를 다시 실행하는 소스코드를 한번에 표현
console.log(func2(10)(10))







