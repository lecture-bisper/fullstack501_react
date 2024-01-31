console.log('----- map 함수 사용하기 -----');

// map() : ES6에서 추가된 배열 관련 함수
// forEach와 동일한 기능과 사용법을 가지고 있음
// forEach는 반환값이 없지만 map은 반환값이 존재함
// map 함수를 통해서 실행된 내용을 모아서 새로운 배열로 출력
// map의 매개변수로 콜백함수를 받아서 사용함

// 사용법 :
// let 변수명 = 배열명.map(function (currentValue, index, array) {
//   반복 실행할 소스...
//   return 반환할 값
// })

// currentValue(필수) : 지정한 배열에서 추출한 요소의 값
// index(옵션) : 지정한 배열에서 추출한 요소의 index 값
// array(옵션) : 지정한 배열, 원본 배열에 접근할 수 있음

const numbers = [10, 20, 30, 40, 50];

console.log('\n----- forEach로 배열 내용 출력 -----');

numbers.forEach(item => {
  console.log(`현재 값 : ${item}`);
});

console.log('\n----- map으로 배열 내용 출력 -----');

numbers.map(function (item) {
  console.log(`현재 값 : ${item}`);
});

numbers.map(item => {
  console.log(`현재 값 : ${item}`);
});

console.log('\n-----forEach와 map의 차이점 -----');

let newArray = [];

newArray = numbers.forEach(item => {
  console.log(`forEach로 추출한 현재값 : ${item}`);
  return item * 2;
})

console.log('forEach에서 반환한 값 : ');
console.log(newArray);

console.log();

newArray = numbers.map(item => {
  console.log(`map으로 추출한 현재값 : ${item}`);
  return item * 2;
})

console.log('map에서 반환한 값 : ');
console.log(newArray);




