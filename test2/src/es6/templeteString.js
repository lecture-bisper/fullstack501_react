// ES6에서 템플릿 문자열을 사용할 수 있도록 추가 됨

console.log('기존 ES5에서 문자열 사용')

var string1 = '안녕하세요';
var string2 = '반갑습니다.';
// ES5에서는 문자열 연결 연산자를 사용하여 변수와 문자열을 하나로 합함
var greeting = string1 + '  ' + string2;
var product = {name: '도서', price: '4,200원'};
// object 타입과 문자열을 연결하여 사용
var message = '제품' + product.name + '의 가격은 ' + product.price + '입니다.';
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = '곱셈값은 ' + value1 * value2 + '입니다.';
// 문자열 연결 연산 사용 시 ()사용하여 간단한 연산을 진행
var operator2 = '불리언값은 ' + (boolValue ? '참' : '거짓') + '입니다.';
var multiLine = '문자열 1\n문자열 2';

console.log(greeting)
console.log(message);
console.log(operator1);
console.log(operator2);
console.log(multiLine);

console.log("\n----- ES6 방식으로 문자열 사용 -----\n")

var string1 = '안녕하세요';
var string2 = '반갑습니다.';
// '', "" 대신 `` (백틱) 안에 문자열을 입력
// ${변수명}, ${연산식} 을 입력 시 문자열 연결 연산자 없이 사용 가능
var greeting = `${string1}  ${string2}`;
var product = {name: '도서', price: '4,200원'};
var message = `제품 ${product.name}의 가격은 ${product.price}입니다.`;
var value1 = 1;
var value2 = 2;
var boolValue = false
// 연산식 사용 시에도 템플릿 문자열을 사용할 수 있음
var operator1 = `곱셈값은 ${value1 * value2} 입니다.`;
var operator2 = `불리언값은 ${boolValue ? '참' : '거짓'}입니다.`;
// 줄바꿈 기호없이 그대로 줄바꿈을 하면 실제로 적용됨
var multiLine = `문자열 1
문자열 2`;

console.log(greeting);
console.log(message);
console.log(operator1);
console.log(operator2);
console.log(multiLine);








