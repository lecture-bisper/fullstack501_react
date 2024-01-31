console.log('----- forEach 사용하기 -----');

// ES6에서 배열 관련 함수로 추가된 함수
// 지정한 배열의 첫번째 요소에서 마지막 요소까지 차례대로 반복 실행하는 함수
// 매개변수로 콜백함수를 받아서 사용함
// 자바의 향샹된 for문과 동일한 역할을 하는 함수

// 사용법 :
// 배열명.forEach(function(currentValue, index, array) {
//   반복 실행할 소스코드
// })

// currentValue(필수) : 지정한 배열에서 추출한 요소의 값
// index(옵션) : 지정한 배열에서 추출한 요소의 index 값
// array(옵션) : 지정한 배열, 원본 배열에 접근할 수 있음

const numbers = [10, 20, 30, 40, 50];

// ES5에서 배열의 내용 출력하기
console.log('\n ----- ES5에서 배열의 내용을 for문으로 출력하기 -----')

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log('\n ----- ES5에서 배열의 내용을 for ~ in 문으로 출력하기 -----')

for (let item in numbers) {
  console.log(numbers[item]);
}

console.log('\n ----- ES6에서 배열의 내용을 forEach문으로 출력하기 -----')

numbers.forEach(function (item) {
  console.log(item);
});

numbers.forEach(function (item, index) {
  console.log(`현재값 : ${item}, index : ${index}`);
})

console.log('\n원본 배열 : ');
console.log(numbers);

numbers.forEach(function (item, index, array) {
  console.log(`index : ${index}, 현재값 : ${item}`);
  console.log('배열(array) 내용 : ');
  console.log(array);
  console.log('----------');
})

numbers.forEach(item => {
  console.log(`현재 값 : ${item}`);
})

numbers.forEach(item => console.log(`현재 값 : ${item}`))









