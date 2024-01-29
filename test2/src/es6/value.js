// ES6의 변수 선언 키워드
// var : 자바 스크립트의 기본 변수 선언 키워드, 변수가 메모리 상에 살아있는 범위가 함수를 기준으로 함, 동일한 이름으로 변수를 재 선언하는 것이 가능함
// let : ES6 버전에서 추가된 변수 선언 키워드, 변수가 메모리 상에 살아있는 범위가 코드 블럭을 기준으로 함, 동일한 이름으로 변수를 재 선언할 수 없음
// const : ES6 버전에서 추가된 상수 선언 키워드, 데이터를 단순 저장 시 const를 사용하는 것을 기본으로 함

var varA = 10;
let letA = 10;
const constA = 10;

console.log('var로 선언한 변수 : ' + varA)
console.log('let로 선언한 변수 : ' + letA)
console.log('const로 선언한 변수 : ' + constA)

// var로 선언한 변수이므로 값 변경 가능
varA = 100;
// let로 선언한 변수이므로 값 변경 가능
letA = 100;
// const로 선언하면 상수가 되므로 한번 설정한 값을 변경할 수 없음
// constA = 100;

// var로 선언 시 동일한 범위 내에서 동일한 이름의 변수를 재선언하여 사용 할 수 있음
var varA = 1000;
// let로 선언 시 동일한 범위 내에서 동일한 이름의 변수를 재선언할 수 없음
// let letA = 1000;

console.log(varA);
var varA = 200;
console.log(varA);


if (true) {
  var varB = 10;
  let letB = 10;
  console.log('if 문의 코드블럭 안에서 선언된 var 변수 varB : ' + varB);
  console.log('if 문의 코드블럭 안에서 선언된 let 변수 letB : ' + letB);
}

// var로 선언한 변수는 함수의 코드 블럭을 안에 있을 경우 모두 사용 가능
console.log('if문 밖에서 호출한 var 변수 varB : ' + varB);
// if 문 안에서 let로 선언한 변수를 호출하여 오류 발생
// console.log('if문 밖에서 호출한 let 변수 letB : ' + letB);

function funcA() {
  var varC = 10;
  let letC = 10;
  console.log('함수 funcA 안에 선언한 var 변수 varC : ' + varC);
  console.log('함수 funcA 안에 선언한 let 변수 letC : ' + letC);
}

funcA();

// var 키워드의 범위는 함수 이므로 함수를 벗어나면 변수가 삭제됨
// console.log('함수 funcA 밖에서 호출한 var 변수 varC : ' + varC);
// let 키워드의 범위는 코드블럭 이므로 코드 블럭을 벗어나면 변수가 삭제됨
// console.log('함수 funcA 밖에서 호출한 let 변수 letC : ' + letC);

console.log("-------------------------------")

// const 로 선언한 상수에 저장되는 데이터가 기본 데이터 타입이 아닌 객체 타입의 변수가 선언될 경우 값 자체가 저장되는 것이 아닌 주소가 저장됨
const info = {name: '홍길동', age: 24};
console.log(info);

// const로 선언한 상수 info의 주소는 변경되지 않기 때문에 내부의 데이터를 변경이 가능함
info.age = 30;
console.log(info);

// const 로 선언한 상수에 object 타입 (array 타입)의 경우 데이터 추가 및 삭제가 가능함
info.job = '의적';
console.log(info);

// 상수 info가 가지고 있는 주소 자체가 변경되기 때문에 오류가 발생
// info = {age: 30, job: '회사원'}
// console.log(info)

console.log("----------------------------------");

// 무결성 내장 함수 사용

const arr1 = [10, 20, 30];
const arr2 = [10, 20, 30];

// ES6 에서는 원본 배열을 직접 수정하는 함수를 사용하는 것을 지양함
console.log('원본 배열 arr1 : ' + arr1);
arr1.push(40);
arr1.push(50);

console.log('수정된 배열 arr1 : ' + arr1);

// ES6 에서는 원본은 그대로 두고 데이터를 추가하여 새로 배열을 생성하는 형태의 함수를 사용하는 것이 좋음
console.log('원본 배열 arr2 : ' + arr2);
const arr3 = arr2.concat(40);
const arr4 = arr3.concat(50);
console.log('무결성 내장함수로 수정된 배열 : ' + arr4);

arr1.pop();
arr1.pop();
console.log('가변 내장함수를 사용하여 수정 : ' + arr1);

const arr5 = arr4.slice(0, arr4.length - 1);
const arr6 = arr5.slice(0, arr5.length - 1);
console.log('무결성 내장함수를 사용하여 수정 : ' + arr6);








